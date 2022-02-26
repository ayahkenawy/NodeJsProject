const userModel = require("../../database/models/user.model")
const sendEmail = require("../helper/email.helper")
const otpGen = require("../helper/otp-gen")
var QRCode = require('qrcode')
const fs = require('fs')
class User{
    static register= async(req,res)=>{
        try{
            req.body.userType = "admin"
            const user = new userModel(req.body)
            await user.save() 
            sendEmail(user.email, "<h5>Register</h5>", "Ecommerce App", "register")
            const otp= otpGen(6)
            fs.mkdir(`images/${user._id}`,()=>{})
            fs.mkdir(`images/${user._id}/qr`,()=>{})
            QRCode.toFile(`images/${user._id}/qr/${user._id}.png`,'http://www.google.com')
            res.send({
                apiStatus:true, data: {user, otp}, message:"Data Added Successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"Error Adding User"})
        }
    }
    static login = async(req,res)=>{
        try{
            const user = await userModel.login(req.body.email, req.body.password)
            const token = await user.generateToken()
            res.send({
                apiStatus:true,
                data:{ user, token }, 
                message:"Logged In"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"Invalid Login"})
        }
    }
    static me = async(req,res)=>{
        res.send({apiStatus:true,data:req.user, message:'Data Fetched'})
    }
    static logout = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter( t => t.token != req.token )
            await req.user.save()
            res.send({apiStatus:true, data:{}, message:"Logged Out"})
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"Error In Logout"})
        }
    }
    static logoutAll = async(req,res)=>{
        try{
            req.user.tokens = []
            await req.user.save()
            res.send({apiStatus:true, data:{}, message:"Logged Out"})
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"Error In Logout"})
        }
    }
    static getAll = async(req,res)=>{
        try{
            const users = await userModel.find() //statics
            res.send({
                apiStatus:true, data: users, message:"Data Fetched Successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"Error Fetching User"})
        }
    }
    static getSingle = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id) //statics
            res.send({
                apiStatus:true, data: user, message:"Data Fetched Successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"Error Fetching User"})
        }
    }
    static delAll = async(req,res)=>{
        try{
            await userModel.deleteMany()
            res.send({
                apiStatus:true, data: [], message:"Data Deleted Successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"Error Deleting User"})
        }
    }
    static delSingle = async(req,res)=>{
        try{
            const user = await userModel.findByIdAndDelete(req.params.id)
            res.send({
                apiStatus:true, data: user, message:"Data Deleted Successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"Error Deleting User"})
        }
    }
    static editUser = async(req,res)=>{
        try{
            const user = await userModel.findByIdAndUpdate(req.params.id, {
                $set: req.body},{ new: true })
            res.send({
                apiStatus:true, data: user, message:"Data Updated Successfuly"
            })
        }
        catch(e){
            res.send({apiStatus:false, data:e.message, message:"Error Updating User"})
        }
    }

}
module.exports = User
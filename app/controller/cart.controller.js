const cartModel = require("../../database/models/cart.model")
class Cart {
    //create
    static createCart = async (req, res) => {
        try {
            const newCart = new cartModel(req.body);
            await newCart.save()
            res.send({
                apiStatus: true, data: { newCart }, message: "Data Added Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Adding Cart" })
        }
    }
    //update
    static updateCart = async (req, res) => {

        try {
            const updatedCart = await cartModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }

            )
            res.send({
                apiStatus: true, data: { updatedCart }, message: "Data Updated Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Updating Cart" })
        }
    }
    //get all 
    static getAll = async (req, res) => {

        try {
            const carts = await cartModel.find();
            res.send({
                apiStatus: true, data: carts, message: "Data Fetched Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Fetching Carts" })
        }
    }
    // get user cart
    static getUserCart = async (req, res) => {
        try {
            const cart = await cartModel.findOne({ userId: req.params.userId });
            res.send({
                apiStatus: true, data: cart, message: "Data Fetched Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Fetching Cart" })
        }
    }
    // delete single 
    static delSingle = async (req, res) => {
        try {
            const Cart = await cartModel.findByIdAndDelete(req.params.id)
            res.send({
                apiStatus: true, data: Cart, message: "Data Deleted Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Deleting Cart" })
        }
    }


}
module.exports = Cart
const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt =  require("jsonwebtoken")
const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate(val){
            if(!validator.isEmail(val)) throw new Error("Invalid Email Format")
        }
    },
    password:{
        required:true,
        type:String,
        match:'/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/'

    },
    birthDate:{
        type:Date,
        required:true
    },
    userName:{
        type:String,
        unique:true
    },
    image:{
        type:String
    },
    tokens:[{
        token:{
            type:String,
            required:true,
            trim:true
        }
    }]
},
{timestamps:true})


userSchema.methods.toJSON = function () {
    const user = this.toObject()
    const deletes = ['__v','password','tokens']
    deletes.forEach(d=> delete user[d])
    return user 
}

userSchema.pre("save", async function(){
    if(this.isModified("password"))
    
}
)
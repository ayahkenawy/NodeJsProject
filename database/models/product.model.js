const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    title:
        { type: String, required: true, unique: true },
    desc:
        { type: String, required: true, },
    img:
        { type: String,
        required:true },
    quantity: {
        type: Number
    },
    department: {
        type: String
    },
    categoryId:
        { type: String,required:true },
    size:
        { type: String },
    color:
        { type: String },
    price:
        { type: Number, required: true }
},
    { timestamps: true })
const product = mongoose.model("product", productSchema)
module.exports = product
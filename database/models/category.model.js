const mongoose = require("mongoose")
const categorySchema = mongoose.Schema({
    title:
        { type: String, required: true, unique: true },
    desc:
        { type: String, required: true },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "category"
    }
},
    { timestamps: true })
const category = mongoose.model("category", categorySchema)
module.exports = category
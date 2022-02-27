const categoryModel = require("../../database/models/category.model")
class Category {
    //create Category
    static addcategory = async (req, res) => {
        try {
            const category = new categoryModel(req.body)
            await category.save()
            res.send({ apiStatus: true, data: category, message: "Data Added Successfuly" })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Adding Category" })
        }
    }
    //Update Category
    static updateCategory = async (req, res) => {

        try {
            const updateCategory = await categoryModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            )
            res.send({
                apiStatus: true, data: { updateCategory }, message: "Data Updated Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Updating Category" })
        }
    }
    //Get All
    static allcategorys = async (req, res) => {
        try {
            const categories = await categoryModel.find()
            res.send({ apiStatus: true, data: categories, message: "Data Fetched" })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Fetching Categories" })
        }
    }
    //Get Category By ID
    static getSingle = async (req, res) => {
        try {
            const category = await categoryModel.findById(req.params.id)
            res.send({
                apiStatus: true, data: category, message: "Data Fetched Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Fetching Category" })
        }
    }
    //Delete Category
    static delSingle = async (req, res) => {
        try {
            const category = await categoryModel.findByIdAndDelete(req.params.id)
            res.send({
                apiStatus: true, data: category, message: "Data Deleted Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Deleting Category" })
        }
    }
    // delete all Categories
    static delAll = async (req, res) => {
        try {
            await categoryModel.deleteMany()
            res.send({
                apiStatus: true, data: [], message: "Data Deleted Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Deleting Categories" })
        }
    }
}
module.exports = Category
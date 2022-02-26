const productModel = require("../../database/models/product.model")
class Product {
    //create
    static createProduct = async (req, res) => {
        try {
            const product = new productModel(req.body)
            await product.save()
           
            res.send({
                apiStatus: true, data: { product }, message: "Data Added Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Adding Product" })
        }
    }
    //update
    static updateProduct = async (req, res) => {

        try {
            const updateProduct = await productModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            )
            res.send({
                apiStatus: true, data: { updateProduct }, message: "Data Updated Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Updating Product" })
        }
    }
    //get all products
    static getAll = async (req, res) => {
        const Category = req.query.category;
        try {
            let products;
            if (Category) {
                products = await productModel.find({
                    categories: {
                        $in: [Category],
                    },
                });
            } else {
                products = await productModel.find();
            }
            res.send({
                apiStatus: true, data: products, message: "Data Fetched Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Fetching Products" })
        }
    }
    // get single product
    static getSingle = async (req, res) => {
        try {
            const product  = await productModel.findById(req.params.id) 
            res.send({
                apiStatus: true, data: product, message: "Data Fetched Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Fetching User" })
        }
    }
    // delete all products
    static delAll = async (req, res) => {
        try {
            await productModel.deleteMany()
            res.send({
                apiStatus: true, data: [], message: "Data Deleted Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Deleting User" })
        }
    }
    // delete single product
    static delSingle = async (req, res) => {
        try {
            const product = await productModel.findByIdAndDelete(req.params.id)
            res.send({
                apiStatus: true, data: product, message: "Data Deleted Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Deleting User" })
        }
    }
   

}
module.exports =Product
const orderModel = require("../../database/models/order.model")
class Order {

    //create
    static createOrder = async (req, res) => {
        try {
            const order = new orderModel({
                userId: req.user._id,
                ...req.body
            })
            await order.save()
            res.send({
                apiStatus: true, data: { order }, message: "Data Added Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Adding Order" })
        }
    }
    //update
    static updateOrder = async (req, res) => {

        try {
            const updateOrder = await orderModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            )
            res.send({
                apiStatus: true, data: { updateOrder }, message: "Data Updated Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Updating Order" })
        }
    }
    //get all Orders
    static getAll = async (req, res) => {

        try {
            const orders = await orderModel.find();
            res.send({
                apiStatus: true, data: orders, message: "Data Fetched Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Fetching Orders" })
        }
    }
    // get user orders
    static getUserOrders = async (req, res) => {
        try {
            const orders = await orderModel.find({ userId: req.params.userId })
            res.send({
                apiStatus: true, data: orders, message: "Data Fetched Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Fetching Orders" })
        }
    }
    // delete single order
    static delSingle = async (req, res) => {

        try {
            const order = await orderModel.findByIdAndDelete(req.params.id)
            res.send({
                apiStatus: true, data: order, message: "Data Deleted Successfuly"
            })
        }
        catch (e) {
            res.send({ apiStatus: false, data: e.message, message: "Error Deleting Order" })
        }
    }
    // static income = async (req, res) => {
    //     const date = new Date();
    //     const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    //     const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    //     try {
    //         const income = await orderModel.aggregate([
    //             { $match: { createdAt: { $gte: previousMonth } } },
    //             {
    //                 $project: {
    //                     month: { $month: "$createdAt" },
    //                     sales: "$amount",
    //                 },
    //             },
    //             {
    //                 $group: {
    //                     _id: "$month",
    //                     total: { $sum: "$sales" },
    //                 },
    //             },
    //         ]);
    //         res.send({
    //             apiStatus: true, data: income, message: "Income Calculated Successfuly"
    //         })
    //     } catch (e) {
    //         res.send({ apiStatus: false, data: e.message, message: "Error Calculate Income" })
    //     }
    // }

}
module.exports = Order
const orderController = require("../app/controller/order.controller")
const authAndAdmin = require('../middleware/authAndAdmin')
const router = require("express").Router();
const auth = require('../middleware/auth')

//CREATE

router.post("/add", auth, orderController.createOrder)

//UPDATE
router.put("/update/:id", authAndAdmin, orderController.updateOrder)

//DELETE
router.delete("/delete/:id", authAndAdmin, orderController.delSingle)

//GET USER ORDERS
router.get("/find/:userId", auth, orderController.getUserOrders)

// //GET ALL

router.get("/all", authAndAdmin, orderController.getAll)

// GET MONTHLY INCOME

// router.get("/income", authAndAdmin, orderController.income);

module.exports = router;

const cartController = require("../app/controller/cart.controller")
const authAndAdmin = require('../middleware/authAndAdmin')
const router = require("express").Router();
const auth = require('../middleware/auth')

//CREATE

router.post("/add", auth, cartController.createCart)

//UPDATE
router.put("/update/:id", auth, cartController.updateCart)

//DELETE
router.delete("/delete/:id", auth, cartController.delSingle);

//GET USER CART
router.get("/find/:userId", auth,cartController.getUserCart)

// //GET ALL

router.get("/all", authAndAdmin,cartController.getAll )

module.exports = router;

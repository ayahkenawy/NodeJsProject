const categoryController = require("../app/controller/category.controller")
const auth = require('../middleware/authAndAdmin')
const router = require("express").Router();
// Create
router.post("/add", auth, categoryController.addcategory)
//UPDATE
router.put("/update/:id", auth, categoryController.updateCategory)
//GET ALL Categories
router.get("/all", categoryController.allcategorys)
//GET CATEGORY BY ID
router.get("/find/:id", categoryController.getSingle)
//DELETE Single Category
router.delete("/all/:id", auth, categoryController.delSingle)
// delete all
router.delete("/all", auth, categoryController.delAll)
module.exports = router
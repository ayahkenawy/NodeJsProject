const productController = require("../app/controller/product.controller")
const auth = require('../middleware/authAndAdmin')
const router = require("express").Router();
const upload = require("../middleware/productPicUpload")

//CREATE

router.post("/add", auth, upload.single('image'), productController.createProduct)

//UPDATE
router.put("/update/:id", auth, productController.updateProduct)

//DELETE Single product
router.delete("/all/:id", auth, productController.delSingle)
// delete all
router.delete("/all", auth, productController.delAll)

//GET PRODUCT
router.get("/find/:id", productController.getSingle)

//GET ALL PRODUCTS BY CAT ID
router.get("/all/:catId", productController.getAllByCatId)
//GET ALL PRODUCTS
router.get("/all", productController.getAll)
// //upload img
// router.post('/productImg',upload.single('image'), (req,res)=> {
//     res.send(req.file)
// })

module.exports = router
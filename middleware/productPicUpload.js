const multer = require("multer")
const path = require("path")
const fs = require("fs")
let loc="";
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        if(req.product){ loc = path.join("productsPics", file.fieldname, req._id.toString()) 
        }        
        else {loc = path.join("productsPics", file.fieldname) 
        }   
     fs.mkdir(loc, (err)=>{})
        cb(null, loc)
    },
    filename: function(req,file, cb){
        const myName = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        cb(null, myName)
    }
})
const upload = multer({
    storage,
    limits:{fileSize:20000000},
    fileFilter: function(req, file, cb){
        // console.log( path.extname(file.originalname));
        if(path.extname(file.originalname)!=".png") 
              if(path.extname(file.originalname)!=".jpg")
                     return cb(new Error("Invalid Extention"), false)
        cb(null, true) 
    }
})
module.exports = upload
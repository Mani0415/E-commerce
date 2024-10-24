import express from "express"
import { createProduct } from "../controllers/productController.js"
import { isAuth } from "../middleware/isAuth.js"
import { uploadFiles } from "../middleware/multer.js"
 
const router=express.Router()

router.post('/create',isAuth,uploadFiles,createProduct)

export default router
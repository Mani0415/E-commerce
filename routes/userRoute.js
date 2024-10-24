import express from "express";
import { Myprofile, RegisterUser, verifySignup } from "../controllers/userControl.js";
import {isAuth} from "../middleware/isAuth.js"

const router= express.Router();

router.post("/register",RegisterUser);
router.post("/login",verifySignup)
router.get("/profile",isAuth,Myprofile)

export default router;
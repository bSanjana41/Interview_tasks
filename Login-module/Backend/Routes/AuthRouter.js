import {Router} from "express"
import { loginValidation, otpValidation, signupValidation } from "../Middleware/AuthValidation.js"
import { LoginStep1, LoginStep2, Signup } from "../Controller/userController.js"

const router=Router()
router.post("/signup",signupValidation,Signup)
router.post("/login-step1",loginValidation,LoginStep1)
router.post("/login-step2", otpValidation, LoginStep2);

// router.get("/getall",)
// router.get("/get:id",)
// router.patch("/update:id",)
// router.delete("/delete:id") 
// export default router
export default router
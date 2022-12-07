import express from "express"
import VerifyToken from "../VerifyToken.js"
import Employee from "../models/Employee.js"
import Employer from "../models/Employer.js"
import jwt from "jsonwebtoken"
import {EmployeeRegister, LoginEmployer,forgotPassword,newpass} from "../controllers/Auth.js"
import {EmployeeLogin} from "../controllers/Auth.js"
import {RegisterEmployer} from "../controllers/Auth.js"
import bcrypt from "bcryptjs"
const router=express.Router()
router.post("/register-employee",EmployeeRegister)
router.post("/login-employee",EmployeeLogin)
router.post("/register-employer",RegisterEmployer)
router.post("/login-employer",LoginEmployer)
router.post("/reset",forgotPassword)
router.post("/newpass",newpass)
export default router
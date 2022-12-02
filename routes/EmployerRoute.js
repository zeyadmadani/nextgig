import express from "express"
import Employer from "../models/Employer.js";
import VerifyToken from "../VerifyToken.js"
import bcrypt from "bcryptjs"
const router=express.Router()
router.put("/updateemployer",async(req,res,next)=>
{
    try {
        if(req.body.password)
        {
          const salt = await bcrypt.genSaltSync(10);
          req.body.password = await bcrypt.hashSync(req.body.password, salt);
        }
        const updateEmployer = await Employer.findByIdAndUpdate(
          req.body.userId,
          {
            $set: req.body
          },
          { new: true }
        );
        res.status(200).json(updateEmployer);
      } catch (err) {
        next(err);
      }
})
router.get("/getspecificemployer/:id",async(req,res)=>
{
  try
  {
const employer=await Employer.findById(req.params.id)
res.status(200).json(employer)
  }
  catch(e)
  {
      res.status(500).json("Internal Server Error...")
  }
})
export default router
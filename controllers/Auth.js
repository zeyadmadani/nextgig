import bcrypt from "bcryptjs"
import Employee from "../models/Employee.js"
import Employer from "../models/Employer.js"
import jwt from "jsonwebtoken"
import {v4 as uuid} from "uuid"
import nodemailer from "nodemailer"
import { createError } from "../error.js"
export const EmployeeRegister=(async(req,res,next)=>
{
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(req.body.password, salt);
        const newEmployee = new Employee({ ...req.body, password: hash });
        const savedEmployee=await newEmployee.save();
        res.status(200).json(savedEmployee);
      } catch (err) {
        next(err);
      }
})
export const EmployeeLogin=(async(req,res,next)=>
{
    try {
        const employee = await Employee.findOne({ email: req.body.email });
        if (!employee) return next(createError(404, "Employee not found!"));
        const isCorrect = await bcrypt.compare(req.body.password, employee.password);
        if (!isCorrect) return next(createError(401, "Wrong Credentials!"));
        const token = jwt.sign({ id: employee._id }, process.env.JWT);
        const { password, ...others } = employee._doc;
        res.cookie("access_token", token, {httpOnly: true,
          expiresIn:"12h"
          })
          .status(200)
          .json(others);
  
  }
  catch(err)
  {
  next(err)
  }
})
export const RegisterEmployer=(async(req,res,next)=>
{
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(req.body.password, salt);
        const newEmployer = new Employer({ ...req.body, password: hash });
        const savedEmployer=await newEmployer.save();
        res.status(200).json(savedEmployer);
      } catch (err) {
        next(err);
      }
})
export const LoginEmployer=(async(req,res,next)=>
{
    try {
        const employer = await Employer.findOne({ email: req.body.email });
        if (!employer) return next(createError(404, "Employee not found!"));
        const isCorrect = await bcrypt.compare(req.body.password, employer.password);
        if (!isCorrect) return next(createError(401, "Wrong Credentials!"));
        const token = jwt.sign({ id: employer._id }, process.env.JWT);
        const { password, ...others } = employer._doc;
        res.cookie("access_token", token, {httpOnly: true,
          expiresIn:"12h"
          })
          .status(200)
          .json(others);
  
  }
  catch(err)
  {
  next(err)
  }
})
export const forgotPassword=async(req,res,next)=>
{
  const token=uuid()
  const employee=await Employee.findOne({email:req.body.email})
  const employer=await Employer.findOne({email:req.body.email})
  if(employee)
  {

    await employee.updateOne({resetToken:token,expireToken:Date.now()+900000},{new:true})
   const transporter=nodemailer.createTransport(
{
      service:"hotmail",
auth: {
 user: process.env.MAILER_EMAIL_ID,
 pass: process.env.MAILER_PASSWORD
}})
const mailOptions = {
from: 'no_reply.nextgig@outlook.com', 
to: employee.email, 
subject: `${employee.name}'s Password Reset Link - Next Gig`, 
html: `<body><p>Hello ${employee.name},</p> <p>Below is your reset link for your account.</p> <p><a href="https://www.nextgig.site/5433367890-9876546789087654367890-987654356787654678976-894365465463545486547568556834574865486484-3456789876567898765456789-8765467890876578905-4389034934234-4651498764596835468489654685486458468468487649796549846458796554864589659864589764567890238724-453333333598573480734597043759387589439850284390594023450-2317Y6U32179808/${token}">Reset Link</a></p> <p>Thank you for using Next Gig!</p></body>`, 
};

transporter.sendMail(mailOptions, function(err, info) {
if (err) {
next(err)
} else {
res.status(200).json("Email sent")
}
});
  }
  else if(employer)
  {
  
    await employer.update({resetToken:token,expireToken:Date.now()+900000},{new:true})
   const transporter=nodemailer.createTransport(
{
      service:"hotmail",
auth: {
 user: process.env.MAILER_EMAIL_ID,
 pass: process.env.MAILER_PASSWORD
}})
const mailOptions = {
from: 'no_reply.nextgig@outlook.com', 
to: employer.email, 
subject: `${employer.company}'s Password Reset Link - Next Gig`,
html: `<body><p>Hello ${employer.company},</p> <p> Below is your reset link for your account.</p> <p><a href="https://www.nextgig.site/5433367890-9876546789087654367890-987654356787654678976-894365465463545486547568556834574865486484-3456789876567898765456789-8765467890876578905-4389034934234-4651498764596835468489654685486458468468487649796549846458796554864589659864589764567890238724-453333333598573480734597043759387589439850284390594023450-2317Y6U32179808/${token}">Reset Link</a></p> <p>Thank you for using Next Gig!</p></body>`, 
};

transporter.sendMail(mailOptions, function(err, info) {
if (err) {
next(err)
} else {
res.status(200).json("Email sent")
}
});
  }
else {
  res.status(500).json("Server Error...")
}
      
}
export const newpass=(async(req,res,next)=>
{
  
const newpassword=req.body.password
const sentToken=req.body.token
const employee= await Employee.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
const employer= await Employer.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
    if(!employee && !employer)
    return res.status(422).json("Session has expired")
    if(employee)
    {
      const salt = await bcrypt.genSaltSync(10);
      const newpass = await bcrypt.hashSync(newpassword, salt);
      employee.updateOne({password:newpass,resetToken:undefined,expireToken:undefined},{new:true})
      .then(employee=>
        {
            res.status(200).json("Success")
        }).catch(e=>{next(e)})
    }
    else if(employer)
    {
      
      const salt = await bcrypt.genSaltSync(10);
      const newpass = await bcrypt.hashSync(newpassword, salt);
      employer.updateOne({password:newpass,resetToken:undefined,expireToken:undefined},{new:true})
      .then(user=>
        {
            res.status(200).json("Success")
        }).catch(e=>{next(e)})

    }
    else 
    {
      res.status(500).json("server error")
    }
  })

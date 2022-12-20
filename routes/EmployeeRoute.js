import express from "express"
import Employee from "../models/Employee.js"
import Jobs from "../models/Jobs.js"
import VerifyToken from "../VerifyToken.js"
import nodemailer from "nodemailer"
import Employer from "../models/Employer.js"
import bcrypt from "bcryptjs"
const router=express.Router()
router.put("/updateEmployee",async(req,res,next)=>
{

        try {
          if(req.body.password)
          {
            const salt = await bcrypt.genSaltSync(10);
            req.body.password = await bcrypt.hashSync(req.body.password, salt);
          }
          const updateEmployee = await Employee.findByIdAndUpdate(
            req.body.userId,
            {
              $set: req.body
            },
            { new: true }
          );
          res.status(200).json(updateEmployee);
        } catch (err) {
          next(err);
        }

})
router.put("/upload-resume",async(req,res,next)=>
{
    try 
    {
await Employee.findByIdAndUpdate(req.body.id,{$set:req.body},{new:true})
res.status(200).json("Resume added")
    }
    catch(e)
    {
        next(e)
    }
})
router.put("/delete-resume",async(req,res,next)=>
{
    try 
    {
await Employee.findByIdAndUpdate(req.body.id,{$set:req.body},{new:true})
res.status(200).json("Resume removed")
    }
    catch(e)
    {
        next(e)
    }
})
router.put("/applyforajob/:id",async(req,res,next)=>
{
    try 
    {
        await Employee.findByIdAndUpdate(req.body.userId,{$addToSet:{jobsAppliedFor:req.params.id}},{new:true})
        await Jobs.findByIdAndUpdate(req.params.id,{$push:{applied:req.body.userId}},{new:true})
        const targetJob=await Jobs.findById(req.params.id)
        const employee=await Employee.findById(req.body.userId)
        const employerId=targetJob.employerId 
        const employerInfo=await Employer.findById(employerId)
        console.log(employerInfo)
        const transporter=nodemailer.createTransport(
            {
                  service:"hotmail",
           auth: {
             user: process.env.MAILER_EMAIL_ID,
             pass: process.env.MAILER_PASSWORD
           }})
           const mailOptions = {
            from: 'no_reply.nextgig@outlook.com',
            to: employerInfo.email, 
            subject: `${employee.name}'s Resume - New Application Received`,
            html: `
            <body>
            <p>Hello ${employerInfo.company},</p><p> ${employee.name} has applied for the ${targetJob.title} position at your company. Please find below their resume.</p>
             <p>
             <a href=${employee.resumeURL}>Click Here to View ${employee.name}'s Resume</a>
             </p> 
             <hp>Thank you for using our Next Gig!</p>
             <p>Regards...</p>
             </body>`, 
        };
        
        transporter.sendMail(mailOptions, function(err, info) {
           if (err) {
           next(err)
           } else {
         res.status(200).json("Email sent")
           }
        });
        
res.status(200).json("you applied for the job")
    }
    catch(e)
    {
        next(e)
    }
})
router.get("/getspecificemployee/:id",async(req,res)=>
{
  try
  {
const emp=await Employee.findById(req.params.id)
res.status(200).json(emp)
  }
  catch(e)
  {
      res.status(500).json("Internal Server Error...")
  }
})
router.put("/sendemailtoclient/:id",async(req,res,next)=>
{
  setTimeout(async() => {
    try 
    {
        const emp=await Employee.findById(req.params.id)
        const job=await Jobs.findById(req.body.jobId)
        const employer=await Employer.findById(job.employerId)
        const transporter=nodemailer.createTransport(
            {
                  service:"hotmail",
           auth: {
             user: process.env.MAILER_EMAIL_ID,
             pass: process.env.MAILER_PASSWORD
           }})
           const mailOptions = {
            from: 'no_reply.nextgig@outlook.com',
            to: emp.email, 
            subject: `Your Application Has Been Received`, 
            html: `
            <body>
            <p>Hello ${emp.name},</p><p> Your Application for the ${job.title} position at ${employer.company} has been submitted to the employer. at this stage, Please continue looking for other jobs while ${employer.company} processes your application.</p>
             <p>Thank you for using Next Gig!</p>
             <p>Regards,</p>
             <p>Next Gig Management</p>
             
             </body>`
        };
        
        transporter.sendMail(mailOptions, function(err, info) {
           if (err) {
           next(err)
           } else {
         res.status(200).json("Email sent")
           }
        });
        
res.status(200).json("you applied for the job")
    }
    catch(e)
    {
        next(e)
    }
  }, 100);

})


export default router

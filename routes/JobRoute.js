import express from "express"
import VerifyToken from "../VerifyToken.js"
import Jobs from "../models/Jobs.js"
import { createError } from "../error.js"
import Employee from "../models/Employee.js"
import nodemailer from "nodemailer"
const router=express.Router()
router.post("/postajob",async(req,res,next)=>
{
    const newJob=new Jobs({...req.body})
    try
    {
await newJob.save()
res.status(200).json(newJob)
    }
    catch(e)
    {
        next(e)
    }
})
router.delete("/:id",async(req,res,next)=>
{
try 
{
  const job=await Jobs.findById(req.params.id)
  await job.delete()
  const employees=await Employee.find()
  employees.forEach(employee=>
    {
      employee.applied.pull(req.params.id)
    })
  res.status(200).json("Job has been deleted successfully")
}
catch(e)
{
res.status(500).json("Server Error!")
}
})
router.get("/getspecificjob/:id",async(req,res)=>
{
    try
    {
const job=await Jobs.findById(req.params.id)
res.status(200).json(job)
    }
    catch(e)
    {
        res.status(500).json("Internal Server Error...")
    }
})
router.get("/getemployerjobs/:id",async(req,res)=>
{
    try
    {
const job=await Jobs.find({employerId:req.params.id})
res.status(200).json(job)
    }
    catch(e)
    {
        res.status(500).json("Internal Server Error...")
    }
})
router.get("/getappliedforjobs/:userId",async(req,res)=>
{
    try
    {
const emp=await Employee.findById(req.params.userId)
const jobs=await Jobs.find()
let jobsArr=[]
jobs.forEach(job=>
    {
        if(emp.jobsAppliedFor.includes(job._id))
        jobsArr.push(job)
    })
res.status(200).json(jobsArr)
    }
    catch(e)
    {
        res.status(500).json("Internal Server Error...")
    }
})
router.get(`/getcandidates/:id`,async(req,res)=>
{
try 
{
    const job=await Jobs.findById(req.params.id)
    const candidates=[]
    job.applied.forEach(async(element)=>
        {
            candidates.push(element)
        })
        console.log(candidates)
        res.status(200).json(candidates)
}
catch(e)
{
    res.status(500).json("Server Error!")
}
})
router.get("/getalljobs",async(req,res)=>
{
    try
    {
const jobs=await Jobs.find()
res.status(200).json(jobs)
    }
    catch(e)
    {
        res.status(500).json("Internal Server Error...")
    }
})
router.put("/edit/:id",async(req,res,next)=>
{

    try {
        const job = await Jobs.findById(req.params.id);
        if (!job) return next(createError(404, "job not found!"));
       
          const updatedJob = await Jobs.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedJob);

        }
       catch (err) {
        next(err);
      }
})
router.put("/incapplied",async(req,res,next)=>
{

    try {
        const job = await Jobs.findById(req.body.id);
        if (!job) return next(createError(404, "job not found!"));
       
          const updatedJob = await Jobs.findByIdAndUpdate(
            req.params.id,
            {
              $addToSet:{applied:req.body.userId},
            },
            { new: true }
          );
          res.status(200).json(updatedJob);

        }
       catch (err) {
        next(err);
      }
})
router.delete("/delete/:id",async(req,res,next)=>
{

    try 
{
await Jobs.findByIdAndDelete(req.params.id)
res.status(200).json("Job has been deleted")
}
catch(e)
{
next(e)
}
})
router.get("/search/:id",async(req,res)=>
{
    const query=req.params.id
    const arr=query.split("+")
    const query1=arr[0]
    const query2=arr[1]
    if(arr[0] && !arr[1])
    {
        try {
            const jobs = await Jobs.find({
              title: { $regex: query1, $options: "i" },
            });
            res.status(200).json(jobs);
          } catch (err) {
           throw err
          }
    }
    else if(!arr[0] && arr[1])
    {
        try {
            const jobs = await Jobs.find({
              address: { $regex: query2, $options: "i" },
            });
            res.status(200).json(jobs);
          } catch (err) {
            throw err
          }

    }
else 
{
    try {
        
        const jobs = await Jobs.find({
            title: { $regex: query1, $options: "i" },
            address:{ $regex:query2, $options: "i" }
          });

        res.status(200).json(jobs);
      } catch (err) {
        throw err
      }
}
})
export default router
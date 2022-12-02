import EmployerNav from "../components/EmployerNav"
import EmployerFooter from "../components/EmployerFooter"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { axiosInstance } from "../configuration/Config"
import * as React from 'react';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Post=()=>
{
    const {currentUser}=useSelector(state=>state.user)
    const handleClose = () => setOpen(false);
    const [title,setTitle]=useState("")
    const [salary,setSalary]=useState(0)
    const [description,setDescription]=useState("")
    const [advantages,setAdvantages]=useState("")
    const [responsibilities,setResponsibilities]=useState("")
    const [qualifications,setQualifications]=useState("")
    const [summary,setSummary]=useState("")
    const [address,setAddress]=useState("")
    const [city,setCity]=useState("")
    const [type,setType]=useState("")
    const [open, setOpen] = React.useState(false);

    const handleSubmit=(e)=>
    {
        const Fun=async(e)=>
        {
           const res= await axiosInstance.post(`/Jobs/postajob`,{employerId:currentUser._id,company:currentUser.company,logo:currentUser.companyLogo,title:title,salary:salary,description:description,responsibilities:responsibilities,advantages:advantages,qualifications:qualifications,summary:summary,address:address,city:city,jobType:type})
           res.status===200 && setOpen(true)
        }
        Fun()
        e.preventDefault()
        e.reset()
    }
return(<>
<EmployerNav/>
<div class="col-md-6 offset-md-3 mt-5 changeFont">
    <h1 style={{textAlign:"center"}}>New Job Posting</h1>
    <br/><br/>
    <form onSubmit={(e)=>handleSubmit(e)}>
    <div class="form-group">
        <label for="exampleInputName">Job Title</label>
        <input onChange={(e)=>{setTitle(e.target.value)}} maxlength="30" type="text" name="fullname" class="form-control" id="exampleInputName" placeholder="Example: Software Engineer" required="required"/>
      </div>
    
    <div class="form-group">
        <label for="exampleInputName">Job Description</label>
        <textarea onChange={(e)=>{setDescription(e.target.value)}} row={10} type="text" name="fullname" class="form-control" id="exampleInputName" placeholder="Add Your New Job Description" required="required"/>
      </div>
      <div class="form-group">
        <label for="exampleInputName">Advantages</label>
        <textarea onChange={(e)=>{setAdvantages(e.target.value)}} row={10} type="text" name="fullname" class="form-control" id="exampleInputName" placeholder="Describe the Job Advantages"/>
      </div>
      <div class="form-group">
        <label for="exampleInputName">Responsibilites</label>
        <textarea onChange={(e)=>{setResponsibilities(e.target.value)}} row={10} type="text" name="fullname" class="form-control" id="exampleInputName" placeholder="Describe the Job Responsibilites and what the employee would usually do on a daily basis" required="required"/>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1" required="required">Qualifications</label>
        <textarea onChange={(e)=>{setQualifications(e.target.value)}} rows={10} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Qualifications You are looking for in the successful candidate" required="required"/>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1" required="required">
            summary
        </label>
        <textarea onChange={(e)=>{setSummary(e.target.value)}} rows={10} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Job Summary" required="required"/>
      </div>
      <div class="form-group">
        <label for="exampleInputName">Annual Salary</label>
        <input onChange={(e)=>{setSalary(e.target.value)}} type="number" name="fullname" class="form-control" id="exampleInputName" placeholder="Example: 50000" required="required"/>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input onChange={(e)=>{setAddress(e.target.value)}} type="text" name="address" class="form-control" id="inputAddress" placeholder="1234 Main St" required="required"/>
      </div>
      <div class="form-group">
        <label for="inputAddress">City</label>
        <input onChange={(e)=>{setCity(e.target.value)}} type="text" name="address" class="form-control" id="inputAddress" placeholder="Calgary, AB" required="required"/>
      </div>
      <div class="form-group">
        <label for="inputAddress">Job Type</label>
        <input onChange={(e)=>{setType(e.target.value)}} type="text" name="address" class="form-control" id="inputAddress" placeholder="Example: Fulltime, Parttime" required="required"/>
      </div>


      <input style={{display:"block",margin:"20px auto"}} type="submit" value="Post Job" class="btn btn-primary"/>
    </form>
  </div>
<EmployerFooter/>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
<DoneOutlineIcon style={{color:"crimson",margin:"0 auto",display:"block",fontSize:50}}/>
    </Typography>
    <Typography style={{textAlign:"center"}} id="modal-modal-description" sx={{ mt: 2 }}>
Your Job has been posted successfully.
    </Typography>
  </Box>
</Modal>
</>)
}
export default Post

import * as React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../styles/Filter.css"
import { useDispatch, useSelector } from "react-redux";
import { changeSummary } from "../redux/userSlice";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { axiosInstance } from "../configuration/Config"
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
const Summary=()=>
{
  const dispatch=useDispatch()
    const [summary,setSummary]=useState("")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit=(e)=>
    {
const Submit=async()=>
{
const res=await axiosInstance.put("/Employee/updateEmployee",{userId:currentUser._id,summary:summary ? summary : currentUser.summary})
res.status===200 && handleOpen()
dispatch(changeSummary(summary? summary : currentUser.summary))
}
Submit()

      e.preventDefault()
      
    }
      const {currentUser}=useSelector(state=>state.user)
return(<>
<Nav/>
<br/>
<div style={{minHeight:"30rem",display:"block",margin:"20px auto"}} className="container">
          <div className="row">
      
          <form onSubmit={e=>{handleSubmit(e)}} className="col-lg-12">
            <h5 className='changeFont'>Update Your Summary</h5>
<textarea onChange={(e)=>{setSummary(e.target.value)}} style={{width:"100%",outline:"none"}} rows={14} defaultValue={currentUser.summary}>

</textarea>
<input style={{color:"#fff",backgroundColor:"purple",borderRadius:5,padding:5,display:"block",margin:"10px auto",cursor:"pointer",border:"none"}} type="submit" value="Update Summary"/>
          </form>

          </div>
        </div>
<Footer/>
<Button onClick={handleOpen}>Open modal</Button>
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
Your Information has been successfully updated.
    </Typography>
  </Box>
</Modal>
</>)
}
export default Summary
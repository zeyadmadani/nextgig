import * as React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../styles/Filter.css"
import { useDispatch, useSelector } from "react-redux";
import { changeCountry,changeAddress } from "../redux/userSlice";
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
const Location=()=>
{
  const dispatch=useDispatch()
    const [address,setAddress]=useState("")
    const [country,setCountry]=useState("")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit=(e)=>
    {
const Submit=async()=>
{
const res=await axiosInstance.put("/Employee/updateEmployee",{userId:currentUser._id,address:address? address : currentUser.address,country:country ? country : currentUser.country})
res.status===200 && handleOpen()
dispatch(changeAddress(address? address : currentUser.address))
dispatch(changeCountry(country? country : currentUser.country))
}
Submit()

      e.preventDefault()
      
    }
      const {currentUser}=useSelector(state=>state.user)
return(<>
<Nav/>
<div style={{minHeight:"30rem"}} className="container">
<div className="row">
<div className="col"></div>
<form style={{border:"2px solid grey",borderRadius:20,minWidth:"10rem",minHeight:"20rem",margin:40}} onSubmit={(e)=>{handleSubmit(e)}} className="col-lg-6">
<h4 className="changeFont" style={{textAlign:"center"}}>Contact Information</h4>
<label className="changeFont" style={{textAlign:"center",display:"block",margin:"0 auto"}}>Address</label>
<input onChange={(e)=>{setAddress(e.target.value)}} style={{width:"50%",display:"block",margin:"0 auto",borderRadius:10,outline:"none",padding:5}} required type="text"  defaultValue={currentUser.address}/>
<br/>
<label className="changeFont" style={{textAlign:"center",display:"block",margin:"0 auto"}}>Country</label>
<input onChange={(e)=>{setCountry(e.target.value)}} style={{width:"50%",display:"block",margin:"0 auto",borderRadius:10,outline:"none",padding:5}} required type="text" defaultValue={currentUser.country}/>

<input style={{color:"#fff",backgroundColor:"purple",borderRadius:5,padding:5,display:"block",margin:"10px auto",cursor:"pointer",border:"none"}} type="submit" value="Submit"/>
</form>
<div className="col"></div>
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
export default Location
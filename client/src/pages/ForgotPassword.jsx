import LoginForm from "../components/LoginForm"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styled from "styled-components"
import "../styles/LoginForm.css"
import { useEffect } from "react"
import { useState } from "react"
import { axiosInstance } from "../configuration/Config"
import ErrorIcon from '@mui/icons-material/Error';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
   
const Header=styled.div
`
height:12rem;
width:100%;
background:url("bck.jpg");
background-repeat:no-repeat;
background-size: cover;
position:relative;
`
const Main=styled.div
`
width:100%;
height:70vh;
`
    const Container=styled.div
`
min-height:25rem;
max-width:600px;
text-align:center;
margin:0 auto;
display:block;
border:2px solid rgb(217, 219, 233);
border-radius:10px;
margin-top:5%;
position:absolute;
margin-left: auto;
margin-right: auto;
left: 20px;
right: 20px;
top:20%;
text-align: center;
background-color:#fff;
z-index:999;
`
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
    const Sec=styled.main``
const ForgotPassword=()=>
{
  useEffect(()=>
  {
    window.scrollTo(0,0)
  },[])
  const handleOpen = () => setOpen(true);
  const handleFailure = () => setOpenn(true);
  
  const handleX = () => setOpenn(false);
  const handleClose = () => setOpen(false);
  const [email,setEmail]=useState("")
  const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
const handleReset=(e)=>
{
  e.preventDefault()
  const Fun=async(e)=>
  {
    const res=await axiosInstance.post(`/auth/reset`,{email:email})
    res.status===200 ? handleOpen() : handleFailure()
  }
  Fun()
}
return(<>
<Nav/>
<Main>
<Header></Header>
<Container className="uikjds">
    <div className="container">
    <div className="row">

    <div className="col-lg-12">
    <form onClick={(e)=>{handleReset(e)}}>
<br/>

  <div className="form-outline mb-4">
    <label className="form-label changeFont" for="form2Example1">Reset Your Password</label>
    <p className="changeFont">
    Please provide the email address you use to sign in. If we find an associated account, we will send you instructions to reset your password.
    </p>
    <h4 className="changeFont">Email address</h4>
    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id="form2Example1" className="form-control" />
    <br/><br/>
    <input style={{width:140,color:"#fff"}} className="btn btn-primary btn-block mb-4 minBtn centerTxt" type="submit" value="Reset Password"/>
  </div>

</form>
    </div>


    </div>
    </div>
 
</Container>
</Main>
<Footer/>
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
we would have sent an email with instructions to reset your password if the email you provided was in our records.
    </Typography>
  </Box>
</Modal>
<Button onClick={handleFailure}>Open modal</Button>
<Modal
  open={openn}
  onClose={handleX}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
<ErrorIcon style={{color:"crimson",margin:"0 auto",display:"block",fontSize:50}}/>
    </Typography>
    <Typography style={{textAlign:"center"}} id="modal-modal-description" sx={{ mt: 2 }}>
Something went wrong...
    </Typography>
  </Box>
</Modal>
</>)
}
export default ForgotPassword
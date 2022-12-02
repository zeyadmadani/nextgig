import LoginForm from "../components/LoginForm"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styled from "styled-components"
import "../styles/LoginForm.css"
import { useEffect, useState } from "react"
import { useRef } from "react"
import ErrorIcon from '@mui/icons-material/Error';
import { axiosInstance } from "../configuration/Config"
import { useParams } from "react-router-dom"
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
height:75vh;
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
z-index:999;`
const Sec=styled.main``
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
const Reset=()=>
{
  useEffect(()=>
  {
    window.scrollTo(0,0)
  },[])
  const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleFailure = () => setOpenn(true);
  
  const handleX = () => setOpenn(false);
  const handleClose = () => setOpen(false);
  const [pwd1,setPwd1]=useState("")
  const [pwd2,setPwd2]=useState("")
  const {token}=useParams()
  const handleReset=(e)=>
{
    e.preventDefault()
   
    const Fun=async()=>
    {
      axiosInstance.post(`/Auth/newpass`,{password:pwd1,token:token}).then(res=>
            {
        handleOpen()
            }).catch(e=>{handleFailure()})
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
    <form onSubmit={(e)=>{handleReset(e)}}>
<br/>

<div className="form-outline mb-4">
    <label className="form-label changeFont" for="form2Example1">Enter Your New Password</label>
    <h4 className="changeFont">New Password</h4>
    <input onChange={(e)=>{setPwd1(e.target.value)}} type="password" id="form2Example1" className="form-control" />
  </div>
  <div className="form-outline mb-4">
    <h4 className="changeFont">Confirm Password</h4>
    <input onChange={(e)=>{setPwd2(e.target.value)}} type="password" id="form2Example1" className="form-control" />
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
Your Password has been successfully updated. 
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
Token has expired. Please try again 
    </Typography>
  </Box>
</Modal>
</>)
}
export default Reset
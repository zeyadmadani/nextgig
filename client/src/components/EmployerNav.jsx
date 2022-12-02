import "../styles/Nav.css"
import styled from "styled-components"
import { Link, Navigate, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { loginSuccess,logOut } from "../redux/userSlice"
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
const Container=styled.div
`
display:flex;
justify-content:space-between;
background-color:rgb(35, 9, 57);
line-height:65px;
overflow:hidden;
align-items:center;
padding:15px;
`
const Spot=styled.div
`
display:flex;
color:#fff;
`
const InputContainer=styled.div
`
display:flex;
align-items:center;
`
const Input1=styled.input
`
height:45px;
width:400px;
border:none;
border-bottom-left-radius:5px;
border-top-left-radius:5px;
outline:none;
`
const Input2=styled.input
`
height:45px;
width:400px;
border:none;
border-bottom-right-radius:5px;
border-top-right-radius:5px;
outline:none;

`
const Break=styled.div
`
background-color:grey;
width:1px;
height:1px;
`

const Logo=styled.img``
const Buttonn=styled.button``
export const EmployerNav= () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout=()=>
  {
      dispatch(logOut())
      navigate("/EmployerSignIn")
  }
  const {currentUser}=useSelector(state=>state.user)
  return(
<>
<Container>

<Spot>
    <Logo width={100} height={60} src="/Jobs-Logo.png"/>
</Spot>
<Spot>
<Spot>
<Spot className="spot">
  
<Spot className="tools">
<Link to="/applications" style={{textDecoration:"none",color:"inherit"}}>
Applications
</Link>
</Spot>

<Spot className="tools">
<Link to="/post" style={{textDecoration:"none",color:"inherit"}}>
Post a Job
</Link>
</Spot>
<Spot className="tools">
  {!currentUser && <Link to="/EmployerSignIn" style={{textDecoration:"none",color:"inherit"}}>
Post a Job
</Link> }

</Spot>
</Spot>
</Spot>
<Spot>    
     
</Spot>
</Spot>
<Spot className="lastSpot">
<div className="changeFont" style={{color:"#fff",fontSize:15}}>{currentUser.company}</div>
{currentUser?     <PopupState className="jfdiujssd" variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="" {...bindTrigger(popupState)}>
          <AccountCircleIcon style={{color:"rgb(176, 81, 170)",fontSize:45,outline:"none",border:"none"}}/> 
          </Button>
          <Menu {...bindMenu(popupState)}>
            <Link style={{textDecoration:"none",color:"inherit"}} to="/applications">
            <MenuItem onClick={popupState.close}>Applications</MenuItem>
            </Link>
            <Link style={{color:"inherit",textDecoration:"none"}} to="/post">
            <MenuItem onClick={popupState.close}>Post A Job</MenuItem>
            </Link>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
      
    </PopupState>: <div>
<Link to="/register">
    <Buttonn className="FirstBtn">
    Sign Up
</Buttonn>
</Link>
<Link to="/login">
<Buttonn className="SecondBtn">
    Log In
</Buttonn>
</Link>
</div> }

</Spot>
</Container>
<Container>
<Spot></Spot>

<Spot></Spot>
</Container>
</>
   )
  }

export default EmployerNav
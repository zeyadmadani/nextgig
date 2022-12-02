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
export const LogoNav= () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout=()=>
  {
      dispatch(logOut())
      navigate("/")
  }
  const {currentUser}=useSelector(state=>state.user)
  return(
<>
<Container>

<Spot>
    <Logo width={100} height={60} src="/Jobs-Logo.png"/>
</Spot>

<Spot className="lastSpot">
{currentUser?     <PopupState className="jfdiujssd" variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="" {...bindTrigger(popupState)}>
          <AccountCircleIcon style={{color:"rgb(176, 81, 170)",fontSize:45,outline:"none",border:"none"}}/> 
          </Button>
          <Menu {...bindMenu(popupState)}>
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

</Container>
</>
   )
  }

export default LogoNav
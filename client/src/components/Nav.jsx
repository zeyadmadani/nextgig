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
import { useState,useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
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
export const Nav= () => {
  const dispatch=useDispatch()
  const [side,setSide]=useState(true)
  const navigate=useNavigate()
  const [searchBar,setSearchBar]=useState(false)
  const [query1,setQuery1]=useState("")
  const [query2,setQuery2]=useState("")

  const handleClick=()=>
  {
    setSearchBar(true)
  }
  const handleClose=()=>
  {
    setSearchBar(false)
  }
  const handleSearch=(e)=>
  {

navigate(`/search/${query1+"+"+query2}`)

  }
  const handleLogout=()=>
  {
      dispatch(logOut())
      navigate("/login")
  }
  const {currentUser}=useSelector(state=>state.user)
  return(
<>
<Container>

<Spot>
    <Logo className="ifdujfed" width={100} height={60} src="/Jobs-Logo.png"/>
</Spot>
<form onSubmit={e=>handleSearch(e)}>
<InputContainer className={`inpcon ${searchBar && "jdhks"}`}>
<CloseIcon className="JNBHkhjhmNKLJGTHGHlkujhjbgvktfgj" onClick={handleClose} style={{position:"absolute",right:10,cursor:"pointer",display:"none"}}/>
<Input1 onChange={e=>setQuery1(e.target.value)} className="concon" type="text" placeholder="Search Job Title"/>
<Break/>
<Input2 onChange={e=>setQuery2(e.target.value)} style={{position:"relative"}} className="concon" type="text" placeholder="Enter Location"/>
<input style={{height:50}} className={`${searchBar ? "hgjksuijgkfds" : "FirstBtn"}`} type="submit" value="Search"/>
</InputContainer>
<Spot>
    
</Spot>
<Spot>    

</Spot>
</form>
<Spot className="lastSpot">
<SearchIcon onClick={handleClick} className="kjhJUKJbJHMGkJGBHKFDJDsedss" style={{display:"none"}}/>
{currentUser?     <PopupState className="jfdiujssd" variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="" {...bindTrigger(popupState)}>
          <AccountCircleIcon style={{color:"rgb(176, 81, 170)",fontSize:45,outline:"none",border:"none"}}/> 
          </Button>
          <Menu {...bindMenu(popupState)}>
          <Link style={{textDecoration:"none",color:"inherit"}} to="/">
            <MenuItem onClick={popupState.close}>Home</MenuItem>
            </Link>
            <Link style={{textDecoration:"none",color:"inherit"}} to="/Profile">
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            </Link>
            <Link style={{color:"inherit",textDecoration:"none"}} to="/myjobs">
            <MenuItem onClick={popupState.close}>Your Jobs</MenuItem>
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
<Link to="/login" style={{zIndex:99999}}>
<Buttonn className="SecondBtn">
    Log In
</Buttonn>
<Buttonn style={{background:"none",outline:"none",color:"#fff",border:"none"}} className="Thirdbtn">
</Buttonn>
</Link>
<MenuIcon className="iufdj" style={{cursor:"pointer",zIndex:9999999999999999,display:"none",fontSize:35}} onClick={()=>setSide(false)}/>
</div> }

</Spot>
</Container>
<Container>
<Spot></Spot>
<Spot className="spot">
<Spot className="tools">
<Link to="/" style={{textDecoration:"none",color:"inherit"}}>
Find Jobs
</Link>
</Spot>
<Spot className="tools">
<Link to="/career-advice" style={{textDecoration:"none",color:"inherit"}}>
Career Advice
</Link>
</Spot>
<Spot className="tools">
<Link to="/upload-resume" style={{textDecoration:"none",color:"inherit"}}>
Upload Resume
</Link>
</Spot>
<Spot className="tools">
  {!currentUser && <Link to="/EmployerSignIn" style={{textDecoration:"none",color:"inherit"}}>
Post a Job
</Link> }

</Spot>
</Spot>
<Spot></Spot>
</Container>
<div className={`dfsds ${side ? "hide" : ""}`}>
<CloseIcon onClick={()=>setSide(true)} style={{color:"#fff",cursor:"pointer",fontSize:40,position:"absolute",right:10,top:35}}/>
<Container style={{display:"flex",flexDirection:"column",gap:20,padding:60}}>

<Link onClick={()=>{setSide(true)}} to="/" style={{textDecoration:"none",color:"#fff",borderBottom:"1px solid gold"}}>
Find Jobs
</Link>


<Link onClick={()=>{setSide(true)}} to="/career-advice" style={{textDecoration:"none",color:"#fff",borderBottom:"1px solid gold"}}>
Career Advice
</Link>


<Link onClick={()=>{setSide(true)}} to="/upload-resume" style={{textDecoration:"none",color:"#fff",borderBottom:"1px solid gold"}}>
Upload Resume
</Link>

  {!currentUser && <Link onClick={()=>{setSide(true)}} to="/EmployerSignIn" style={{textDecoration:"none",color:"#fff",borderBottom:"1px solid gold"}}>
Post a Job
</Link> }
<Link onClick={()=>{setSide(true)}} to="/login" style={{textDecoration:"none",color:"#fff",borderBottom:"1px solid gold"}}>
Sign In
</Link>
<Link onClick={()=>{setSide(true)}} to="/register" style={{textDecoration:"none",color:"#fff",borderBottom:"1px solid gold"}}>
Sign Up
</Link>



</Container>
</div>
</>
   )
  }

export default Nav
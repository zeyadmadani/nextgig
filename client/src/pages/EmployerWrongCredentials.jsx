import Footer from "../components/Footer"
import Nav from "../components/Nav"
import LoginForm from "../components/LoginForm"
import { useState } from "react"
import styled from "styled-components"
import "../styles/Login.css"
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { axiosInstance } from "../configuration/Config"
const EmployerWrongCredentials=()=>
{
    const dispatch=useDispatch()
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const navigate=useNavigate()
const handleLogin=(e)=>
{
    e.preventDefault()
const Login=async()=>
{

    try 
    {
        dispatch(loginStart())
        const res=await axiosInstance.post("/Auth/login-employer",{email:email,password:password})
        res.status===200 && dispatch(loginSuccess(res.data)) && navigate("/employer-portal")
    }
    catch(e)
    {
        dispatch(loginFailure())
    }

}
Login()

}
return(<>
<Nav/>
<div className="ik">
    
</div>
<div className="main">


<div className="con">
<div style={{textAlign:"center"}}>
<form onSubmit={e=>handleLogin(e)}>     
 <br/>
<label>Email</label>
<br/>
<input className="kuhdjf" onChange={e=>{setEmail(e.target.value)}} type="email" name="email" required/>
<br/>
<br/>
<label>Password</label>
<br/>
<input className="kuhdjf" onChange={e=>{setPassword(e.target.value)}} type="password" required name="password"/>
<br/><br/>
<p style={{color:"red"}} className="changeFont">Wrong Username or Password</p>
<input style={{color:"#fff",width:80}} className="btn btn-primary btn-block mb-4 minBtn centerTxt" type="submit" value="Sign In"/>


</form>
<Link to="/EmployerSignIn"><button className="sec">Already Registered? Log In Instead</button></Link>
<br/><br/>
<Link to="/forgot-password"><div className="centerTxt">Forgot Password?</div></Link>
</div>
</div>
</div>
<Footer/>
</>)
}
export default EmployerWrongCredentials 
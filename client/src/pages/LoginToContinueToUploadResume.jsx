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
const LoginToContinueToUploadResume=()=>
{
    const dispatch=useDispatch()
    const navigate=useNavigate()
const [email,setEmail]=useState("")
const [loading,setLoading]=useState()
const [password,setPassword]=useState("")
const handleLogin=(e)=>
{
    e.preventDefault()
const Login=async()=>
{

    try 
    {
        setLoading(true)
        dispatch(loginStart())
        const res=await axiosInstance.post("/Auth/login-employee",{email:email,password:password})
        setLoading(false)
        res.status===200 && dispatch(loginSuccess(res.data))
        res.status===200 && navigate("/profile")
    }
    catch(e)
    {
        dispatch(loginFailure())
        navigate("/wrong-credentials")
    }

}
Login()

}
return(<>
<Nav/>
<div className="ik">
    
</div>
<div className="main" style={{minHeight:"50vh"}}>


<div className="con jfdkusiljhfgd">
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


{loading ? <img width={50} height={50} src="/loadinggg.gif"/>
:<input style={{color:"#fff",width:80}} className="btn btn-primary btn-block mb-4 minBtn centerTxt" type="submit" value="Sign In"/>
}
<p style={{color:"crimson"}} className="changeFont">Please Log In to Continue</p>

</form>
<Link to="/EmployerSignIn"><button className="sec">Don't have an account? Sign Up Instead</button></Link>
<br/><br/>
<Link to="/forgot-password"><div className="centerTxt">Forgot Password?</div></Link>
<br/><br/>
</div>
</div>
</div>
<Footer/>
</>)
}
export default LoginToContinueToUploadResume 
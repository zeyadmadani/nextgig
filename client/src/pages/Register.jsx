import Footer from "../components/Footer"
import Nav from "../components/Nav"
import LoginForm from "../components/LoginForm"
import { useState } from "react"
import styled from "styled-components"
import "../styles/Login.css"
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom"
import { axiosInstance } from "../configuration/Config"
const Register=()=>
{
    const dispatch=useDispatch()
    const [email,setEmail]=useState("")
    const [name,setName]=useState("")
    const [loading,setLoading]=useState()
const [password,setPassword]=useState("")
const navigate=useNavigate()
const handleLogin=(e)=>
{
    e.preventDefault()
const Login=async()=>
{

    try 
    {
        setLoading(true)
        const res1=await axiosInstance.post("/Auth/register-employee",{name:name,email:email,password:password})
        if(res1.status===200)
        {
            dispatch(loginStart())
            setLoading(true)
            const res2=await axiosInstance.post("/Auth/login-employee",{email:email,password:password})
            res2.status===200 && dispatch(loginSuccess(res2.data)) && navigate("/upload-resume-first")
        }
    

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
<div className="main" style={{minHeight:"50vh"}}>


<div className="con jfdkusiljhfgd">
<div style={{textAlign:"center"}}>
<form onSubmit={e=>handleLogin(e)}>     
 <br/>
 
 <label>Name</label>
<br/>
<input className="kuhdjf" onChange={e=>{setName(e.target.value)}} type="text" name="name" required/>

<br/><br/>
<label>Email</label>
<br/>
<input className="kuhdjf" onChange={e=>{setEmail(e.target.value)}} type="email" name="email" required/>
<br/>
<br/>
<label>Password</label>
<br/>
<input className="kuhdjf" onChange={e=>{setPassword(e.target.value)}} type="password" required name="password"/>
<br/><br/><br/>
{loading ? <img width={50} height={50} src="/loadinggg.gif"/>
:<input style={{color:"#fff",width:80}} className="btn btn-primary btn-block mb-4 minBtn centerTxt" type="submit" value="Sign Up"/>
}

</form>
<Link to="/login"><button className="sec">Already Registered? Log In Instead</button></Link>
<br/><br/>
</div>
</div>
</div>
<Footer/>
</>)
}
export default Register 
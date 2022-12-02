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
const EmployerSignUp=()=>
{
    const dispatch=useDispatch()
    const [loading,setLoading]=useState()
    const [email,setEmail]=useState("")
    const [name,setName]=useState("")
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
        const res1=await axiosInstance.post("/Auth/register-employer",{company:name,email:email,password:password})
        if(res1.status===200)
        {
            dispatch(loginStart())
            const res2=await axiosInstance.post("/Auth/login-employer",{email:email,password:password})
            setLoading(false)
            res2.status===200 && dispatch(loginSuccess(res2.data)) && navigate("/upload-logo")
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
<div style={{minHeight:"50vh"}}  className="main">


<div className="con jfdkusiljhfgd">
<div style={{textAlign:"center"}}>
<form onSubmit={e=>handleLogin(e)}>     

 <br/>
 <h6 className="changeFont">Employer Registeration</h6>
 <br/>
 <label>Company Name</label>
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
<Link to="/EmployerSignIn"><button className="sec">Already Registered? Log In Instead</button></Link>
<br/><br/>
</div>
</div>
</div>
<Footer/>
</>)
}
export default EmployerSignUp 
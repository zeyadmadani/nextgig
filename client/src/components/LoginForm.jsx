import styled from "styled-components"
import "../styles/LoginForm.css"
import { Link } from "react-router-dom"
import { useState } from "react"
const LoginForm=({props})=>
{

const Header=styled.div
`
height:20rem;
width:100%;
background:url("bck.jpg");
background-repeat:no-repeat;
background-size: cover;
position:relative;
`
const Main=styled.div
`
width:100%;
height:50vh;
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
left: 0;
right: 0;
top:35%;
text-align: center;
background-color:#fff;
z-index:999;

`
const Button=styled.button
`
border:2px solid rgb(217, 219, 233);
background-color:inherit;
color:rgb(110, 70, 174);
font-size:12px;
padding:10px;
margin-top:30px;
cursor:pointer;
font-weight:600;
`


const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const handleEmail=(e,email)=>
{
e.preventDefault()
setEmail(email)
}
const handlePassword=(e,password)=>
{
  setPassword(password)
  e.preventDefault()
}
const handleLogin=(e)=>
{
  e.preventDefault()
console.log(email,password)
}
return(<>
<Header></Header>
<Main>
<Container>
<form onSubmit={e=>handleLogin(e)}>     
 <br/>
<label>Email</label>
<br/>
<input onChange={e=>{setEmail(e.target.value)}} type="email" name="email" required/>
<br/>
<br/>
<label>Password</label>
<br/>
<input onChange={e=>{setPassword(e.target.value)}} type="password" required name="password"/>
<br/><br/>
<input type="submit" value="Sign In"/>
</form>
</Container>
</Main>
</>)
}
export default LoginForm 
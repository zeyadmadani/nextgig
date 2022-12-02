import CareerAdviceHeading from "../components/CareerAdviceHeading"
import Nav from "../components/Nav"
import styled from "styled-components"
import PageHeading from "../components/PageHeading"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/CareerAdvice.css"
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Advices from "../components/Advices";
import React, { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Footer from "../components/Footer";
import "../styles/InterviewQuestions.css"
const CareerAdvice=()=>
{
    const [open, setOpen] = useState(false);
    useEffect(()=>
    {
      window.scrollTo(0,0)
    },[])
    const Title=styled.h3
    `
    font-weight:bold;
    text-align:center;
    margin-top:10px
    `
    const Stories=styled.div
    `
    display:inline-block;
    align-items:center;
    justify-content:center;
    `
    const Story=styled.div
    `
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:10px;
    gap:10px;
    `
    const Logo=styled.img
    `
    margin-top:40px;
    `
    const Resumes=styled.div
    `
width:70px;
height:30px;
border-radius:12px;
font-size:14px;
background-color:rgba(241, 68, 40, 0.75);
text-align:center;
display:flex;
align-items:center;
justify-content:center;
color:white;
margin-top:-60px;
    `
return(<>
    <Nav/>
<CareerAdviceHeading/>
<Title>
Featured Articles
</Title>
<div className="container">
  <div className="row">
  <div className="col-lg-1"></div>
  <div className="col-lg-5 col-md-12 col-sm-12 sepPics" style={{textAlign:"center",position:"relative",cursor:"pointer",display:"flex",justifyContent:"center"}}>
<Link to="/interview-questions">
<img className="iuhdfkjfd"  width={470} height="400" src="https://eu-recruit.com/wp-content/uploads/2020/11/what-questions-to-ask-at-a-job-interview-2-1024x682.jpg"/>
</Link>
 <p className="hukjdhsfws" style={{color:"white",position:"absolute",left:50,right:50,bottom:10,fontSize:20,fontWeight:"bold"}}>
    100 Potential Interview Questions
 </p>
  </div>
  
  <div className="col-lg-5 col-md-12 col-sm-12 sepPics" style={{textAlign:"center",position:"relative",cursor:"pointer",display:"flex",justifyContent:"center"}}>
<Link to="/first-90-day">
<img className="iuhdfkjfd"  width={470} height="400" src="https://staffroom.co.nz/wp-content/uploads/2020/06/Services-Recruitment-Agency-Tauranga-grayscale-scaled.jpg"/>
<p className="hukjdhsfws" style={{color:"white",position:"absolute",left:50,right:50,bottom:10,fontSize:20,fontWeight:"bold"}}>
TACKLE THE FIRST 90 DAYS OF YOUR NEXT ROLE
 </p>
</Link>
  </div>
  <div className="col-lg-1"></div>
    </div>
    <br/>    <br/>    <br/>    <br/>    <br/>
    <div className="container">


    <div className="row">

<div className="col-lg-9">
<h6 style={{fontWeight:"bold",textAlign:"center"}}>Successful Carrer Stories
</h6>
<br/>
<div style={{fontFamily: 'Raleway',fontWeight:500}}>
<Stories>
  <Link to="/FirstStory" style={{textDecoration:"none",color:"inherit"}}>
<Story className="hjkdfhdds">
    <Logo style={{paddingLeft:"-20px"}} src="/snap1.png"/>

  <br/>
  <p className="iudkjfe" style={{fontSize:20,fontWeight:600,fontFamily:"Nunito Sans"}}>
  Leah Marcus: missile defense to product management

  </p>
  </Story>
  </Link>
  <Link to="/SecondStory" style={{textDecoration:"none",color:"inherit"}}>
  <Story className="hjkdfhdds">
    <Logo src="/snap2.png"/>

  <br/>
  <p className="iudkjfe" style={{fontSize:20,fontWeight:600,fontFamily:"Nunito Sans"}}>
  Espree Devora: LA Startup & Female Tech Entrepreneur
  </p>
  </Story>
  </Link>
  <Link to="/ThirdStory" style={{textDecoration:"none",color:"inherit"}}>
  <Story className="hjkdfhdds">
    <Logo style={{paddingLeft:15}} src="/snap3.png"/>

  <br/>
  <p className="iudkjfe" style={{fontSize:20,fontWeight:600,fontFamily:"Nunito Sans"}}>
  Jonah Perreti: huffed & buzzed from teacher to media king
  </p>
  </Story>
  </Link>
</Stories>
</div>
</div>
<div className="col"></div>
<div className="col-lg-2" >
<h6 className="uekdhjsn" style={{fontWeight:"bold"}}>Career Advices
</h6>
<br/>
<p style={{fontWeight:"bold"}}>
<Advices/>

</p>
</div>


</div>
  </div>
  </div>
  <Footer/>
</>)
}
export default CareerAdvice
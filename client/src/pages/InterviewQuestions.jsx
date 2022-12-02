import Nav from "../components/Nav"
import styled from "styled-components"
import CareerAdviceHeading from "../components/CareerAdviceHeading"
import React, { useState,useEffect } from 'react';
import "../styles/InterviewQuestions.css"
import Advices from "../components/Advices"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import HotizontalTips from "../components/HorizontalTips"
import { useSelector } from "react-redux";

const InterviewQuestions=()=>
{

  useEffect(()=>
  {
    window.scrollTo(0,0)
  },[])
    const Box=styled.div`
    max-height:320px;
    background-color:#3d2462;
    border-radius:30px;
    text-align:center;
    display:flex;
    justify-content:center;
    padding:15px;
    align-items:center;
    font-size:18px;
    color:white;
    display:inline-block;
    margin-top:5px;
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
    const currentUser=useSelector(state=>state.user)
return(<>
    <Nav/>
<CareerAdviceHeading/>
<div className="container">
<div className="row">
<div className="col-lg-8 col-md-12 sepPics" style={{textAlign:"center",position:"relative",cursor:"pointer"}}>
<div style={{display:"flex",alignItems:"center"}}>
  <div className="container">
    <div className="row">

      <div className="col-lg-6">    <img style={{marginTop:25}} src="career-advice.png"/></div>
  
 <div className="col-lg-6 hukhsdgyuides" style={{marginTop:30}}>
While there are as many different possible interview questions as
there are interviewers, it always helps to be ready for anything.
So we've prepared a list of 100 potential interview questions. Will
you face them all? We pray no interviewer would be that cruel. Will
you face a few? Probably. Will you be well-served by being ready
even if you're not asked these exact questions? Absolutely. by Thad Peterson
    </div> 
 
    </div>
  </div>

</div>
  </div>
  <div className="col"></div>
  <div className="col-lg-3 col-md-12 sepPics" style={{textAlign:"center",position:"relative",cursor:"pointer",display:"flex"}}>
<div style={{display:"flex",alignItems:"center"}}>
<div>
<Box >
Get great content like this and the <i style={{color:"#f2b127"}}> hottest jobs delivered to your inbox.</i>
{!currentUser && 
<Link to="/Register">
<button className="joinBtn">Join Now</button>
</Link>}
</Box>
</div>
</div></div>
  
 
    </div>
    <br/>  
    <div className="container">


    <div className="row">

    <div className="col-lg-8" >
<h6 style={{fontWeight:"bold"}}>COLLECTION
</h6>
<br/>
<p style={{fontFamily: 'Nunito Sans'}}>
&#8226; Tell me about yourself. <br/>
&#8226; What are your strengths? <br/>
&#8226; What are your weaknesses? <br/>
&#8226; Who was your favorite manager and why?<br/>
&#8226; What kind of personality do you work best with and why?<br/>
&#8226; Why do you want this job?<br/>
&#8226; Where would you like to be in your career five years from now?<br/>
&#8226; Tell me about your proudest achievement.<br/>
&#8226; If I were to give you this salary you requested but let you<br/>
&#8226; write your job description for the next year, what would it say?
<br/>
&#8226; Why is there fuzz on a tennis ball?<br/>
&#8226; How would you go about establishing your credibility quickly with the team?<br/>
&#8226; Was there a person in your career who really made a difference?<br/>
&#8226; What's your ideal company?<br/>
&#8226; What attracted you to this company?<br/>
&#8226; What are you most proud of?<br/>
&#8226; What are you looking for in terms of career development?<br/>
&#8226; What do you look for in terms of culture -- structured or entrepreneurial?<br/>
&#8226; What do you like to do?<br/>
&#8226; Give examples of ideas you've had or implemented.<br/>
&#8226; What are your lifelong dreams?<br/>
&#8226; What do you ultimately want to become?<br/>
&#8226; How would you describe your work style?<br/>
&#8226; What kind of car do you drive?<br/>
&#8226; What's the last book you read?<br/>
&#8226; What magazines do you subscribe to?<br/>
&#8226; What would be your ideal working situation?<br/>
&#8226; Why should we hire you?<br/>
&#8226; What did you like least about your last job?<br/>
&#8226; What do you think of your previous boss?<br/>
&#8226; How do you think I rate as an interviewer?<br/>
&#8226; Do you have any questions for me?<br/>
&#8226; When were you most satisfied in your job?<br/>
&#8226; What can you do for us that other candidates can't?<br/>
&#8226; What negative thing would your last boss say about you?<br/>
&#8226; If you were an animal, which one would you want to be?<br/>
&#8226; What salary are you seeking?<br/>
&#8226; What's your salary history?<br/>
&#8226; Do you have plans to have children in the near future?<br/>
&#8226; What were the responsibilities of your last position?<br/>
&#8226; What do you know about this industry?<br/>
&#8226; What do you know about our company?<br/>
&#8226; How long will it take for you to make a significant contribution?<br/>
&#8226; Are you willing to relocate?<br/>
&#8226; What kind of goals would you have in mind if you got this job?<br/>
&#8226; What would you do if you won the lottery?<br/>
&#8226; What is your personal mission statement?<br/>
&#8226; What irritates you about other people, and how do you deal with it?<br/>
&#8226; What is your greatest fear?<br/>
&#8226; Who has impacted you most in your career, and how?<br/>
&#8226; What's the most important thing you've learned in school?<br/>
&#8226; List five words that describe your character.<br/>
&#8226; What do you like to do for fun?<br/>
&#8226; Why are you leaving your present job?<br/>
&#8226; What do you do in your spare time?<br/>
&#8226; How do you feel about taking no for an answer?<br/>

</p>
  </div>
  <div className="col" ></div>
  <div className="col-lg-2" >
<h6 style={{fontWeight:"bold"}}>
</h6>
<br/>
<p style={{fontWeight:"bold"}}>


</p>
  </div>
  
 
  </div>
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
export default InterviewQuestions
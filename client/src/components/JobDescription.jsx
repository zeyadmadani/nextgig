import styled from "styled-components"
import "../styles/JobDescription.css"
import { Container } from "react-bootstrap"
import CheckIcon from '@mui/icons-material/Check';
import {format} from "timeago.js"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateSecret } from "../redux/jobslice";
import { updateJobs } from "../redux/userSlice";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { axiosInstance } from "../configuration/Config";
const JobDescription=()=>
{
    const dispatch=useDispatch()
    const {currentUser}=useSelector(state=>state.user)
    const {currentJob}=useSelector(state=>state.job)
    const {secret}=useSelector(state=>state.job)
    const [val,setVal]=useState(false)
    const navigate=useNavigate()
 
    const handleApply=()=>
    {
        if(!currentUser)
        {
            navigate("/login-to-continue")
        }
        const Fun=async()=>
        {

           const res= await axiosInstance.put(`/Employee/applyforajob/${currentJob._id}`,{userId:currentUser._id})
           await axiosInstance.put(`/Employee/sendemailtoclient/${currentUser._id}`,{jobId:currentJob._id})
           res.status===200 && window.open(`success/${currentJob._id}`, "_blank")
           res.status===200 && dispatch(updateJobs(currentJob._id))
        }
        Fun()

    }
    const Containerr=styled.div
    `
width:100%;
background-color:#fff;
overflow-y: scroll;
position: sticky;
height: 100vh;
font-size: 14px;
top: 0;
    `
    const Logo=styled.img
    `
    display:block;
    margin:0 auto;
    width:280px;
    height:250px;
    `
    const Button=styled.button
    `
    display:block;
    margin:0 auto;
    height:50px;
    padding:7px 7px;
    border:none;
    background-color:rgb(128, 96, 182);
    color:#fff;
    border-radius:7px;
    font-size:12px;
    font-weight:bold;
    cursor:pointer;
    `
    const JobDesc=styled.div
    `
    display:flex;
    flex-direction:column;
    `
    const Sec=styled.div
    `
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:5px;
    `
    const General=styled.div
    `
    display:flex;
    align-items:center;
    gap:10px;
    padding:20px;
    position:sticky;
    top:0;
    `
    const Main=styled.div
    `
    display:flex;
    justify-content:space-between;
    padding:10px;
  
    `
    const Line=styled.div
    `
    background-color:grey;
    width:100%;
    height:1px;
    box-shadow: 0px 0px 20px 0.1px grey;
    `
    const Company=styled.h5``
    const Location=styled.h6``
    const Title=styled.h2``
    const RightSec=styled.div``
    const Btn=styled.button
    `
    height:40px;
    border:none;
    color:#fff;
    background-color: rgb(110, 70, 174);
    border-radius:5px;
    width:125px;
    padding:5px;
    cursor: pointer;
    font-size: 12px;
    `
    const Group=styled.div
    `
    margin-top:80px;
    display:flex;
    align-items:center;
    gap:10px;
    `
    const DescBody=styled.div
    `
    display:flex;
    flex-direction:column;
    gap:5px;
    padding:25px;
    `
    const Element=styled.div
    `
    display:flex;
    justify-content:space-between;
    align-items:center;
    `
    const Seperator=styled.div
    `
    width:100%;
	height: 1px;
	background: url(http://ibrahimjabbari.com/images/hr-12.png) repeat-x 0 0;
    border: 1px solid grey;
    `
    const Description=styled.div
    `
font-family: 'Roboto', sans-serif;
    `
    const Advantages=styled.div
    `
    font-family: 'Roboto', sans-serif;
    `
    const Responsibilities=styled.div
    `
    font-family: 'Roboto', sans-serif;
    `
    const Qualifications=styled.div
    `
    font-family: 'Roboto', sans-serif;
    `
    const Summary=styled.div
    `
    font-family: 'Roboto', sans-serif;
    `
    const PromotedBy=styled.div
    `
    font-family: 'Roboto', sans-serif;
    display:flex;
    justify-content:space-between;
    gap:5px;
    font-weight:bold;
    `
    const Promo=styled.div
    `
    background-color:rgb(196, 165, 63);
    width:200px;
    max-height:80px;
    padding:10px;
    border-radius:10px;
    color:#fff;
    `

return(<>

{secret? 
<Containerr className="dfsrdsfds">
    <Main>
        
    <General>
        <img style={{borderRadius:"50%"}} width={100} height={100} src={currentJob.logo}/>
        <div>
            <Title>{currentJob.title}</Title>
            <Company>{currentJob.company}</Company>
            <Location>{currentJob.address}, {currentJob.city}</Location>
        </div>
    </General>
<RightSec>
    <Group>
    {currentUser && currentUser.jobsAppliedFor.includes(currentJob._id)? <button disabled style={{display:"flex",alignItems:"center",justifyContent:"center"}} className="fgdsfsgds">You Applied</button> :     <Btn style={{display:"flex",alignItems:"center",justifyContent:"center"}} onClick={handleApply} className="easilyApplyBtn gfdgfdszfdgrdser">Easily Apply</Btn>}
<div>

</div>
    </Group>
</RightSec>
    </Main>
    <Line/>
    <DescBody>
    <Element>
<h6>Job Type</h6>
<div>{currentJob.jobType}
</div>
        </Element>
        <Seperator></Seperator>
        <Element>
<h6>Location</h6>
<div>{currentJob.address}, {currentJob.city}
</div>
        </Element>
        <Seperator></Seperator>
        <Element>
<h6>Posted</h6>
<div>{format(currentJob.createdAt)}
</div>
        </Element>
        <Seperator></Seperator>
<br/>
<h6 style={{fontWeight:"bold"}}>Description</h6>
<Description>
{currentJob.description}
</Description>
<br/>
<h6 style={{fontWeight:"bold"}}>Advantges</h6>
<Advantages>
    {currentJob.advantages ? currentJob.advantages : "---------------------------------------------------------------------------"}

</Advantages>
<br/>
<h6 style={{fontWeight:"bold"}}>Responsibilities</h6>
<Responsibilities>
{currentJob.responsibilities ? currentJob.responsibilities : "---------------------------------------------------------------------------"}

</Responsibilities>
<br/>
<h6 style={{fontWeight:"bold"}}>Qualifications</h6>
<Qualifications>
{currentJob.qualifications ? currentJob.qualifications : "---------------------------------------------------------------------------"}

</Qualifications>
<br/>
<h6 style={{fontWeight:"bold"}}>Summary</h6>
<Summary>
{currentJob.summary ? currentJob.summary : "---------------------------------------------------------------------------"}

</Summary>
<br/>
<Promo>
<PromotedBy>
    <CheckIcon/>
    Promoted by {currentJob.company}
</PromotedBy>
</Promo>
    </DescBody>
</Containerr> : <Containerr className="jifkdhfbed">
    <Container fluid>
<Logo src="https://img.freepik.com/premium-vector/simple-silhouette-ghost-logo-design-concept-isolated-white-background_10250-5358.jpg?w=2000"/>
<div><h2 style={{textAlign:"center",fontWeight:"bold"}}>Get noticed by top employers!</h2></div>
<br/>
<div><h6 style={{textAlign:"center",fontWeight:"500"}}>Do you want to speed up your job search? Upload your resume and let employers know you’re open to opportunities.</h6></div>
<br/>
<Link style={{textDecoration:"none",color:"inherit"}} to="/upload-resume">
{!currentUser || !currentUser.resumeURL && <Button className="resumeBtn">Send Us Your Resume</Button>}

</Link>
<br/>
<Link to="/register">
<h6 className="createAcct" style={{textAlign:"center",color:"rgb(122, 16, 199)",fontWeight:"bold",cursor:"pointer"}}>
{!currentUser && "Create A Free Account"}
</h6>
</Link>
    </Container>
</Containerr>}
<div>

{currentJob && <>
    { secret ?
    <Containerr style={{display:"none",position:"relative",zIndex:`9999`}} className="hgfdfsfds">
    <CloseIcon onClick={()=>{dispatch(updateSecret(false))}} style={{position:"absolute",cursor:"pointer",top:10,right:10,fontSize:40}}/>
    <Main>
        
    <General>
        <img width={100} height={100} src={currentJob.logo}/>
        <div>
            <Title style={{fontSize:13}}>{currentJob.title}</Title>
            <Company style={{fontSize:13}}>{currentJob.company}</Company>
            <Location style={{fontSize:13}}>{currentJob.address}, {currentJob.city}</Location>
        </div>
    </General>
<RightSec>
    <Group>
    {currentUser && currentUser.jobsAppliedFor.includes(currentJob._id)? <button disabled style={{display:"flex",fontSize:10,alignItems:"center",justifyContent:"center"}} className="fgdsfsgds">You Applied</button> :     <Btn style={{display:"flex",fontSize:10,alignItems:"center",justifyContent:"center"}} onClick={handleApply} className="easilyApplyBtn">Easily Apply</Btn>}
<div>

</div>
    </Group>
</RightSec>
    </Main>
    <Line/>
    <DescBody>
    <Element style={{display:"flex",alignItems:"center"}}>
<h6>Job Type</h6>
<div>{currentJob.jobType}
</div>
        </Element>
        <Seperator></Seperator>
        <Element>
<h6>Location</h6>
<div>{currentJob.address}, {currentJob.city}
</div>
        </Element>
        <Seperator></Seperator>
        <Element>
<h6>Posted</h6>
<div>{format(currentJob.createdAt)}
</div>
        </Element>
        <Seperator></Seperator>
<br/>
<h6 style={{fontWeight:"bold"}}>Description</h6>
<Description>
{currentJob.description}
</Description>
<br/>
<h6 style={{fontWeight:"bold"}}>Advantges</h6>
<Advantages>
    {currentJob.advantages ? currentJob.advantages : "---------------------------------------------------------------------------"}

</Advantages>
<br/>
<h6 style={{fontWeight:"bold"}}>Responsibilities</h6>
<Responsibilities>
{currentJob.responsibilities ? currentJob.responsibilities : "---------------------------------------------------------------------------"}

</Responsibilities>
<br/>
<h6 style={{fontWeight:"bold"}}>Qualifications</h6>
<Qualifications>
{currentJob.qualifications ? currentJob.qualifications : "---------------------------------------------------------------------------"}

</Qualifications>
<br/>
<h6 style={{fontWeight:"bold"}}>Summary</h6>
<Summary>
{currentJob.summary ? currentJob.summary : "---------------------------------------------------------------------------"}

</Summary>
<br/>
<Promo>
<PromotedBy>
    <CheckIcon/>
    Promoted by {currentJob.company}
</PromotedBy>
</Promo>
    </DescBody>
</Containerr> : 
<Containerr style={{display:"none",position:"relative",zIndex:`-9999999`}} className="hgfdfsfds">
    <CloseIcon onClick={()=>{dispatch(updateSecret(false))}} style={{position:"absolute",cursor:"pointer",top:10,right:10,fontSize:40}}/>
    <Main>
        
    <General>
        <img width={100} height={100} src={currentJob.logo}/>
        <div>
            <Title style={{fontSize:13}}>{currentJob.title}</Title>
            <Company style={{fontSize:13}}>{currentJob.company}</Company>
            <Location style={{fontSize:13}}>{currentJob.address}, {currentJob.city}</Location>
        </div>
    </General>
<RightSec>
    <Group>
    {currentUser && currentUser.jobsAppliedFor.includes(currentJob._id)? <button disabled style={{display:"flex",fontSize:10,alignItems:"center",justifyContent:"center"}} className="fgdsfsgds">You Applied</button> :     <Btn style={{display:"flex",fontSize:10,alignItems:"center",justifyContent:"center"}} onClick={handleApply} className="easilyApplyBtn">Easily Apply</Btn>}
<div>

</div>
    </Group>
</RightSec>
    </Main>
    <Line/>
    <DescBody>
    <Element style={{display:"flex",alignItems:"center"}}>
<h6>Job Type</h6>
<div>{currentJob.jobType}
</div>
        </Element>
        <Seperator></Seperator>
        <Element>
<h6>Location</h6>
<div>{currentJob.address}, {currentJob.city}
</div>
        </Element>
        <Seperator></Seperator>
        <Element>
<h6>Posted</h6>
<div>{format(currentJob.createdAt)}
</div>
        </Element>
        <Seperator></Seperator>
<br/>
<h6 style={{fontWeight:"bold"}}>Description</h6>
<Description>
{currentJob.description}
</Description>
<br/>
<h6 style={{fontWeight:"bold"}}>Advantges</h6>
<Advantages>
    {currentJob.advantages ? currentJob.advantages : "---------------------------------------------------------------------------"}

</Advantages>
<br/>
<h6 style={{fontWeight:"bold"}}>Responsibilities</h6>
<Responsibilities>
{currentJob.responsibilities ? currentJob.responsibilities : "---------------------------------------------------------------------------"}

</Responsibilities>
<br/>
<h6 style={{fontWeight:"bold"}}>Qualifications</h6>
<Qualifications>
{currentJob.qualifications ? currentJob.qualifications : "---------------------------------------------------------------------------"}

</Qualifications>
<br/>
<h6 style={{fontWeight:"bold"}}>Summary</h6>
<Summary>
{currentJob.summary ? currentJob.summary : "---------------------------------------------------------------------------"}

</Summary>
<br/>
<Promo>
<PromotedBy>
    <CheckIcon/>
    Promoted by {currentJob.company}
</PromotedBy>
</Promo>
    </DescBody>
</Containerr>}
</>}

</div>
</>)
}
export default JobDescription
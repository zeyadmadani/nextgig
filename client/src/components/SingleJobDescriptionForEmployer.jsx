import styled from "styled-components"
import "../styles/JobDescription.css"
import { Container } from "react-bootstrap"
import CheckIcon from '@mui/icons-material/Check';
import {format} from "timeago.js"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchSuccess } from "../redux/jobslice";
import { updateJobs } from "../redux/userSlice";
import { axiosInstance } from "../configuration/Config";
const SingleJobDescriptionForEmployer=({jobid})=>
{
    const dispatch=useDispatch()
    const {currentUser}=useSelector(state=>state.user)
    const {currentJob}=useSelector(state=>state.job)
    const [job,setJob]=useState({})
    const navigate=useNavigate()
    useEffect(()=>
    {
        const Fun=async()=>
        {
const res=await axiosInstance.get(`/Jobs/getspecificjob/${jobid}`)
res.status==200 && setJob(res.data)
        }
        Fun()
    },[jobid])
    const handleApply=()=>
    {
        if(!currentUser)
        {
            navigate("/login")
        }
        const Fun=async()=>
        {

           const res= await axiosInstance.put(`/Employee/applyforajob/${jobid}`,{userId:currentUser._id})
           res.status===200 && window.open(`success/${jobid}`, "_blank")
           res.status===200 && dispatch(updateJobs(jobid))
        }
        Fun()

    }
    const Containerr=styled.div
    `
    width:100%;

    background-color:#fff;
position: sticky;
min-height: 100vh;
font-size: 14px;
top: 0;
margin-bottom:5px;
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


<Containerr>

    <Main>
        
    <General>
        <img width={120} height={120} src={job.logo}/>
        <div>
            <Title>{job.title}</Title>
            <Company>{job.company}</Company>
            <Location>{job.location}</Location>
        </div>
    </General>
<RightSec>
    <Group>

<div>

</div>
    </Group>
</RightSec>
    </Main>
    <Line/>
    <DescBody>
    <Element>
<h6>Job Type</h6>
<div>{job.jobType}
</div>
        </Element>
        <Seperator></Seperator>
        <Element>
<h6>Location</h6>
<div>{job.location}
</div>
        </Element>
        <Seperator></Seperator>
        <Element>
<h6>Posted</h6>
<div>{format(job.createdAt)}
</div>
        </Element>
        <Seperator></Seperator>
<br/>
<h6 style={{fontWeight:"bold"}}>Description</h6>
<Description>
{job.description}
</Description>
<br/>
<h6 style={{fontWeight:"bold"}}>Advantges</h6>
<Advantages>
    {job.advantages ? job.advantages : "---------------------------------------------------------------------------"}

</Advantages>
<br/>
<h6 style={{fontWeight:"bold"}}>Responsibilities</h6>
<Responsibilities>
{job.responsibilities ? job.responsibilities : "---------------------------------------------------------------------------"}

</Responsibilities>
<br/>
<h6 style={{fontWeight:"bold"}}>Qualifications</h6>
<Qualifications>
{job.qualifications ? job.qualifications : "---------------------------------------------------------------------------"}

</Qualifications>
<br/>
<h6 style={{fontWeight:"bold"}}>Summary</h6>
<Summary>
{job.summary ? job.summary : "---------------------------------------------------------------------------"}

</Summary>
<br/>
<Promo>
<PromotedBy>
    <CheckIcon/>
    Promoted by {job.company}
</PromotedBy>
</Promo>
    </DescBody>
</Containerr> 

</>)
}
export default SingleJobDescriptionForEmployer


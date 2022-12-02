import styled from "styled-components"
import "../styles/Card.css"
import { useEffect, useState } from "react";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import {format} from "timeago.js"
import JobDescription from "./JobDescription";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSuccess, updateSecret } from "../redux/jobslice";
import { updateJobs } from "../redux/userSlice";
import { axiosInstance } from "../configuration/Config";

const Card=({job,id})=>
{
    const Container=styled.div
    `
    width:400px;
    min-height:260px;
    border-radius: 20px;
    background-color: #fff;
    margin-right:10px;
    cursor:pointer;
    `
const BlockSet=styled.div
`
display:flex;
flex-direction:column;
gap:1px;
`
const Desc=styled.div
`
padding:15px;
`
    const Set=styled.div
    `
display:flex;
justify-content:space-between;
margin:10px;
align-items:center;
    `
    const Item=styled.div`
display:flex;
justify-content:space-between;
    `
    const Logo=styled.img
    `
    border-radius:50%;
    `
    const Days=styled.div
    `
    margin-left:18px;
    `
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {currentUser}=useSelector(state=>state.user)
    const handleClick=()=>
    {

            dispatch(fetchSuccess(job))
            dispatch(updateSecret(true))

    }
    const Apply=()=>
    {
        if(!currentUser)
        {
            navigate("/login-to-continue")
        }
        const Fun=async()=>
        {
            dispatch(fetchSuccess(job))
            dispatch(updateSecret(true))
           const res= await axiosInstance.put(`/Employee/applyforajob/${id}`,{userId:currentUser._id})
           await axiosInstance.put(`/Employee/sendemailtoclient/${currentUser._id}`,{jobId:id})
           res.status===200 && window.open(`success/${id}`, "_blank")
           res.status===200 && dispatch(updateJobs(id))
        }
        Fun()
      
    }


return(<>
<Container className="ikjhred iudkhdilu" onClick={handleClick}>
<Set>
<Item>
<Logo width={50} height={35} src={job.logo}/>
</Item>
<Item>
</Item>
</Set>
<Desc>
<Item></Item>
<Item>
<BlockSet>
<h4 className="iukfdh">
    {job.title}
</h4>
<h6 style={{fontFamily:'Nunito Sans'}} className="iukfdh">{job.company}</h6>
<h6 style={{fontFamily:'Nunito Sans'}} className="iukfdh">{job.address}</h6>
<h6 style={{fontFamily:'Nunito Sans'}} className="iukfdh">Annual Salary: ${job.salary}</h6>

</BlockSet>
</Item>
<Item style={{margin:"-5px 0px"}} className="bottomSection">
    <Days style={{margin:0}}>{format(job.createdAt)}</Days>
    {currentUser && currentUser.jobsAppliedFor.includes(id)? <button disabled style={{display:"flex",alignItems:"center",justifyContent:"center"}} className="fgdsfsgds">You Applied</button> :     <button onClick={Apply}  className="easilyApplyBtn gfdgfdsz"><ElectricBoltIcon/>Easily Apply</button>}

</Item>
</Desc>
</Container>

</>)
}
export default Card
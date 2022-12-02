import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import JobCard from "../components/JobCard"
import { useSelector } from "react-redux"
import { useState,useEffect } from "react"
import { axiosInstance } from "../configuration/Config"
const Container=styled.div
`
width:100%;
min-height:100vh;
`

const Jobs=()=>
{
    const {currentUser}=useSelector(state=>state.user)
    const {currentJob}=useSelector(state=>state.job)
    const [loading,setLoading]=useState(false)
    const [jobs,setJobs]=useState([])
    useEffect(()=>
    {
const Fun=async()=>
{
    setLoading(true)
const res=await axiosInstance.get(`/Jobs/getappliedforjobs/${currentUser._id}`)
setJobs(res.data)
setLoading(false)
}
Fun()
    },[])

return(<>
<Nav/>
<Container>
<div style={{textAlign:"center"}} className="changeFont">
<h2 className="changeFont" style={{margin:20}}>Jobs You've Applied To</h2>
<br/>
<div className="container">
<div className="row">
<div className="col"></div>
<div className="col-lg-10">
    <div>
        <h4 style={{textAlign:"left",fontWeight:"bold",borderBottom:"2px solid grey"}}>Your Jobs</h4>
    </div>
</div>
<div className="col"></div>
</div>
<br/>
<br/>
<div className="row">
<div className="col"></div>
<div className="col-lg-10">
    <div style={{textAlign:"left"}}>
{loading? <img style={{display:"block",margin:"10px auto"}} src="/loading.gif"/> : jobs.length>0 ? jobs.map(job=>
    {
        return <JobCard key={job._id} job={job}/>
    }) : <h4 className="changeFont">You haven't applied to any jobs yet.</h4>}
    </div>
</div>
<div className="col"></div>
</div>
</div>
</div>
</Container>
<Footer/>
</>)
}
export default Jobs 
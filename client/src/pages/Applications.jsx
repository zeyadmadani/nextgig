import EmployerFooter from "../components/EmployerFooter"
import EmployerNav from "../components/EmployerNav"
import styled from "styled-components"
import EmployerJobCard from "../components/EmployerJobCard"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { axiosInstance } from "../configuration/Config"
import { Link } from "react-router-dom"
const Job=styled.div``
const Applications=()=>
{
const {currentUser}=useSelector(state=>state.user)
const [jobs,setJobs]=useState([])
const [loading,setLoading]=useState(false)

    useEffect(()=>
    {
        window.scrollTo(0,0)
const Fun=async()=>
{
    setLoading(true)
const res=await axiosInstance.get(`/Jobs/getemployerjobs/${currentUser._id}`)
res.status===200 && setJobs(res.data.reverse())
 setLoading(false)
}
Fun()
    },[])
return(<>
<EmployerNav/>
<div style={{minHeight:"100vh"}}>
<br/>
<br/>
    <h6 className="changeFont" style={{alignItems:"left"}}>
        Your Jobs 
    </h6>
    <Job>
<div className="container">
    <div className="row">

    <div className="col-lg-12">
{
loading? <img style={{display:"block",margin:"0 auto"}} src="loading.gif"/>:
jobs.length>0 ?

jobs.map(job=>
    {
        return <EmployerJobCard key={job._id} job={job}/>
    })
: <><br/><br/><br/><p className="changeFont" style={{fontSize:20}}>You don't have any jobs posted yet. <Link to="/post">Post a Job?</Link></p></> 
}
    
    </div>

    </div>
</div>

    </Job>
</div>
<EmployerFooter/>
</>)

}
export default Applications
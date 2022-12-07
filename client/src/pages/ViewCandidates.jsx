import EmployerFooter from "../components/EmployerFooter"
import EmployerNav from "../components/EmployerNav"
import styled from "styled-components"
import CandidateCard from "../components/CandidateCard"
import { useEffect } from "react"
import { axiosInstance } from "../configuration/Config"
import { useSelector } from "react-redux"
import { useState } from "react"
import { useParams } from "react-router-dom"
const Candidate=styled.div
`
display:block;
`
const ViewCandidates=()=>
{
    const {currentUser}=useSelector(state=>state.user)
    const [jobs,setJobs]=useState([])
    const {id}=useParams()
    const [loading,setLoading]=useState(false)
    console.log(id)
    useEffect(()=>
    {
        const Fun=async()=>
        {
            setLoading(true)
const res=await axiosInstance.get(`/Jobs/getcandidates/${id}`)
setLoading(false)
res.status===200 && setJobs(res.data.reverse())
        }
        Fun()

    },[])
return(<>
<EmployerNav/>
<div style={{minHeight:"100vh"}}>
    <div className="container">
        <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
            <br/>
 
            <h3 className="changeFont" style={{textAlign:"center"}}>Candidates</h3>
        <Candidate style={{textAlign:"center",width:"100%"}}>
        {
          loading? <img style={{margin:"0 auto",display:"block"}} src="/loading.gif"/> :  jobs.length>0 ? jobs.map(element=>
                {
                    return <CandidateCard key={element} jobid={element}/>
                })
            : <h5 style={{margin:"0 auto",display:"block",marginTop:50}} className="changeFont">No Candidates have applied to this job yet.</h5>
            }

</Candidate>
        </div>

        </div>
    </div>

</div>
<EmployerFooter/>
</>)
}
export default ViewCandidates
import { useSelector } from "react-redux"
import styled from "styled-components"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from "react-router-dom";
const Job=styled.div
`
display:flex;
align-items:center;
gap:40px;
margin:20px;
`
const JobCard=({job})=>
{
    const navigate=useNavigate()
    const {currentUser}=useSelector(state=>state.user)
return(<>
<Job style={{borderBottom:"2px solid grey"}}> 
<img style={{borderRadius:"50%"}} width={100} height={100} src={job.logo}/>
<div>
<h3>
    <div className="changeFont" style={{width:80,height:30,backgroundColor:"grey",borderRadius:15,color:"white",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"}}>Applied</div>
</h3>
<h3>{job.title}</h3>
<h6>{job.company}</h6>
<h6>{job.location}</h6>
<h6 style={{display:"flex",alignItems:"center",cursor:"pointer"}}>
    <h5 onClick={()=>navigate(`/view-a-job/${job._id}`)} className="changeFont" style={{marginTop:5}}>View Job</h5>
    <ArrowRightAltIcon style={{fontSize:35}}/></h6>
</div>
</Job>
</>)
}
export default JobCard 
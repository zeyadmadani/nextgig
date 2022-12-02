import { useSelector } from "react-redux"
import styled from "styled-components"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { axiosInstance } from "../configuration/Config";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "../styles/Main.css"
const Job=styled.div
`
display:flex;
align-items:center;
gap:40px;
margin:20px;
`
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const EmployerJobCard=({job})=>
{
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);
    const navigate=useNavigate()
    const handleDelete=()=>
    {
        const Fun=async()=>
        {
const res=await axiosInstance.delete(`/Jobs/delete/${job._id}`)
res.status===200 && handleOpen()
  window.location.reload();        
}
        Fun()
    }
    const {currentUser}=useSelector(state=>state.user)

return(<>
<Job style={{display:"flex",alignItems:"center",gap:5,justifyContent:"space-between",borderBottom:"2px solid grey"}}> 
<div style={{display:"flex", alignItems:"center",gap:30}}>

<img className="jhbkdfjns" width={100} height={100} src={job.logo}/>
<div>
<h3>
    <div className="changeFont" style={{width:80,height:30,backgroundColor:"#8000ff",borderRadius:15,color:"white",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"}}>Posted</div>
</h3>
<Link style={{textDecoration:"none",color:"crimson"}} to={`/view-a-job-employer/${job._id}`}><h3>{job.title}</h3></Link>
<h6>{job.company}</h6>
<h6>{job.address}, {job.city}</h6>
<h6>{job.applied.length} Candidates Applied</h6>
<h6 style={{display:"flex",alignItems:"center",cursor:"pointer"}}>
   <Link style={{color:"inherit",textDecoration:"none"}} to={`/view-candidates/${job._id}`}> <h6 className="changeFont" style={{marginTop:5}}>View Applicants</h6></Link>
    <ArrowRightAltIcon style={{fontSize:35}}/></h6>
</div>
</div>
      <DeleteIcon onClick={handleDelete} style={{fontSize:30,color:"crimson",cursor:"pointer"}}/> 
</Job>

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
<DoneOutlineIcon style={{color:"crimson",margin:"0 auto",display:"block",fontSize:50}}/>
    </Typography>
    <Typography style={{textAlign:"center"}} id="modal-modal-description" sx={{ mt: 2 }}>
Job has been successfully deleted.
    </Typography>
  </Box>
</Modal>
</>)
}
export default EmployerJobCard 
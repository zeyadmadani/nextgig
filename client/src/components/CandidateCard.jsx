import { useSelector } from "react-redux"
import styled from "styled-components"
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Job=styled.div
`
display:flex;
align-items:center;
gap:30px;
width:100%;
margin:20px;
`
const CandidateCard=()=>
{
    useEffect(()=>
{
  window.scrollTo(0,0)
},[])
    const navigate=useNavigate()
    const {currentUser}=useSelector(state=>state.user)
return(<>
<Job style={{borderBottom:"2px solid grey"}}> 
<div><img className="jkHYKUjuljhBKUGTJGyhkiUGBio" width={100} height={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"/></div>
<div style={{textAlign:"left"}}>
<h3>
    <div className="changeFont" style={{width:80,height:30,backgroundColor:"grey",borderRadius:15,color:"white",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"}}>Applied</div>
</h3>
<h3>Omar</h3>
<h6>XYZ Solutions</h6>
<h6>Calgary</h6>
<h6 style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,cursor:"pointer"}}>
 <InsertDriveFileIcon style={{fontSize:25}}/>
 <a href={`https://www.africau.edu/images/default/sample.pdf`}><h5 className="changeFont" style={{marginTop:10}}>View Resume</h5></a></h6>
</div>
</Job>
</>)
}
export default CandidateCard 
import { useState } from "react"
import Footer from "../components/Footer"
import LogoNav from "../components/LogoNav"
import { Link, Navigate, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import UploadIcon from '@mui/icons-material/Upload'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase/Firebase"
import { updateResume } from "../redux/userSlice"
import { axiosInstance } from "../configuration/Config"
import "../styles/Login.css"
const FileInput=styled.input`
border-radius: 3px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color: grey;
color: white;
`
const UploadResumeFirst=()=>
{
    const {currentUser}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [resume,setResume]=useState()
    const [resumePerc,setResumePerc]=useState(0)
    const handleLogo=async(e)=>
    {
      uploadFile(e)
    }
    const uploadFile=(file)=>
  {
const storage=getStorage(app)
const filename=new Date().getTime()+file.name
const storageRef=ref(storage,filename)
const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on('state_changed', 
(snapshot) => {
  
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  setResumePerc(Math.round(progress))
  switch (snapshot.state) {
    case 'paused':

      break;
    case 'running':

      break;
      default: break;
  }
}, 
(error) => {

}, 
() => {

  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  
    const updateUser=async()=>
    {
const res =await axiosInstance.put(`/Employee/updateEmployee/`,{userId:currentUser._id,resumeURL:downloadURL})
res.status===200 && navigate("/")
setResume(downloadURL)

    }
dispatch(updateResume(downloadURL))
updateUser()

  });
}
);

}
return(<>
<LogoNav/>
<div className="ik">
    
</div>
<div className="main">


<div className="con jhdfsihu" style={{minHeight:10,top:"250px"}}>
<div style={{textAlign:"center"}}>
<form >     
 <br/>

<br/><br/><br/>
{
  resumePerc<=0? <label style={{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",gap:10}} className="shareOption changeFont" htmlFor="file">
<UploadIcon style={{paddingBottom:5}} className="shareIcon"/>
<span className="shareOptionText minimizeTextonMobile">Upload Your Resume</span>
 <FileInput style={{display:"none"}} type="file" id="file" accept="file/*" onChange={(e)=>{handleLogo(e.target.files[0])}}/>
<br/>
</label>
 :<h5 className="changeFont"> Uploaded {resumePerc}%</h5>
}
<input style={{color:"#fff",width:100,marginTop:50}} className="btn btn-primary btn-block mb-4 minBtn centerTxt" type="submit" value="Continue"/>
</form>
</div>
</div>
</div>
<Footer/>
</>)
}
export default UploadResumeFirst
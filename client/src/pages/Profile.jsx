import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import UploadIcon from '@mui/icons-material/Upload'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase/Firebase"
import PersonPinIcon from '@mui/icons-material/PersonPin';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPopUp from "../components/ContactPopUp"
import LocationPopUp from "../components/LocationPopUp"
import { useSelector,useDispatch } from "react-redux"
import { changeName,changeSummary,updateResume } from "../redux/userSlice";
import SummartPopUp from "../components/SummaryPopUp"
import { axiosInstance } from "../configuration/Config"

const Header=styled.div
`
height:20rem;
width:100%;
background:url("bck.jpg");
background-repeat:no-repeat;
background-size: cover;
position:relative;
`
const Mobile=styled.div
`
min-height:80vh;
`
const Line=styled.div
`
background-color:grey;
width:100%;
height:1px;
box-shadow: 0px 0px 20px 0.1px grey;
`
const Frame=styled.div
`

`
const FileInput=styled.input`
border-radius: 3px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color: grey;
color: white;
`
const Profile=()=>
{
 
    const {currentUser}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const filename = currentUser.resumeURL.replace(/^.*[\\\/]/, '')
    const [openContact,setOpenContact]=useState(false)
    const [resume,setResume]=useState("")
    const [resumePercentage,setResumePercentage]=useState(0)
    const [openLocation,setOpenLocation]=useState(false)
    const [openSummary,setOpenSummary]=useState(false)
    const handleResume=async(e)=>
    {
      uploadFile(e)
    }
  
    const DeleteSummary=()=>
    {
        const Del=async()=>
        {
await axiosInstance.put("/Employee/updateEmployee",{userId:currentUser._id,summary:""})
dispatch(changeSummary(""))
        }
        Del()
    }
    const DeleteResume=()=>
    {
        const Del=async()=>
        {
await axiosInstance.put("/Employee/updateEmployee",{userId:currentUser._id,resumeURL:""})
dispatch(updateResume(""))
        }
        Del()
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
setResumePercentage(Math.round(progress))
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
await axiosInstance.put(`/Employee/updateEmployee/`,{userId:currentUser._id,resumeURL:downloadURL})
setResume(downloadURL)
window.location.reload()
      }
dispatch(updateResume(downloadURL))
updateUser()

    });
  }
);

}
    

 
    const EditContact=()=>
    {

setOpenContact(true)

    }
    const EditLocation=()=>
    {

setOpenLocation(true)

    }
    const EditSummary=()=>
    {

setOpenSummary(true)

    }
return(<>
<Nav/>

<div className="ik riuskdjdeis">
    
</div>

<div style={{height:"60rem"}}  className="main riuskdjdeis">

<div className="container">
    <div className="row">
        <div className="col-lg-2">
            
        </div>
    </div>
</div>
<div style={{height:"68rem"}}>

</div>
<div className="connn">
<div style={{textAlign:"center"}}>
<form style={{position:"relative"}}>
<div className="container">
    <div className="row">
    <div  className="col-lg-3">
<div style={{height:"15rem",width:"15rem",border:"1px solid rgb(110, 70, 174)",marginTop:"20px",borderRadius:15}}>
    <PersonPinIcon style={{fontSize:120,color:"#0040ff"}}/>
    <h5 className="changeFont">{currentUser.name}</h5 >
    <h6 className="changeFont">{currentUser.title}</h6>
    <h5 className="changeFont" >In {!currentUser.address? <Link style={{color:"crimson",fontSize:15}} className="changeFont" to="/location">Add Your Location?</Link> : <>{currentUser.address}, {currentUser.country}</>}</h5 >
</div>
    </div>   <div className="col-lg-9"> 
    <div style={{minHeight:"55rem",width:"52rem",border:"2px solid grey",marginTop:"20px",borderRadius:15}}>
<h3 style={{textAlign:"left"}} className="fdgfds">My Profile</h3>
<div style={{height:"10rem",width:"30rem",border:"2px solid #6e46ae",margin:"0 auto",display:"block",borderRadius:20}}>
   <h3 style={{color:"#6e46ae",textAlign:"left",margin:10}} className="fdgfds">{currentUser.name}</h3>
    <p className="changeFont">{currentUser.address? "Congratulations! Your profile is complete. Now, easily search and apply to jobs." : "Please Update Your Address To Complete Your Profile."}</p>
<div style={{display:"flex",alignItems:"center",gap:90,margin:10}}>
<Link to="/">
<button style={{width:80,height:30,outline:"none",borderRadius:10,cursor:"pointer",color:"white",backgroundColor:"#6e46ae",fontSize:15,border:"none"}} className="changeFont">Find Jobs</button>
</Link>
<div style={{display:"flex",alignItems:"center",gap:20}}>
<div style={{width:50,height:15,backgroundColor:"#6e46ae",borderRadius:5}}></div>
<div style={{width:50,height:15,backgroundColor:"#6e46ae",borderRadius:5}}></div>
<div style={{width:50,height:15,backgroundColor:"#6e46ae",borderRadius:5}}></div>
<div style={{width:50,height:15,backgroundColor:"#6e46ae",borderRadius:5}}></div>
<div style={{width:50,height:15,backgroundColor:"#6e46ae",borderRadius:5}}></div>
</div>
</div>
</div>
<br/>
<div className="container">
<div className="row">
<div className="col"></div>
<div style={{width:40,maxHeight:150,borderRadius:10,textAlign:"left",border:"2px solid rgb(110, 70, 174)"}} className="col-lg-4 ">
    <div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <h6 style={{fontWeight:"bold"}}>Contact Information</h6>
        <h6><Link to="/ContactInformation"><EditIcon style={{cursor:"pointer"}}/></Link></h6>
            </div>
            <div>
            <p>{currentUser.name}</p>
<p>{currentUser.email}</p>
<p>{currentUser.phone}</p>
            </div>
    </div>
</div>
<div className="col"></div>
<div style={{width:40,maxHeight:150,borderRadius:10,textAlign:"left",border:"2px solid rgb(110, 70, 174)"}} className="col-lg-4 ">
    <div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <h6 style={{fontWeight:"bold"}}>Location</h6>
        <h6><Link to="/location"><EditIcon onClick={EditLocation} style={{cursor:"pointer"}}/></Link></h6>
            </div>
            <div>
                <p></p>
            <p>{currentUser.address}</p>
<p>{currentUser.country}</p>

            </div>
    </div>
  
</div>

<div className="col"></div>

</div>
<br/>
<div className="row">
<div className="col"></div>
<div className="col-lg-8">
<div style={{width:"32rem",maxHeight:90,borderRadius:10,border:"2px solid rgb(110, 70, 174)"}}>
<h4 style={{margin:8,color:"black",borderRadius:20,backgroundColor:"rgb(110, 70, 174)",color:"#fff"}} className="changeFont">My Resume Document</h4>
  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10}}>
<div style={{cursor:"pointer",display:"block",margin:"0 auto",backgroundColor:"#e6e7e8",height:40,width:"50%",padding:5,paddingTop:5,marginBottom:10,cursor:"pointer",borderRadius:15,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <p className="fdgfds"><a style={{textDecoration:"none",color:"inherit"}} href={`${currentUser.resumeURL}`}></a></p>
    <div >
    {
  resumePercentage<=0? <label className="shareOption" htmlFor="file">
{
    !currentUser.resumeURL && <UploadIcon style={{marginBottom:-6}} className="shareIcon"/>
}

<span className="shareOptionText minimizeTextonMobile">{currentUser.resumeURL? "Upload a New Resume" : "Upload Your Resume"}</span>
 {currentUser.resumeURL?   <div style={{cursor:"pointer",backgroundColor:"#e6e7e8",height:40,width:"50%",padding:5,paddingTop:5,marginBottom:10,cursor:"pointer",borderRadius:15,display:"flex",alignItems:"center",display:"block",margin:"0 auto",justifyContent:"space-between"}}>
  <a className="changeFont" style={{color:"inherit",textDecoration:"none",maring:0,display:"block",textAlign:"center",fontSize:12,width:"100%"}} href={currentUser.resumeURL}>
    View Your Resume
  </a>
  </div> : <FileInput style={{display:"none"}} type="file" id="file" accept="file/*" onChange={(e)=>{handleResume(e.target.files[0])}}/>}
<br/>
</label>
 : "Uploaded "+ resumePercentage +" %"
}
    </div>
    <div>
    </div>
  </div>

    { currentUser.resumeURL && <DeleteIcon onClick={DeleteResume} style={{cursor:"pointer"}}/>}
</div>
</div>
</div>
<div className="col"></div>
</div>
<br/>
<br/>
<div className="row">

<div className="col-lg-12">
<div style={{width:"100%",maxHeight:290,borderRadius:10,border:"2px solid rgb(110, 70, 174)"}}>

<div style={{cursor:"pointer",height:40,padding:5,paddingTop:15,borderRadius:15,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <h4 className="fdgfds">Summary</h4>
  <p style={{display:"flex",alignItems:"center",gap:10}}>
    <Link to="/summary"><EditIcon onClick={EditSummary} style={{cursor:"pointer"}}/></Link>
    <DeleteIcon onClick={DeleteSummary} style={{cursor:"pointer",marginBottom:6}}/>
  </p>

</div>
<br/>
<div style={{lineHeight:5}}>{currentUser.summary? currentUser.summary : <Link style={{color:"crimson"}} className="changeFont" to="/summary">Add a Summary?</Link>}</div>
</div>
</div>

</div>
</div>

    </div>
    
    </div>
    </div>
</div>

</form>

</div>
</div>
</div>

<Mobile className="HHJKHYUjhxjhgbhjkhgcfxdxfKHGJHTRCJHGJK" style={{display:"none"}}>
<h4 className="changeFont" style={{margin:20}}>
Account Information
</h4>
<Line></Line>
<br/>
<div className="container">
<div className="row">
<div style={{width:320,maxHeight:150,borderRadius:10,textAlign:"left",border:"2px solid rgb(110, 70, 174)",display:"block",margin:"0 auto"}} className="col-lg-4 ">
    <div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <h6 style={{fontWeight:"bold"}}>Contact Information</h6>
        <h6><Link to="/ContactInformation"><EditIcon style={{cursor:"pointer"}}/></Link></h6>
            </div>
            <div>
            <p>{currentUser.name}</p>
<p>{currentUser.email}</p>
<p>{currentUser.phone}</p>
            </div>
    </div>
</div>
</div>
<br/>
<div className="row">
<div style={{width:320,maxHeight:150,borderRadius:10,textAlign:"left",border:"2px solid rgb(110, 70, 174)",display:"block",margin:"0 auto"}} className="col-lg-4 ">
    <div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <h6 style={{fontWeight:"bold"}}>Location</h6>
        <h6><Link to="/location"><EditIcon onClick={EditLocation} style={{cursor:"pointer"}}/></Link></h6>
            </div>
            <div>
                <p></p>
            <p>{currentUser.address}</p>
<p>{currentUser.country}</p>

            </div>
    </div>
  
</div>
</div>
</div>

<br/>
<div className="row">
<div className="col"></div>
<div className="col-lg-8">
<div style={{width:"20rem",minHeight:90,borderRadius:10,border:"2px solid rgb(110, 70, 174)",display:"block",margin:"0 auto"}}>
<h4 style={{margin:8,color:"black",borderRadius:20,backgroundColor:"rgb(110, 70, 174)",color:"#fff"}} className="changeFont">My Resume Document</h4>
  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10}}>
<div style={{cursor:"pointer",display:"block",margin:"0 auto",backgroundColor:"#e6e7e8",height:30,width:"40%",padding:5,paddingTop:5,marginBottom:10,cursor:"pointer",borderRadius:15,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <p className="fdgfds"><a style={{textDecoration:"none",color:"inherit"}} href={`${currentUser.resumeURL}`}></a></p>
    <div >
    {
  resumePercentage<=0? <label className="shareOption" htmlFor="file">
{
    !currentUser.resumeURL && <UploadIcon style={{marginBottom:-6}} className="shareIcon"/>
}

<span style={{fontSize:10,display:"block",margin:"0 auto",textAlign:"center",cursor:"pointer"}} className="shareOptionText minimizeTextonMobile">{currentUser.resumeURL? "Upload a New Resume" : "Upload Your Resume"}</span>
 {currentUser.resumeURL?   <div style={{textAlign:"center",paddingTop:10}}>
  <a className="changeFont" href={currentUser.resumeURL}>
Resume
  </a>
  </div> : <FileInput style={{display:"none"}} type="file" id="file" accept="file/*" onChange={(e)=>{handleResume(e.target.files[0])}}/>}
<br/>
</label>
 : <span style={{fontSize:10}}>Uploaded {resumePercentage}%</span>
}
    </div>
    <div>
    </div>
  </div>

    { currentUser.resumeURL && <DeleteIcon onClick={DeleteResume} style={{cursor:"pointer"}}/>}
</div>
</div>
</div>
<div className="col"></div>
</div>
<br/>
<br/>
<div className="row">

<div className="col-lg-12">
<div style={{width:320,maxHeight:290,borderRadius:10,border:"2px solid rgb(110, 70, 174)",display:"block",margin:"0 auto"}}>

<div style={{cursor:"pointer",height:40,padding:5,paddingTop:15,borderRadius:15,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <h4 className="fdgfds">Summary</h4>
  <p style={{display:"flex",alignItems:"center",gap:10}}>
    <Link to="/summary"><EditIcon onClick={EditSummary} style={{cursor:"pointer"}}/></Link>
    <DeleteIcon onClick={DeleteSummary} style={{cursor:"pointer",marginBottom:6}}/>
  </p>

</div>
<br/>
<div style={{lineHeight:5,textAlign:"center"}}>{currentUser.summary? currentUser.summary : <Link style={{color:"crimson"}} className="changeFont" to="/summary">Add a Summary?</Link>}</div>
</div>
<br/>
<br/>
<br/>
</div>

</div>

</Mobile>
<Footer/>
{openContact && openContact && <ContactPopUp Contact setOpenContact={setOpenContact}/>}
{openLocation && openLocation && <LocationPopUp setOpenLocation={setOpenLocation}/>}
{openSummary && openSummary && <SummartPopUp setOpenSummary={setOpenSummary}/>}

</>)
}
export default Profile 
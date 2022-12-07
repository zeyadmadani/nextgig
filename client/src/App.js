import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UploadResume from "./pages/UploadResume";
import CareerAdvice from "./pages/CareerAdvice"
import InterviewQuestions from "./pages/InterviewQuestions";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import First90Days from "./pages/First90Days";
import FirstStory from "./pages/FirstStory";
import SecondStory from "./pages/SecondStory";
import ThirdStory from "./pages/ThirdStory";
import EmployerSignUp from "./pages/EmployerSignUp";
import Reset from "./pages/Reset";
import EmployerSignin from "./pages/EmployerSignin";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import ContactInformation from "./pages/ContactInformation";
import Location from "./pages/Location";
import Summary from "./pages/Summary"
import Success from "./pages/Success";
import Jobs from "./pages/Jobs";
import LoginToContinue from "./pages/LoginToContinue";
import WrongCredentials from "./pages/WrongCredentials"
import LoginToContinueToUploadResume from "./pages/LoginToContinueToUploadResume";
import UploadLogo from "./pages/UploadLogo";
import Applications from "./pages/Applications";
import Post from "./pages/Post";
import ViewCandidates from "./pages/ViewCandidates";
import EmployerWrongCredentials from "./pages/EmployerWrongCredentials";
import UploadResumeFirst from "./pages/UploadResumeFirst"
import ViewJob from "./pages/ViewJob"
import Search from "./pages/Search"
import { axiosInstance } from "./configuration/Config";
import {useState, useEffect} from "react"
import Error from "./pages/Error";
import Viewgig from "./pages/Viewgig";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { setPopup } from "./redux/userSlice";
import "./styles/Main.css"
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
function App() {
  const {currentUser}=useSelector(state=>state.user)
  const {popup}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  const [jobs,setJobs]=useState([])
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=>
  {
  const getAllJobs=async()=>
  {
    const res=await axiosInstance.get(`/Jobs/getalljobs`)
    setJobs(res.data.reverse())
  }
  getAllJobs()
  
  },[])
  useEffect(()=>
  {
    setTimeout(() => {
      if(popup && !currentUser)
      handleOpen()
    dispatch(setPopup(false))
    }, 3000);
  },[])
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>
 <Route path="/">
 <Route index element={<Home jobs={jobs}/>}/>
 <Route path="login" element={currentUser? <Home/> : <Login/>} />
 <Route path="register" element={<Register/>} />
 <Route path="forgot-password" element={<ForgotPassword/>} />
 <Route path="profile" element={currentUser? <Profile/> : <Login/>} />
 <Route path="career-advice" element={<CareerAdvice/>} />
 <Route path="upload-resume" element={ <UploadResume/>} />
 <Route path="first-90-day" element={<First90Days/>} />
 <Route path="FirstStory" element={<FirstStory/>} />
 <Route path="SecondStory" element={<SecondStory/>} />
 <Route path="ThirdStory" element={<ThirdStory/>} />
 <Route path="EmployerRegisteration" element={<EmployerSignUp/>} />
 <Route path="EmployerSignIn" element={<EmployerSignin/>} />
 <Route path="interview-questions" element={<InterviewQuestions/>} />
 <Route path="ContactInformation" element={<ContactInformation/>} />
 <Route path="location" element={<Location/>} />
 <Route path="summary" element={<Summary/>} />
 <Route path="myjobs" element={<Jobs/>} />
 <Route path="applications" element={currentUser && currentUser.isEmployer ? <Applications/> : <EmployerSignin/>} />
 <Route path="5433367890-9876546789087654367890-987654356787654678976-894365465463545486547568556834574865486484-3456789876567898765456789-8765467890876578905-4389034934234-4651498764596835468489654685486458468468487649796549846458796554864589659864589764567890238724-453333333598573480734597043759387589439850284390594023450-2317Y6U32179808/:token" element={<Reset/>} />
 <Route path="post" element={currentUser && currentUser.isEmployer? <Post/> : <EmployerSignin/>} />
 <Route path="employer-portal" element={currentUser && currentUser.isEmployer ? <Applications/> : <EmployerSignin/>} />
 <Route path="login-to-continue" element={<LoginToContinue/>} />
 <Route path="login-to-continue-to-upload-resume" element={<LoginToContinueToUploadResume/>} />
 <Route path="wrong-credentials" element={<WrongCredentials/>} />
 <Route path="wrong-credentials-employer" element={<EmployerWrongCredentials/>} />
 <Route path="upload-resume-first" element={<UploadResumeFirst/>} />
 <Route path="upload-logo" element={<UploadLogo/>} />
 <Route path="search" >
 <Route path=":id" element={<Search/>}/> 
 </Route>
 <Route path="view-a-job" >
 <Route path=":id" element={<Viewgig/>}/> 
 </Route>
 <Route path="view-a-job-employer" >
 <Route path=":id" element={<ViewJob/>}/> 
 </Route>
 <Route path="view-candidates" >
 <Route path=":id" element={<ViewCandidates/>}/> 
 </Route>
 <Route path="success" >
 <Route path=":id" element={<Success/>}/> 
 </Route>
 </Route>
 <Route path="*" element={<Error/>} />
</Routes>
</BrowserRouter>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <CloseIcon className="jhkhdfgdfs" onClick={handleClose} style={{position:"absolute",top:5,right:10,fontSize:40,cursor:"pointer"}}/>
    <Typography style={{position:"relative"}} id="modal-modal-title" variant="h6" component="h2">
<NotificationsIcon style={{color:"blue",margin:"0 auto",display:"block",fontSize:50}}/>
    </Typography>
    <Typography style={{textAlign:"center"}} id="modal-modal-description" sx={{ mt: 2 }}>

<p className="jiukhj">
  Dear Hiring Manager,
</p>
<p className="jiukhj" style={{textAlign:"center"}}>
  Please be advised that this is a Fullstack Web Application. As a result, You may register an Account and log in to discover the various features that the Application has.
</p>
<p className="jiukhj">Thanks So Much,</p>
<p className="jiukhj">Omar Kanaan</p>
    </Typography>
  </Box>
</Modal>
    </div>
  );
}

export default App;

import Nav from "../components/Nav"
import styled from "styled-components"
import {Container , Row, Col} from 'react-bootstrap' 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"
const UploadResume=()=>
{
    const {currentUser}=useSelector(state=>state.user)
    const navigate=useNavigate()
    const Header=styled.div
    `
    height:16rem;
    width:100%;
    background-image:url("/background.jpg");
    position:relative;
    `
    const Par=styled.p
    `
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    font-weight:bold;
    font-size:40px;
    color:rgb(2, 0, 90);
        `
        const Button=styled.button
        `
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        transform: translateX(-50%);
        text-align: center;
        bottom:20px;
        background-color:rgb(110, 70, 174);
        border-radius:5px;
        height:40px;
        width:12rem;
        border:none;
        color:white;
        cursor:pointer;
        `
        const Block=styled.div
        `
        margin-top:35px;
        `
        const Bline=styled.div
        `
        background-color:rgb(0, 120, 140);
        height:4px;
        width:80px;
        `
        const Paragraph=styled.div
        `
        display:flex;
        align-items:center;
        gap:20px;
        `
return(<>
    <Nav/>
    <Header>
<Par className="hdfjknd">Upload your resume <br/> and let the right job find you!</Par>

<Button onClick={()=>{currentUser? navigate("/profile") : navigate("/login-to-continue-to-upload-resume")}}>Upload Your Resume</Button>


    </Header>
    <Block>
    <div className="container">
<div className="row">
    <div className="col-lg-6"><img className="kjfdndf" src="sidePic.png"/></div>
    <div className="col"></div>
    <div className="col-lg-5"><h5>We'll help you get noticed</h5>
    <br/>
    <Bline></Bline>
    <br/>
    <p>In our recent survey, recruiters told us that resume search is the top tool they use to find the best candidates. Post your resume on Monster today to ensure recruiters and hiring managers can easily find you.</p>
    <br/>
    <h4>By uploading your resume, you'll also:</h4>
    <Paragraph>
        <div>
<CheckCircleOutlineIcon style={{fontSize:20,margin:10,color:"rgb(0, 120, 140)"}}/>
        </div>
    Receive recommended jobs in your inbox
    </Paragraph>
    <Paragraph>
        <div>
<CheckCircleOutlineIcon style={{fontSize:20,margin:10,color:"rgb(0, 120, 140)"}}/>
        </div>
        Be able to easily apply for thousands of jobs
    </Paragraph>
    <Paragraph>
        <div>
<CheckCircleOutlineIcon style={{fontSize:20,margin:10,color:"rgb(0, 120, 140)"}}/>
        </div>
        Receive a free Resume professional assessment
    </Paragraph>
    <br/>
    <br/>
    <br/>
    <br/>
    <Button onClick={()=>{currentUser? navigate("/profile") : navigate("/login-to-continue-to-upload-resume")}}>Upload Your Resume</Button>
    </div>
    </div>
    </div>
    </Block>
    <Footer/>
</>)
}
export default UploadResume
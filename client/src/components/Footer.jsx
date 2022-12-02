import styled from "styled-components"
import "../styles/Footer.css"
import { Link } from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useSelector } from "react-redux";
const Footer=()=>
{
    const {currentUser}=useSelector(state=>state.user)
    const Footer=styled.footer
    `

    background-color:rgb(35, 9, 57);
    `
    const Section=styled.div
    `
    color:#fff;
    `
return(<>
<Footer className="footer">
    <div className="container">
<div className="row">

<Section style={{textAlign:"center"}} className="col-lg-5 col-md-5 col-sm-5">
<div>
<h6 style={{color:"rgb(242, 177, 39)",marginTop:"6rem"}}>
Services
</h6>
<br/>
<Link style={{textDecoration:"none",color:"inherit"}} to="/">
<p className="irudhkfjsd">Browse Jobs</p>
</Link>
<Link style={{textDecoration:"none",color:"inherit"}} to="/career-advice">
<p className="irudhkfjsd">Career Advice</p>
</Link>
{
    !currentUser && <Link style={{textDecoration:"none",color:"inherit"}} to="/EmployerRegisteration">
    <p className="irudhkfjsd">Post Jobs &#x28;for Employers&#x29;</p>
    </Link>
}
<div className="col"></div>
<Link style={{textDecoration:"none",color:"inherit"}} to="/upload-resume">
<p className="irudhkfjsd">Upload Your Resume</p>
</Link>
</div>
</Section>

<Section style={{textAlign:"center",marginBottom:20}}  className="col-lg-5 col-md-5 col-sm-5">
<div>
<h6 style={{color:"rgb(242, 177, 39)",marginTop:"6rem"}}>
Find Us on Social Media
</h6>
<br/>
<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:30}}>

<p><FacebookIcon className="idkjndfm" style={{color:"rgb(60, 90, 153)",fontSize:60}}/></p>
<p> 
<TwitterIcon className="idkjndfm" style={{color:"#1a0dab",fontSize:60}}/>
</p>
<p>
<InstagramIcon className="idkjndfm" style={{color:"crimson",fontSize:60}}/>
</p>
<p>
<YouTubeIcon className="idkjndfm" style={{color:"red",fontSize:60}}/>
</p>

</div>
</div>
</Section>
</div>
    </div>
</Footer>
</>)
}
export default Footer
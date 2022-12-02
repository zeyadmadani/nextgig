import styled from "styled-components"
import "../styles/Footer.css"
import { Link } from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const EmployerFooter=()=>
{
    const Footer=styled.footer
    `
    width:100%;
    height:24rem;
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

<Section className="col-lg-6">
<div>
<h6 style={{color:"rgb(242, 177, 39)",marginTop:"6rem"}}>
Services
</h6>
<br/>
<Link style={{textDecoration:"none",color:"inherit"}} to="/post">
<p>Post Jobs &#x28;for Employers&#x29;</p>
</Link>
<Link style={{textDecoration:"none",color:"inherit"}} to="/applications">
<p>Applications</p>
</Link>
</div>
</Section>
<Section className="col-lg-6">
<div>
<h6 style={{color:"rgb(242, 177, 39)",marginTop:"6rem"}}>
Find Us on Social Media
</h6>
<br/>
<div style={{display:"flex",alignItems:"center",gap:30}}>

<p><FacebookIcon style={{color:"rgb(60, 90, 153)",fontSize:60}}/></p>
<p> 
<TwitterIcon style={{color:"#1a0dab",fontSize:60}}/>
</p>
<p>
<InstagramIcon style={{color:"crimson",fontSize:60}}/>
</p>
<p>
<YouTubeIcon style={{color:"red",fontSize:60}}/>
</p>

</div>
</div>
</Section>

    </div>
</div>
</Footer>
</>)
}
export default EmployerFooter
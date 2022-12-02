import styled from "styled-components"
import { Link } from "react-router-dom"
import "../styles/InterviewQuestions.css"
const HorizontalTips=()=>
{
    const Colection=styled.div
    `
    display:flex;
    align-items:center;
    gap:20px;

    `
    const Logo=styled.img
    `
    margin:0;
    padding:0;
    `
    const Paragraph=styled.p
    `
    text-align:center;
    margin:0;
    padding:0;
    padding-top:30px;
    padding-right:20px;
    padding-left:20px;
    `
    const Sec=styled.div``
return(<>
<div className="container" style={{padding:80}}>
    <div className="row">
    <div className="col"></div>
    <div className="col-lg-10">
    <h2 style={{textAlign:"center"}}>Successful Career Stories</h2>
    <Colection className="igrkdfijlilre">
    <Link to="/FirstStory" style={{textDecoration:"none",color:"inherit"}}>
    <Sec>
    <Logo className="eoidslj" src="snap1.png"/>
    <Paragraph>Leah Marcus: missile defense to product management</Paragraph>
    </Sec>
    </Link>
    <Link to="/SecondStory" style={{textDecoration:"none",color:"inherit"}}>
    <Sec>
    <Logo className="eoidslj" src="snap2.png"/>
    <Paragraph>Espree Devora: LA Startup & Female Tech Entrepreneur</Paragraph>
    </Sec>
    </Link>
    <Link to="/ThirdStory" style={{textDecoration:"none",color:"inherit"}}>
    <Sec>
    <Logo className="eoidslj" style={{paddingLeft:10}} src="/snap3.png"/>
    <Paragraph>Jonah Perreti: huffed & buzzed from teacher to media king</Paragraph>
    </Sec>
    </Link>
</Colection>
</div>
    <div className="col"></div>
    </div>
</div>
</>)
}
export default HorizontalTips
import styled from "styled-components"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Advices from "./Advices"
import "../styles/InterviewQuestions.css"
const SuccsessfullStoriesHeading=()=>
{
const Containerr=styled.div
`
min-height:180px;
width:100%;
background-color:rgb(0, 120, 140);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const H2=styled.h2
`
color:#fff;
`
const Box=styled.div`
height:320px;
background-color:#3d2462;
border-radius:30px;
text-align:center;
display:flex;
align-items:center;
font-size:30px;
color:white;
display:inline-block;

`
return(<>
<Containerr>
<Container>
    <H2 className="budijsk">Successfull Stories</H2>
    <div className="container">
    </div>
    <p className="iudhsejwksl" style={{color:"#fff",fontFamily: 'Roboto',fontSize:20}}>
 Successfull Carrer Stories that will impress you and give you lots of Motivation!
    </p>
</Container>
</Containerr>

</>)
}
export default SuccsessfullStoriesHeading
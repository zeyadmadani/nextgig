import styled from "styled-components"
import { Container } from "react-bootstrap"
const CareerAdviceHeading=()=>
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
return(<>
<Containerr>
<Container>
    <H2 className="uekdhjsn">Career Advice</H2>
    <p className="ghfdgfsfsrd" style={{color:"#fff",fontFamily: 'Roboto',fontSize:20}}>
 We Offer career advice for people to follow the best practices to finding jobs.
    </p>
</Container>
</Containerr>
</>)
}
export default CareerAdviceHeading
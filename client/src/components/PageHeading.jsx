import "../styles/PageHeading.css"
import styled from "styled-components"
import {Container} from 'react-bootstrap'  
const PageHeading=({loc})=>
{
const Heading=styled.div
`
display:flex;
align-items:center;
background-color:#fff;
height:60px;
width:100%;
overflow:hidden;
font-size:25px;
`
const Containerr=styled.div
`
display:flex;
gap:15%;
margin:25px;
`
const Spot=styled.div``
const Span=styled.span
`

`
return(<>
<Containerr className="jhdksfdg">
<Spot></Spot>
<Spot>
    <Container>
Search results for&#160;<Span style={{color:"rgb(110, 70, 174)",fontWeight:"bold"}}>
Most Popular Jobs in {loc}
</Span>
</Container>

</Spot>
<Spot></Spot>

</Containerr>
</>)
}
export default PageHeading
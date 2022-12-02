import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styled from "styled-components"
import JobDescription from "../components/JobDescription"
import SingleJobDescription from "../components/SingleJobDescription"
const Container=styled.div
`
min-height:100vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
`
const SingleJob=()=>
{
return(<>
<Nav/>

<Container>
    
    <div className="container">
        <div className="row">
        <div className="col"></div>
        <div className="col-lg-11">
        <SingleJobDescription/>
        </div>
        <div className="col"></div>
        </div>
    </div>

</Container>
<Footer/>
</>)
}
export default SingleJob
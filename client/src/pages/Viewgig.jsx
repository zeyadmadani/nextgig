import Nav from "../components/Nav"
import styled from "styled-components"
import SingleJobDescription from "../components/SingleJobDescription"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
const Container=styled.div
`
min-height:100vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
`
const Viewgig=()=>
{
    const {id}=useParams()
return(<>
<Nav/>

<Container>
    
    <div className="container">
        <div className="row">
        <div className="col"></div>
        <div className="col-lg-11">
        <SingleJobDescription employee={true} key={id} jobid={id}/>
        </div>
        <div className="col"></div>
        </div>
    </div>

</Container>
<Footer/>
</>)
}
export default Viewgig
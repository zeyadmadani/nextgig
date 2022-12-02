import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styled from "styled-components"
import JobDescription from "../components/JobDescription"
import SingleJobDescription from "../components/SingleJobDescription"
import SingleJobDescriptionForEmployer from "../components/SingleJobDescriptionForEmployer"
import { useParams } from "react-router-dom"
import EmployerNav from "../components/EmployerNav"
import EmployerFooter from "../components/EmployerFooter"
const Container=styled.div
`
min-height:100vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
`
const ViewJob=()=>
{
    const {id}=useParams()
return(<>
<EmployerNav/>

<Container>
    
    <div className="container">
        <div className="row">
        <div className="col"></div>
        <div className="col-lg-11">
        <SingleJobDescriptionForEmployer key={id} jobid={id}/>
        </div>
        <div className="col"></div>
        </div>
    </div>

</Container>
<EmployerFooter/>
</>)
}
export default ViewJob
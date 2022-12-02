import styled from "styled-components"
import { useEffect, useState } from "react";
import {Container , Row, Col} from 'react-bootstrap'  
import "../styles/Main.css"
import TuneIcon from '@mui/icons-material/Tune';
import JobDescription from "./JobDescription";
import Card from "./Card"
import Footer from "./Footer";
import Filter from "./Filter";
import PageHeading from "./PageHeading"
import { useDispatch, useSelector } from "react-redux";
const MainforSearch=({jobs,location})=>
{
  const [open,setOpen]=useState(false)


    const Main=styled.div`height:100%`
const Button=styled.button
`
cursor:pointer;
`
const Set=styled.div
`
display:flex;
flex-direction:column;
gap:10px;
overflow-y: scroll;
position: sticky;
padding:10px;
height: 100vh;
font-size: 14px;
top: 0;
`

const CardElement=styled.div
`

`
const {currentJob}=useSelector(state=>state.job)
const [secret,setSecret]=useState(false)
    return(
      <>
{
    location &&       <div>
      <PageHeading loc={location}/>
      </div>
}

    <Main className="Main">
     <div className="App">  
   <Container>  
   <div className="container">
      <br/>
      <div className="row">
        <div className="col-lg-4">
        <div className="changeFont">All Results</div>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4"></div>
      </div>
     </div> 
  <Row>  

 <div className="col-lg-5">
        <Set>
        {jobs.length>0 ? jobs.map(job=>
          {
           return <Card key={job._id} id={job._id} job={job} secret={secret} setSecret={setSecret}/>
          }) : <h6 style={{marginTop:40}} className="changeFont">No Results Have Been Found</h6>}
        </Set>
        </div>  
        <div className="col-lg-7">
        <JobDescription job={currentJob} secret={secret} setSecret={setSecret} />
        </div>   
  </Row>  
</Container>  
    </div>  
    </Main>
    <Footer/>
    {open && <Filter setOpen={setOpen}/>}
    </>)
}
export default MainforSearch
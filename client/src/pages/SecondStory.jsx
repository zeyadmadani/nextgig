import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Advices from "../components/Advices"
import { useEffect } from "react"
import HorizontalTips from "../components/HorizontalTips"
import SuccsessfullStoriesHeading from "../components/SuccsessfullStoriesHeading"
const SecondStory=()=>
{
  useEffect(()=>
  {
    window.scrollTo(0,0)
  },[])
    const Box=styled.div`
    max-height:320px;
    background-color:#3d2462;
    border-radius:30px;
    text-align:center;
    display:flex;
    justify-content:center;
    padding:15px;
    align-items:center;
    font-size:18px;
    color:white;
    display:inline-block;
    margin-top:5px;
    `
    const Stories=styled.div
    `
    display:inline-block;
    align-items:center;
    justify-content:center;
    `
    const Story=styled.div
    `
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:10px;
    gap:10px;
    `
    const Logo=styled.img
    `
    margin-top:40px;
    `
    
    return(<>
    <Nav/>
    <SuccsessfullStoriesHeading/>
    <div>

    <div className="container">


    <div className="row">

    <div className="col-lg-7">

<h5 style={{textAlign:"center",margin:"20px 0px"}}>
Change can be scary at the best of times, but rarely will you find someone who made a big change in their life or career that regrets it. Even when unexpected events force us to make reluctant changes, eventually over time what seemed like a terrible situation invariably leads to greater things.
</h5>
<h6 className="jhkfd" style={{margin:"50px 0px", color:"black"}}>
Espree Devora: LA Startup & Female Tech Entrepreneur
</h6>
<p className="jhkfd" style={{color:"black",fontWeight:400}}>
While she may be lesser known in the mainstream, Espree Devora is quite the influencer in LA and for women in tech. Also listed by Inc Magazine as top 30 Women in Tech to following in 2017. With a reputation for being ‘the girls who gets it done’ she created Silicon Beach community and entrepreneurial hub WeAreLATech.com. Espree also launched the first podcast that focused solely on LA startups and now hosts the women in tech show. From aged 14 starting her own scuba diving business to today’s success – Espree has carved out her own career.

Her advice for anyone looking for the motivation to make a big career change?

“Your ‘intuition is your oracle’. Walk your own path, don’t try to be someone else. They had their journey so it’s time for you to create your own journey now.”


</p>
  </div>
  <div className="col" ></div>
  <div className="col-lg-3" >
  <div style={{display:"flex",alignItems:"center"}}>
<div>
  <br/>
<Box>
Get great content like this and the <i style={{color:"#f2b127"}}> hottest jobs delivered to your inbox.</i>
</Box>
</div>
</div>
<h6 style={{fontWeight:"bold"}}>
</h6>
<br/>
<p style={{fontWeight:"bold"}}>

</p>
  </div>
  
 
  </div>
  <div className="row">

<div className="col-lg-9">
<h6 style={{fontWeight:"bold",textAlign:"center"}}>Successful Carrer Stories
</h6>
<br/>
<div style={{fontFamily: 'Raleway',fontWeight:500}}>
<Stories>
  <Link to="/FirstStory" style={{textDecoration:"none",color:"inherit"}}>
<Story className="hjkdfhdds">
    <Logo style={{paddingLeft:"-20px"}} src="/snap1.png"/>

  <br/>
  <p className="iudkjfe" style={{fontSize:20,fontWeight:600,fontFamily:"Nunito Sans"}}>
  Leah Marcus: missile defense to product management

  </p>
  </Story>
  </Link>
  <Link to="/SecondStory" style={{textDecoration:"none",color:"inherit"}}>
  <Story className="hjkdfhdds">
    <Logo src="/snap2.png"/>

  <br/>
  <p className="iudkjfe" style={{fontSize:20,fontWeight:600,fontFamily:"Nunito Sans"}}>
  Espree Devora: LA Startup & Female Tech Entrepreneur
  </p>
  </Story>
  </Link>
  <Link to="/ThirdStory" style={{textDecoration:"none",color:"inherit"}}>
  <Story className="hjkdfhdds">
    <Logo style={{paddingLeft:15}} src="/snap3.png"/>

  <br/>
  <p className="iudkjfe" style={{fontSize:20,fontWeight:600,fontFamily:"Nunito Sans"}}>
  Jonah Perreti: huffed & buzzed from teacher to media king
  </p>
  </Story>
  </Link>
</Stories>
</div>
</div>
<div className="col"></div>
<div className="col-lg-2" >
<h6 className="uekdhjsn" style={{fontWeight:"bold"}}>Career Advices
</h6>
<br/>
<p style={{fontWeight:"bold"}}>
<Advices/>

</p>
</div>


</div>  
  </div>
  </div>
    <Footer/>
    </>)
}
export default SecondStory
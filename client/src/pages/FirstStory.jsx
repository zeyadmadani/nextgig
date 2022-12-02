import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Advices from "../components/Advices"
import { useEffect } from "react"
import HorizontalTips from "../components/HorizontalTips"
import SuccsessfullStoriesHeading from "../components/SuccsessfullStoriesHeading"
const FirstStory=()=>
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
    Leah's Career Success Story
</h6>
<p className="jhkfd" style={{color:"black",fontWeight:400}}>
Leah Marcus went from missile defence to freelance and product management. Check out her story originally shared in The Muse. This lady landed her first proper job in Missile Defence after finishing as a finance and economics and deciding to expand her job search to wider industries. Not only did Leah go on to support a missile defence program, less than four years on a strategy that she developed caught the eye of the Secretary of Defence. Leah had a taste for innovation, but felt she had more to explore so decided to go back to graduate school and join the Kellogg MMM program – a bold move that she very much looks back on fondly, she said:

“Going back to school was one of the most extraordinary experiences of my life. It was the most interesting, challenging, fun, eye-opening, educational, and stressful two years, and I wouldn’t trade it for the world.”

After a period of self-discovery and unemployment Leah eventually landed herself a job as Product Manager at Trunk Club, an online fashion brand with technology at its core. Where she now runs a team of engineers, designers and data scientists.

“On any given day, I might be developing a roadmap, shaping our next big concept, shadowing stylists, or regression testing a new feature. It’s constant collaboration, storytelling, aligning perspectives, and prioritizing decisions across our business goals, user needs, and technology.”

Yes, the famed stories of people rising from the ashes to million dollar success are motivating, but there’s something a little more tangible to grab in a story about one of us ‘normals’ making progress. Strides forwards in a career that may not seem quite as ‘bling’ but changes that still could have a significant impact on our lives.
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
export default FirstStory
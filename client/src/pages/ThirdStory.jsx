import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Advices from "../components/Advices"
import HorizontalTips from "../components/HorizontalTips"
import SuccsessfullStoriesHeading from "../components/SuccsessfullStoriesHeading"
const ThirdStory=()=>
{
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
Jonah Perreti: huffed & buzzed from teacher to media king
</h6>
<p className="jhkfd" style={{color:"black",fontWeight:400}}>
You may or may not know his name, but you probably know his media sites. Jonah Perreti launched Buzzfeed and The Huffington Post in his 30s, but before that he was a computer science teacher. Can you imagine going from teaching kids how to use MS Office to running million dollar enterprises? UK Business Insider interviewed Jonah in a podcast last year where he revealed the story from his perspective. When asked how he managed running both media sites at once, he said:

“Not very well. I wouldn’t recommend it. I was going between our office in Chinatown at BuzzFeed and SoHo, and I’d pick up Vietnamese sandwiches on the way and feed them to the Huff Post editors. BuzzFeed was more of a lab, and we were experimenting.  It started to be hard. I was spending most of my time at BuzzFeed and going Monday mornings to Huff Post for the management meeting but then spending lots of time thinking about it, emailing a lot with Paul Barry who was the CTO about product and tech and growth. It wasn’t until Huff Post sold to AOL that I made a complete break and focused entirely on BuzzFeed. It made a huge difference in the ability to grow BuzzFeed once I was not also doing Huff Post.”  
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
export default ThirdStory
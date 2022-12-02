import Nav from "../components/Nav"
import Footer from "../components/Footer"
import CareerAdviceHeading from "../components/CareerAdviceHeading"
import { Link } from "react-router-dom"
import Advices from "../components/Advices"
import styled from "styled-components"
import HotizontalTips from "../components/HorizontalTips"
import { useSelector } from "react-redux"
import { useEffect } from "react"
const First90Days=()=>
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
    const currentUser=useSelector(state=>state.user)
return(<>
<Nav/>
<CareerAdviceHeading/>
<div className="container">
<div className="row">
<div className="col-lg-8 col-md-12 sepPics" style={{textAlign:"center",position:"relative",cursor:"pointer"}}>
<div style={{display:"flex",alignItems:"center"}}>
  <div className="container">
    <div className="row">

      <div className="col-lg-6">    <img style={{marginTop:25}} src="career-advice.png"/></div>
  
 <div className="col-lg-6 hukhsdgyuides" style={{marginTop:30}}>
 Congratulations! After months of networking, interviewing, and sending out resumes, you’ve landed your next role. This is a huge accomplishment!

Celebrate, rest, relax and show your gratitude to the people who helped you achieve this goal.

Then, as day one in your new role draws near, make sure you have everything you need to succeed by following our advices to success on the job in the first 90 days.
    </div> 
 
    </div>
  </div>

</div>
  </div>
  <div className="col"></div>
  <div className="col-lg-3 col-md-12 sepPics" style={{textAlign:"center",position:"relative",cursor:"pointer",display:"flex"}}>
<div style={{display:"flex",alignItems:"center"}}>
<div>
<Box >
Get great content like this and the <i style={{color:"#f2b127"}}> hottest jobs delivered to your inbox.</i>
{!currentUser &&
  <Link to="/Register">
<button className="joinBtn">Join Now</button>
</Link>
}

</Box>
</div>
</div></div>
  
 
    </div>
    <br/>    <br/>    <br/>    
    <div className="container">


    <div className="row">

    <div className="col-lg-8">
<h6 style={{fontWeight:"bold"}}>Article
</h6>
<br/>
<div style={{fontFamily: 'Raleway'}}>
<p style={{fontFamily:"Raleway"}}>

Why the First 90 Days Matters

In his work educating companies about successful onboarding, Spielman notes the importance of the first 90 days for employees and their employers. “Research suggests that an employee’s first 90 days will in large part determine his or her performance, longevity, and contribution to the company,” he shares.

Therefore, a successful onboarding program designed and executed by the company alongside an intentional plan designed and executed by the employee is critical. This joint process establishes and strengthens relationships, conveys transparency, and ultimately mitigates risk and maximizes success.

“For the employer, key elements of a successful onboarding process include introducing new hires to key stakeholders, setting employees up for success by designing an internal interview guide for conversations, and creating a 90-day plan laid out in three 30-day increments to meet key objectives and goals,” explains Spielman.

The important thing to remember as a new employee – you will not be executing on 90 days’ worth of goals on day one.

“As an employee feeling the pressure that accompanies a hard-won job, you will want to make a positive first impression,” Spielman says. “The natural reaction in many instances is to jump right in but as Jeff Olson said, ‘Sometimes you need to slow down to go fast.’”
</p>

<h2>
    Step 1: Detail What, Why, and How
</h2>
<p style={{fontFamily:"Raleway"}}>
    
Step 1 in the “slow down to go fast” five-step process is to detail the first 90 days by communicating openly with your manager about:

What you plan to do to learn your new role and contribute
Why you are structuring your approach in this way
How you will execute this plan to make progress

To guide this conversation and keep you focused, break out your first 90 days into a three-segment action plan like the one outlined here. Segments one and two will be dedicated to accelerating your learning and beginning to contribute to the conversation. Segment three (days 61 through 90) will be further detailed as you meet stakeholders and conduct interviews.

Note the importance of quantifying output of each segment and scheduling check ins to manage expectations and maintain open lines of communication.
</p>
<h2>
Step 2: Identify Stakeholders
</h2>
<p style={{fontFamily:"Raleway"}}>

After laying out your objectives for the first 90 days, the next step is to identify the stakeholders you should meet and interview. The conversations you have as a new employee may be an extension of what you learned during the interview process or provide completely new and highly valuable information.

Identify with your manager who you will be interacting with on a regular basis in your new role and who else within the company you should connect with to gain their insights or to prepare for future collaboration. Then craft your questions for these conversations using the 90-Day Interview Guide.

Sample questions include:

What is our company’s greatest strength(s)?
What’s the one thing we’re not doing today to accelerate growth (of revenue, customers, product, service, etc.) but should?
What would need to happen for the organization to seize the potential of these opportunities?
What are the biggest challenges the organization is facing (or will face) in the near future?
</p>
<h2>
Step 3: Conduct Interviews
</h2>
<p style={{fontFamily:"Raleway"}}>

Next, set up your 30-45 minute stakeholder meetings where you’ll have an opportunity to build relationships, learn, and capture important information that will make you successful in your new role.

To make the most of these meetings, determine what method you will use to capture information (i.e. typed or handwritten notes, recorded Zoom meetings, transcriptions) so that you have an organized way to refer back to what you’ve learned and be ready to synthesize in Step 4.
</p>
<h2>
Step 4: Synthesize
</h2>
<p style={{fontFamily:"Raleway"}}>

Notes in hand, in Step 4 you will be identifying key themes – both from what you did hear and what you didn’t hear in your stakeholder interviews. Were there any inconsistencies you noticed that might require clarification?

From all of the data collected, you will then be able to conduct a SWOT analysis for the company, specifically related to how that will impact the imperatives for your new role.

What you share and when will be up to your discretion. Unless you have significant concerns about the finding, best practice has been to share an anonymized summary of your interviews. “You can provide almost instant value – and make a positive first impression - by offering the insights gleaned during the onboarding process. The company can benefit from your fresh eyes and new perspective.”
</p>
<h2>
Step 5: Build, Share, Work the Plan
</h2>
<p style={{fontFamily:"Raleway"}}>

Lastly, informed by your job description, job interviews, experiences, and data from the five-step process, you can write out clear goals.

What four goals (approximately) should you plan to achieve and in what time horizon?

To ensure that you are setting the right goals in this process, follow the ACHIEVE model: Action-Oriented, Consequential, Hard not Herculean, Integrated, Explicit, Visualized, and Endpoint-focused. Understanding the meaning and the consequence – the why – behind a goal dramatically increases the chances of it being achieved. Spielman, who designed the ACHIEVE model, states “When we add in the “V,” for the visual representation of the goal, we tap into the power of visualization that athletes have been using for decades.”

Furthermore, when sharing your goals, make sure they are supported by defined action items to will work in service of those goals, as well as a clear articulation as to why these goals are important. Incorporating these elements, along with a deadline for each aim, will turn your list of goals into a clear action plan that you can communicate to others and begin executing on in service of your new company.
</p>

</div>
  </div>
  <div className="col" ></div>
  <div className="col-lg-2" >
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
  </div>

  <Footer/>

</>)
}
export default First90Days
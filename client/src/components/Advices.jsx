
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Collapse from 'react-bootstrap/Collapse';
import "../styles/InterviewQuestions.css"
const Advices=()=>
{
    const [open,setOpen] = useState(false);
    const [openn,setOpenn] = useState(false);
    const [opennn,setOpennn] = useState(false);
    const [opennnn,setOpennnn] = useState(false);
    const [opennnnn,setOpennnnn] = useState(false);
    const [opennnnnn,setOpennnnnn] = useState(false);
return(<>
<>
      <Button
      className="btn123"
      style={{border:"none",background:"none",color:"blue",outline:"none"}}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
    <div style={{display:"flex",alignItems:"center",gap:5}}>

       {!open ?    <AddIcon/> :    <RemoveIcon/>}
       <h6 className="uysdijnij" style={{marginTop:10}}>
       Advice #1
        </h6>
      </div>
      </Button>
      <Collapse in={open}>
        <div style={{fontSize:10}} id="example-collapse-text">
        The best career or job is the one in which you’re using the skills you enjoy. But, not every job needs to address all of your passions. Use every job as an opportunity to learn something new and keep an open mind; you may find that you really enjoy something you never imagined would appeal to you.
        </div>
      </Collapse>
    </>
    <>
      <Button
      className="btn123"
      style={{border:"none",background:"none",color:"blue",outline:"none"}}
        onClick={() => setOpenn(!openn)}
        aria-controls="example-collapse-text"
        aria-expanded={openn}
      >
    <div style={{display:"flex",alignItems:"center",gap:5}}>

       {!openn ?    <AddIcon/> :    <RemoveIcon/>}
       <h6 className="uysdijnij" style={{marginTop:10}}>
       Advice #2
        </h6>
      </div>
      </Button>
      <Collapse in={openn}>
        <div style={{fontSize:10}} id="example-collapse-text">
        My friend Andre said to me, “You know, Marissa, you’re putting a lot of pressure on yourself to pick the right choice, and I’ve gotta be honest: That’s not what I see here. I see a bunch of good choices, and there’s the one that you pick and make great.” I think that’s one of the best pieces of advice I’ve ever gotten.”—Marissa Mayer, CEO of Yahoo!
        </div>
      </Collapse>
    </>
    <>
      <Button
      className="btn123"
      style={{border:"none",background:"none",color:"blue",outline:"none"}}
        onClick={() => setOpennn(!opennn)}
        aria-controls="example-collapse-text"
        aria-expanded={opennn}
      >
    <div style={{display:"flex",alignItems:"center",gap:5}}>

       {!opennn ?    <AddIcon/> :    <RemoveIcon/>}
       <h6 className="uysdijnij" style={{marginTop:10}}>
       Advice #3
        </h6>
      </div>
      </Button>
      <Collapse in={opennn}>
        <div style={{fontSize:10}} id="example-collapse-text">
        No matter how low on the totem poll you are or how jaded you’ve become by your to-do list, it’s still important to show up early, wear something sharp, and avoid Facebook like the plague. I discovered that when I acted like a professional, I suddenly felt like my work was a lot more valuable. “Looking the part” boosted my confidence, helped me begin to see myself as a highly capable contributor to the team—and ultimately led the rest of my team to see me in the same light.
        </div>
      </Collapse>
    </>
    <>
      <Button
      className="btn123"
      style={{border:"none",background:"none",color:"blue",outline:"none"}}
        onClick={() => setOpennnn(!opennnn)}
        aria-controls="example-collapse-text"
        aria-expanded={opennnn}
      >
    <div style={{display:"flex",alignItems:"center",gap:5}}>

       {!opennnn ?    <AddIcon/> :    <RemoveIcon/>}
       <h6 className="uysdijnij" style={{marginTop:10}}>
       Advice #4
        </h6>
      </div>
      </Button>
      <Collapse in={opennnn}>
        <div style={{fontSize:10}} id="example-collapse-text">
        Remember that a job, even a great job or a fantastic career, doesn’t give your life meaning, at least not by itself. Life is about what you learn, who you are or can become, who you love and are loved by.
        </div>
      </Collapse>
    </>
    <>
      <Button
      className="btn123"
      style={{border:"none",background:"none",color:"blue",outline:"none"}}
        onClick={() => setOpennnnn(!opennnnn)}
        aria-controls="example-collapse-text"
        aria-expanded={opennnnn}
      >
    <div style={{display:"flex",alignItems:"center",gap:5}}>

       {!opennnnn ?    <AddIcon/> :    <RemoveIcon/>}
       <h6 className="uysdijnij" style={{marginTop:10}}>
       Advice #5
        </h6>
      </div>
      </Button>
      <Collapse in={opennnnn}>
        <div style={{fontSize:10}} id="example-collapse-text">
        If the career you have chosen has some unexpected inconvenience, console yourself by reflecting that no career is without them.
        </div>
      </Collapse>
    </>
    <>
      <Button
      className="btn123"
      style={{border:"none",background:"none",color:"blue",outline:"none"}}
        onClick={() => setOpennnnnn(!opennnnnn)}
        aria-controls="example-collapse-text"
        aria-expanded={opennnnnn}
      >
    <div style={{display:"flex",alignItems:"center",gap:5}}>

       {!opennnnnn ?    <AddIcon/> :    <RemoveIcon/>}
       <h6 className="uysdijnij" style={{marginTop:10}}>
       Advice #6
        </h6>
      </div>
      </Button>
      <Collapse in={opennnnnn}>
        <div style={{fontSize:10}} id="example-collapse-text">
        Don’t sweat it. Don’t beat yourself up about it. It’ll probably be scary or uncomfortable, but you always get to make a new choice if this one doesn’t work out.
        </div>
      </Collapse>
    </>

</>)
}
export default Advices
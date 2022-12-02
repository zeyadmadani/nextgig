import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../styles/Filter.css"
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  z-index:99999999999999999999999999999;
  align-items: center;
  justify-content: center;
`;
const General=styled.div``
const Wrapper = styled.form`
  width: 600px;
  height: 460px;
  background-color: #fff;
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Title = styled.h1`
  text-align: left;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  z-index: 999;
`;
const Desc = styled.textarea`
  border: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;
const Label = styled.label`
  font-size: 14px;
`;
const Hr=styled.div
`
height:3px;
width:100%;
background-color:grey;
box-shadow:rgb(0 0 0 / 10%) 0px 4px 9px;
`
const Radio=styled.div
`
display:flex;
align-items:center;
justify-content:space-between;
gap:20px;
`
const Filter = ({setOpen}) => {
  const navigate=useNavigate()
    const [img,setImg]=useState(undefined)
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [video,setVideo]=useState(undefined)
    const [imgPerc,setImgPerc]=useState(0)
    const [videoPerc,setVideoPerc]=useState(0)
    const [inputs,setInputs]=useState({})

   
  return (
    <General className="changeOP">

    <Container>
      <Wrapper>
        <Close onClick={()=>{setOpen(false)}}>X</Close>
        <Title>Filters</Title>
        <Hr/>
        <div className="container">
          <div className="row">
          <div className="col"></div>
          <div className="col-lg-10">
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<div>
<h6>
  Job Type
</h6>
<br/>
<form style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"150px"}}>
<div>


<Radio>
<label>All Types</label>
<input type="checkbox"/>
</Radio>
<Radio>
<label>Full-time</label>
<input type="checkbox"/>
</Radio>
<Radio>
<label>Part-time</label>
<input type="checkbox"/>
</Radio>
<Radio>
<label>Contract</label>
<input type="checkbox"/>
</Radio>
<Radio>
<label>Internship</label>
<input type="checkbox"/>
</Radio>
<Radio>
<label>Temporary</label>
<input type="checkbox"/>
</Radio>
</div>
<div>


<Radio>
<label>All Types</label>
<input type="checkbox"/>
</Radio>
<Radio>
<label>Full-time</label>
<input type="checkbox"/>
</Radio>
<Radio>
<label>Part-time</label>
<input type="checkbox"/>
</Radio>
<Radio>
<label>Contract</label>
<input type="checkbox"/>
</Radio>
<Radio>
<label>Internship</label>
<input type="checkbox"/>
</Radio>
<Radio>
<label>Temporary</label>
<input type="checkbox"/>
</Radio>
</div>
</form>
</div>
<div>

</div>
            </div>
          </div>
          <div className="col"></div>
          </div>
        </div>
        <Input style={{width:180,display:"block",margin:"0 auto",cursor:"pointer"}} type="submit" value="View Results" />
      </Wrapper>
    </Container>
    </General>
  );
};

export default Filter;

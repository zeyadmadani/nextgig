import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../configuration/Config"
const Success=()=>
{
    const [title,setTitle]=useState("")
    const [company,setCompany]=useState("")
    const path=useParams()
    useEffect(()=>
    {
const Fun=async()=>
{
const res=await axiosInstance.get(`/jobs/getspecificjob/${path.id}`)
res.status===200 && setTitle(res.data.title)
res.status===200 && setCompany(res.data.company)
}
Fun()
    },[path])
return(<main>
<Nav/>
<div style={{minHeight:"70vh",display:"flex",alignItems:"center",justifyContent:"center"}} className="changeFont">
You have successfully applied for the {title} at {company}
</div>
<Footer/>
</main>)
}
export default Success 

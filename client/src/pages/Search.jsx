import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { axiosInstance } from "../configuration/Config"
import { useState,useEffect } from "react"
import MainforSearch from "../components/MainforSearch"
const Search=()=>
{
    const [jobs,setJobs]=useState([])
    const {id}=useParams()
    const navigate=useNavigate()
    const loc=id.split("+")
    useEffect(()=>
    {
        !loc[0] && !loc[1] && navigate("/")
        const fetchJobs=async()=>
        {
const res=await axiosInstance.get(`/Jobs/search/${id}`)
setJobs(res.data)
        }
        fetchJobs()
    },[id])
return(<>
<Nav/>
<MainforSearch jobs={jobs} location={loc[1]}/>
<Footer/>
</>)
}
export default Search 
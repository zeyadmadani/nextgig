import axios from "axios"
export const axiosInstance=axios.create(
    {
        baseURL:"https://nextgig.onrender.com/api"
    })

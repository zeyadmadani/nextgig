import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import cookieparser from "cookie-parser"
import mongoose from "mongoose"
import EmployeeRoute from "./routes/EmployeeRoute.js"
import EmployerRoute from "./routes/EmployerRoute.js"
import AuthRoute from "./routes/AuthRoute.js"
import JobsRoute from "./routes/JobRoute.js"
import { fileURLToPath } from 'url';
import path from "path"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()
const app=express()
app.use((err,req,res,next)=>
{
    const status=err.status || 500
    const message=err.message || "Something Went Wrong..."
    return res.status(status).json(
        {
            success:false,
            status,
            message
        })
})
app.use(morgan("common"))
app.use(express.json())
app.use(cookieparser())
app.use("/api/Employee",EmployeeRoute)
app.use("/api/Employer",EmployerRoute)
app.use("/api/Auth",AuthRoute)
app.use("/api/Jobs",JobsRoute)
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
  
});
mongoose.connect(process.env.DB_ACCESS_KEY,{useNewUrlParser:true})
.then(()=>{console.log("Connected to Database")}).catch(e=>{console.log(`Error connecting to database: ${e}`)})

app.listen(process.env.PORT || 5002,()=>
{
    console.log(`Server is listening on Port ${process.env.PORT || 5002}`)
})
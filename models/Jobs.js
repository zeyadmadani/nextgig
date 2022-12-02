import mongoose from "mongoose"
const JobsSchema=new mongoose.Schema(
    {
        employeeId:
        {
            type:String
            
        },
        employerId:
        {
            type:String
        }
        ,
        title:
        {
            type:String,
            required:true,
    
        },
        address:
        {
            type:String,
            required:true
        },
        city:
        {
            type:String,
            required:true
        },
        salary:
        {
            type:String,
            default:""
        },
        company:
        {
            type:String
        },
        logo:
        {
            type:String
        },
        jobType:
        {
            type:String,
            required:true
        },
        description:
        {
            type:String,
            required:true
        },
        advantages:
        {
            type:String,
            default:""
   
        },responsibilities:
        {
            type:String,
            required:true
        },
        qualifications:
        {
            type:String,
            default:""
        },summary:
        {
            type:String,
            default:""
        },applied:
        {
            type:[String],
            default:[]
        }

    },{timestamps:true})
    export default mongoose.model("Jobs",JobsSchema)
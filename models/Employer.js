import mongoose from "mongoose"
const EmployerSchema=new mongoose.Schema(
    {
        employeeId:
        {
            type:String
        }
        ,
        email:
        {
            type:String,
            required:true,
            unique:true
        },
        company:
        {
            type:String,
            required:true,
            unique:true
        },
        companyLogo:
        {
            type:String
        }
        ,
        isEmployer:
        {
            type:Boolean,
            default:true
        },
        password:
        {
            type:String
        },
        availableJobs:
        {
            type:[String],
            default:[]
        },
      
        resetToken:String,
        expireToken:Date
    },{timestamps:true})
    export default mongoose.model("Employers",EmployerSchema)
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser:null,
loading:false,
error:false,
popup:true
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart:(state)=>
        {
            state.loading=true
        
        },        loginSuccess:(state,action)=>
        {
            state.loading=false
            state.currentUser=action.payload
        
        },        loginFailure:(state)=>
        {
            state.loading=false
            state.error=false
        },
        changeName:(state,action)=>
        {
            state.currentUser.name=action.payload
        },   changeEmail:(state,action)=>
        {
            state.currentUser.email=action.payload
        },   changePhone:(state,action)=>
        {
            state.currentUser.phone=action.payload
        },   changeAddress:(state,action)=>
        {
            state.currentUser.address=action.payload
        },  changeCountry:(state,action)=>
        {
            state.currentUser.country=action.payload
        }, changeSummary:(state,action)=>
        {
            state.currentUser.summary=action.payload
        },updateResume:(state,action)=>
        {
            state.currentUser.resumeURL=action.payload
        },updateLogo:(state,action)=>
        {
            state.currentUser.companyLogo=action.payload
        },setPopup:(state,action)=>
        {
            state.popup=action.payload
        },updateJobs:(state,action)=>
        {
            if(!state.currentUser.jobsAppliedFor.includes(action.payload))
            {
                
                state.currentUser.jobsAppliedFor.push(action.payload)
            }

        },
                logOut:(state)=>
        {
     return initialState
        }
    }
  })
  export const { loginStart,changeName,image,loginSuccess,updateLogo,loginFailure,logOut,changeEmail,changePhone,setPopup,updateJobs,changeAddress,changeCountry,changeSummary,updateResume } = userSlice.actions

export default userSlice.reducer
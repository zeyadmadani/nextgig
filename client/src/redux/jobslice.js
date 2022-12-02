import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentJob:null,
    secret:false
}

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
      fetchSuccess: (state, action) => {
        state.currentJob = action.payload;
      }, updateSecret: (state, action) => {
        state.secret = action.payload;
      }
}})
  export const {fetchSuccess,updateSecret} = jobSlice.actions

export default jobSlice.reducer
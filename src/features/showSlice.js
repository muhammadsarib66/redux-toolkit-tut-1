import { createSlice } from "@reduxjs/toolkit";


const initialState = {value: 1 } 
 export const showSlice = createSlice({
    initialState,
    name:  "show ",
    reducers:{
      showData : (state )=>{
         state.value = state.value + 1
        },
        counter: (state )=>{
         state.value = state.value +1 
         
        },
        IncValueByFront: (state, action) => {
         state.value = state.value + action.payload
        }
      //   addData :(state , action)=>{

      //   }
    }
 })

 export const { showData , counter , IncValueByFront} = showSlice.actions

 export default showSlice.reducer
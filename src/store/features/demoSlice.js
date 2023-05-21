import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value:0,
  lang:'zh-CN'
}

const demoSlice = createSlice({
  name:'demo',  
  initialState,  
  reducers:{ 
    setValue:(state)=>{
      console.log(state.value)
    },

  }
})


export const {setValue} = demoSlice.actions;

export default demoSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:null
}

const products=createSlice({
    name:"products",
    initialState,
    reducers:{
        setdata:(state,action)=>
        {  
            state.products=action.payload;
        }
    }
})

export const {setdata}=products.actions;

export default products.reducer;

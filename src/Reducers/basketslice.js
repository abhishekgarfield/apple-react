import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:null
}

const basket=createSlice({
    name:"basket",
    initialState,
    reducers:{
        additems(state,action){
            state.items=action.payload;
        },
        removeitems:(state,action)=>{
            state.items=action.payload;
        }
    }
})

export const {additems,removeitems}=basket.actions;
export default basket.reducer;
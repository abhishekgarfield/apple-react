import { createSlice } from "@reduxjs/toolkit";

const initialState={
    theme:null
}

const systemTheme=createSlice({
    name:"systemtheme",
    initialState,
    reducers:{
        setInitialtheme:(state,action)=>
        { 
            state.theme=action.payload;
            console.log(state.theme);;
        }
    }
})

export const {setInitialtheme}=systemTheme.actions;

export default systemTheme.reducer;

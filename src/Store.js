import { configureStore } from "@reduxjs/toolkit";
import darkreducer from "./Reducers/darkreducer";
import Productreducer from "./Reducers/Productreducer";

const Store=configureStore({
    reducer:{
        dark:darkreducer,
        products:Productreducer
    }
})

export default Store;
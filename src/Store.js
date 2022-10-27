import { configureStore } from "@reduxjs/toolkit";
import basketslice from "./Reducers/basketslice";
import darkreducer from "./Reducers/darkreducer";
import Productreducer from "./Reducers/Productreducer";

const Store=configureStore({
    reducer:{
        dark:darkreducer,
        products:Productreducer,
        basket:basketslice
    }
})

export default Store;
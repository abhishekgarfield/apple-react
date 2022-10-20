import { configureStore } from "@reduxjs/toolkit";
import darkreducer from "./Reducers/darkreducer";

const Store=configureStore({
    reducer:{
        dark:darkreducer
    }
})

export default Store;
import { BrowserRouter ,Route ,Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Listing from "./pages/listing";
import { Provider, useSelector } from "react-redux";
import Store from "./Store";
import Appwrapper from "./Appwrapper";

const App=()=>{
  
  return(
    <Provider store={Store}>
       <Appwrapper/>
    </Provider>
  );
}


export default App;
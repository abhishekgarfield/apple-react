import { BrowserRouter ,Route ,Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Listing from "./pages/listing";
import { Provider, useSelector } from "react-redux";
import Store from "./Store";
import Productinfo from "./pages/Productinfo";

const Appwrapper=()=>{
  const systheme=useSelector((state)=>{return state.dark.theme})
  if (systheme) {
      document.body.classList.add("night");   
  }
  else{
    document.body.classList.remove("night");
  }
  return(
    <BrowserRouter >
      <Routes>
        <Route index element={<Homepage />}/>
        <Route path="/listing/:category_id" element={ <Listing />}/>
        <Route path="/product/:product_id" element={ <Productinfo />}/>
      </Routes>
    </BrowserRouter>
  );
}


export default Appwrapper;
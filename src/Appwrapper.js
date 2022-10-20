import { BrowserRouter ,Route ,Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Listing from "./pages/listing";
import { Provider, useSelector } from "react-redux";
import Store from "./Store";

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
      </Routes>
    </BrowserRouter>
  );
}


export default Appwrapper;
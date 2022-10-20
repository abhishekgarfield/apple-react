import { BrowserRouter ,Route ,Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Listing from "./pages/listing";

const App=()=>{
  return(
    <BrowserRouter >
      <Routes>
        <Route index element={<Homepage />}/>
        <Route path="/listing/:category_id" element={ <Listing />}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
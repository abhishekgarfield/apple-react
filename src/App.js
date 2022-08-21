import { BrowserRouter ,Route ,Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Listing from "./pages/listing";

const App=()=>{
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<Homepage />}/>
        <Route path="listing" element={ <Listing />}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import UploadImage from './components/UploadImage';
import AllProducts from './comps/Allproducts.jsx'
import AddProd from "./comps/Addprod.jsx";



function App() {




  return (
    <Routes>
      <Route path="/" element={<UploadImage />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/add" element={<AddProd />} />
    
      //helloo again
    </Routes>
  );
}
export default App;

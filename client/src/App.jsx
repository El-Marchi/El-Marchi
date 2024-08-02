import {
  Routes,
  Route,
} from "react-router-dom";

import AllProducts from "./comps/Allproducts";
import AddProduct from "./comps/Addprod";
import Errorpage from "./comps/Erorpage";
import Cart from "./comps/Cart.jsx"
function App() {




  return (
    <Routes>
      
      <Route path="/" element={<Cart />} />
//helloo again
    </Routes>
  );
}
export default App;

import {
  Routes,
  Route,
} from "react-router-dom";
import 'tailwindcss/tailwind.css'
import ProductDetailsPage from "./pages/ProductDetailsPage";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";




import AllProducts from "./comps/Allproducts";
import AddProduct from "./comps/Addprod";
import Errorpage from "./comps/Erorpage";
import Cart from "./comps/Cart.jsx"
function App() {




  return (
    <Routes>
      
      <Route path="/" element={< About/>} />
    </Routes>
  );
}
export default App;

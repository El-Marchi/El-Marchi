import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import About from "./pages/About";


function App() {




  return (
    <Routes>
      
      <Route path="/" element={<ProductDetailsPage />} />
//helloo again
    </Routes>
  );
}
export default App;

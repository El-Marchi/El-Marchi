import {
  Routes,
  Route,
} from "react-router-dom";
import 'tailwindcss/tailwind.css'
import ProductDetailsPage from "./pages/ProductDetailsPage";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";




function App() {




  return (
    <Routes>
      
      <Route path="/" element={< About/>} />
    </Routes>
  );
}
export default App;

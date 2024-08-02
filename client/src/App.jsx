import {
  Routes,
  Route,
} from "react-router-dom";
import 'tailwindcss/tailwind.css'
import ProductDetailsPage from "./pages/ProductDetailsPage";
import About from "./pages/About";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ContactForm from "./pages/ContactForm";




function App() {




  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
export default App;

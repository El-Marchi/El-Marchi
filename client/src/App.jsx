import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import ProductDetailsPage from "./pages/ProductDetailsPage";
import About from "./pages/About";
import SignUp from "./components/SignUp";
 import Login from "./components/Login";
 import Update from "./components/Update";
import ContactForm from "./pages/ContactForm";
import AllProducts from "./comps/Allproducts";
import AddProduct from "./comps/Addprod";
import Errorpage from "./comps/Erorpage";
import Cart from "./comps/Cart.jsx"
//  import { Update } from '@mui/icons-material';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<SignUp />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/update" element={<Update />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
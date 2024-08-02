import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import ProductDetailsPage from "./pages/ProductDetailsPage";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";
import AllProducts from "./comps/Allproducts";
import AddProduct from "./comps/Addprod";
import Errorpage from "./comps/Erorpage";
import Cart from "./comps/Cart.jsx"
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/product" element={<ProductDetailsPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
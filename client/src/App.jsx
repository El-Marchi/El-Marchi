import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import ProductDetailsPage from "./pages/ProductDetailsPage";
import About from "./pages/About";
import SignUp from "./components/SignUp";
// import Login from "./components/Login";
import ContactForm from "./pages/ContactForm";
import Homepage from "./components/Homepage.jsx";

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
{/* <<<<<<<<< Temporary merge branch 1
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
=========
          <Route path="/" element={<Cart />} />
>>>>>>>>> Temporary merge branch 2 */}
          <Route path="/product" element={<ProductDetailsPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/Dashboard" element={<DashboardAdmin />} />
          <Route path="/all-Products" element={<AllProducts />} />

        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
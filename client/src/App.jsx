import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import ProductDetailsPage from "./pages/ProductDetailsPage";
import About from "./pages/About";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Update from "./components/Update";
import ContactForm from "./pages/ContactForm";
import Homepage from "./components/Homepage.jsx";
import DashboardAdmin from './components/dashboardadmin.jsx'
import AllProducts from "./comps/Allproducts";
import AddProduct from "./comps/Addprod";
import Errorpage from "./comps/Erorpage";
import Cart from "./comps/Cart.jsx"
import Wishlist from "./pages/Wishlist";
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
 

  return (
    <div >
      <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Homepage />} />
          
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<ProductDetailsPage />} />
          <Route path="/Contact" element={<ContactForm />} />
          <Route path="/Dashboard" element={<DashboardAdmin />} />
          <Route path="/All-Products" element={<AllProducts />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/Product" element={<ProductDetailsPage />} />
          <Route path="*" element={<Errorpage />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
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
import SallerDashboard from "./comps/SallerDashboard.jsx";

function App() {
  const [currentSellerId, setCurrentSellerId] = useState(null);

  useEffect(() => {
    // Here you would typically fetch the current user's ID from your authentication system
    // For now, let's set a dummy ID
    setCurrentSellerId(1); // Replace with actual logic to get the seller's ID
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={currentSellerId ? <SallerDashboard userid={currentSellerId} /> : <div>Loading...</div>} />
          <Route path="/product" element={<AddProduct />} />
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
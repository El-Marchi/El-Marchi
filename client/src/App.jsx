import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import ProductDetailsPage from "./pages/ProductDetailsPage";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";
import Homepage from "./components/Homepage.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductDetailsPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
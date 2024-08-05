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
import Addprod from "./comps/Addprod";
import Errorpage from "./comps/Erorpage";
import Cart from "./comps/Cart.jsx"
import SallerDashboard from "./comps/SallerDashboard.jsx";
import FilteredProducts from './components/filtredProducts.jsx';
import Wishlist from "./pages/Wishlist";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SallerDashboard from "./comps/SallerDashboard.jsx";
import Checkout from "./components/Checkout.jsx";
function App() {
  // You might want to add state management for currentSellerId here
  const [currentSellerId, setCurrentSellerId] = useState(null);

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/seller-dashboard" element={currentSellerId ? <SallerDashboard userid={currentSellerId} /> : <div>Loading...</div>} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductDetailsPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/admin-dashboard" element={<DashboardAdmin />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/update" element={<Update />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/category/:categoryName" element={<FilteredProducts />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
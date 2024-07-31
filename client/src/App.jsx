import {
  Routes,
  Route,
} from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Navbar from './components/Navbar'


function App() {




  return (
    <Routes>
      <Route path="/" element={<Navbar />} />

    </Routes>
  );
}
export default App;

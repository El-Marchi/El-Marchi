import {
  Routes,
  Route,
} from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";


function App() {




  return (
    <Routes>
      <Route path="/" element={<ProductDetailsPage />} />
    </Routes>
  );
}
export default App;

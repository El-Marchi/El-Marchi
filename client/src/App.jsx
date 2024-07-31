import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'


function App() {




  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
//helloo
    </Routes>
  );
}
export default App;

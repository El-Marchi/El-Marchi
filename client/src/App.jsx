import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
// import Navbar from './components/Navbar.jsx'
// import Footer from './components/Footer';
import Homepage from './components/Homepage.jsx';
// import { NewArrival } from './components/newarrival.jsx';
// import FashionComponent from './components/category.jsx';
// import CategoryList from './components/category.jsx';
// import Contact from './components/contact.jsx';
// import Navbar from "./components/Navbar";
// import ProductDetailsPage from "./pages/ProductDetailsPage";
// import About from "./pages/About";
// import Category from './components/category.jsx';

// import CarouselCustomArrows from '../src/components/carousele.jsx';



function App() {




  return (
 

<div className="flex flex-col min-h-screen">
{/* <Navbar /> */}
      
       
      <Routes>
          <Route path="/" element={<Homepage/>} />

          
        </Routes>
      
      
     
    </div>


  );
}
export default App;

// import React from 'react';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Your other components and content */}
//       <main className="flex-grow">
//         {/* Main content */}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
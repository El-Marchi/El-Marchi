import React from 'react';
import 'tailwindcss/tailwind.css';


const Category = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Exclusive</h2>
        <ul>
          <li className="mb-2"><a href="#" className="text-gray-700 hover:text-black">Women's Fashion</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700 hover:text-black">Men's Fashion</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700 hover:text-black">Electronics</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700 hover:text-black">Home & Lifestyle</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700 hover:text-black">Medicine</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700 hover:text-black">Sports & Outdoor</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700 hover:text-black">Baby & Toys</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700 hover:text-black">Groceries & Pets</a></li>
          <li className="mb-2"><a href="#" className="text-gray-700 hover:text-black">Health & Beauty</a></li>
        </ul>
      </div>


      
    </div>
  );
};

export default Category;
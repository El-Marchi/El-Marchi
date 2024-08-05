import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FilteredProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [categoryName]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product/getall');
      const allProducts = response.data.products;
      const filteredProducts = allProducts.filter(
        product => product.categorie.toLowerCase() === categoryName.replace(/-/g, ' ')
      );
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 capitalize">{categoryName.replace(/-/g, ' ')} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.productid} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-64 overflow-hidden">
              <img 
                src={product.images && product.images[0] ? product.images[0].imageurl : 'https://via.placeholder.com/300x300'} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-red-600 font-bold text-xl">${product.price}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400">{'★'.repeat(Math.floor(product.rating || 0))}{'☆'.repeat(5 - Math.floor(product.rating || 0))}</span>
                  <span className="text-gray-500 text-sm ml-1">({product.reviews || 0})</span>
                </div>
              </div>
              <button 
                className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredProducts;
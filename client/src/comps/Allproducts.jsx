import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart, FaEye } from 'react-icons/fa';
import OneProduct  from './OneProduct.jsx';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product/getall');
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleViewAll = () => {
    setVisibleProducts(products.length);
  };

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <div className="w-full p-6">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-8">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="w-6 h-12 bg-red-600 rounded"></div>
              <div className="text-red-600 text-xl font-semibold font-['Poppins']">Our Products</div>
            </div>
            <div className="text-black text-3xl font-bold font-['Inter'] leading-tight tracking-wide">Explore Our Products</div>
          </div>
          <div className="flex gap-4 mt-4 lg:mt-0">
            <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
            <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="overflow-y-auto h-[calc(100vh-200px)] w-full max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.slice(0, visibleProducts).map((product) => (
                <div key={product.id} className="flex flex-col items-start bg-white rounded-lg shadow-lg p-2">
                  <div className="relative w-full h-32 bg-neutral-100 rounded-lg overflow-hidden">
                    <div className="absolute top-2 right-2 flex gap-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                        <FaHeart className="text-red-500 text-xs" />
                      </div>
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                        <FaEye className="text-blue-500 text-xs" />
                      </div>
                    </div>
                    <div className="flex justify-center items-center h-full">
                      <img className="w-full h-full object-cover rounded-lg" src={product.images && product.images[0] ? product.images[0].imageurl : 'https://via.placeholder.com/150x150'} alt={product.name} onClick={() => handleImageClick(product)} />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 mt-2">
                    <div className="text-black text-sm font-medium">{product.name}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-red-500 text-sm font-semibold">${product.price}</div>
                      <div className="text-gray-600 text-xs">({product.reviewsCount || 0} reviews)</div>
                    </div>
                  </div>
                  <OneProduct el={product}/>
                </div>

              ))}
            </div>
          </div>
        </div>
        {selectedProduct && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-lg w-full max-w-4xl">
            <h2 className="text-2xl font-semibold mb-4">{selectedProduct.name}</h2>
            <p className="text-gray-700 mb-2"><strong>Description:</strong> {selectedProduct.description}</p>
            <p className="text-gray-700 mb-2"><strong>Category:</strong> {selectedProduct.categorie}</p>
            <p className="text-gray-700 mb-2"><strong>Stock:</strong> {selectedProduct.stock}</p>
          </div>
        )}
      </div>
      <div className="px-12 py-4 bg-red-600 rounded-full flex justify-center items-center gap-2.5 mt-8 shadow-md">
        <button className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal" onClick={handleViewAll}>View All Products</button>
      </div>
    </div>
  );
};

export default AllProducts;

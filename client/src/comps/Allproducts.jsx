import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart, FaEye,FaArrowRight,FaArrowLeft } from 'react-icons/fa';
import OneProduct from './OneProduct.jsx';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product/getall');
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

  const handleAddToCart = (product) => {
    // Implement add to cart functionality here
    console.log(`Added ${product.name} to cart`);
  };

  const handleProductUpdate = (updatedProduct) => {
    setProducts(products.map(p => p.productid === updatedProduct.productid ? updatedProduct : p));
  };

  const handleProductDelete = (productId) => {
    setProducts(products.filter(p => p.productid !== productId));
  };

  const toggleProductDetails = (product) => {
    if (selectedProduct && selectedProduct.productid === product.productid) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
    }
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
              <FaArrowLeft className="text-gray-600 w-5 h-5" />
            </div>
            <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
              <FaArrowRight className="text-gray-600 w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="overflow-y-auto h-[calc(100vh-200px)] w-full max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.slice(0, visibleProducts).map((product) => (
                <div key={product.productid} className="relative flex flex-col items-start bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative w-full h-64 bg-neutral-100 rounded">
                    <img 
                      className="w-full h-full object-cover cursor-pointer" 
                      src={product.images && product.images[0] ? product.images[0].imageurl : 'https://via.placeholder.com/150x150'} 
                      alt={product.name} 
                      onClick={() => handleImageClick(product)} 
                    />
                    <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100">
                      <button 
                        onClick={() => handleAddToCart(product)} 
                        className="text-white text-base font-medium font-['Poppins'] p-2 bg-black rounded-full hover:bg-gray-800 transition-colors">
                        Add To Cart
                      </button>
                    </div>
                    <div className="absolute top-2 right-2 flex gap-2">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <FaHeart className="text-black" />
                      </div>
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <FaEye className="text-black" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-4 gap-2 w-full">
                    <div 
                      className="text-black text-sm font-medium cursor-pointer hover:text-red-500"
                      onClick={() => toggleProductDetails(product)}
                    >
                      {product.name}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-red-500 text-base font-medium">${product.price}</div>
                      <div className="text-gray-600 text-sm">{product.reviewsCount}</div>
                    </div>
                    {selectedProduct && selectedProduct.productid === product.productid && (
                      <div className="mt-2 text-sm text-gray-600">
                        <p><strong>Description:</strong> {product.description}</p>
                        <p><strong>Category:</strong> {product.categorie}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                      </div>
                    )}
                  </div>
                  <OneProduct 
                    el={product} 
                    onUpdate={handleProductUpdate} 
                    onDelete={handleProductDelete}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button 
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleViewAll}
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
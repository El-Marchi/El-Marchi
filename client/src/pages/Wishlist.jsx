import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';



const ProductCard = ({ product, isWishlist }) => {


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px] relative group flex-shrink-0 w-[280px] transition-all duration-300 ease-in-out hover:scale-105">
      <div className="relative h-3/4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
            -{product.discount}%
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
            NEW
          </span>
        )}
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full">
          {isWishlist ? (
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.857-.68 1.662-1.196 2.385C18.268 16.057 14.477 19 10 19c-4.477 0-8.268-2.943-9.542-7 .274-.857.68-1.662 1.196-2.385z"></path>
            </svg>
          )}
        </button>
      </div>
      <div className="p-4 h-1/4">
        <h3 className="font-semibold text-lg mb-2 truncate">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-red-500 font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
            )}
          </div>
          {product.rating && (
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-1">({product.reviewCount})</span>
            </div>
          )}
        </div>
      </div>
      <button className="w-full bg-black text-white py-2 absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        Add To Cart
      </button>
    </div>
  );
};

const Wishlist = () => {
  const [isWishlist, setIsWishlist] = useState([]);

  const fetchWishlist = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/WhishList/${id}`);
    setIsWishlist(response.data);
    console.log(response.data);
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      fetchWishlist(decodedToken.userid);
    }
  }, []);
  const wishlistItems = [
    { id: 1, name: 'Gucci duffle bag', price: 960, originalPrice: 1160, image: 'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1611318903/6479939Y8KT-8990-001_Light.jpg', discount: 35 },
    { id: 2, name: 'RGB liquid CPU Cooler', price: 1960, image: 'https://m.media-amazon.com/images/I/71RVKzVJdVL._AC_SL1500_.jpg' },
    { id: 3, name: 'GP11 Shooter USB Gamepad', price: 550, image: 'https://m.media-amazon.com/images/I/61drpi3cYUL._AC_SL1000_.jpg' },
    { id: 4, name: 'Quilted Satin Jacket', price: 750, image: 'https://cdn-images.farfetch-contents.com/18/63/32/18/18633218_40572616_1000.jpg' },
    { id: 9, name: 'Leather Wallet', price: 75, image: 'https://fossil.scene7.com/is/image/FossilPartners/ML3681200_main?$sfcc_fos_medium$' },
    { id: 10, name: 'Wireless Earbuds', price: 159, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361' },
    { id: 11, name: 'Smartwatch', price: 299, image: 'https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg' },
    { id: 12, name: 'Portable Charger', price: 49, image: 'https://m.media-amazon.com/images/I/71UePVRBHSL._AC_SL1500_.jpg' },
  ];

  const justForYouItems = [
    { id: 5, name: 'ASUS FHD Gaming Laptop', price: 960, originalPrice: 1160, image: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SL1500_.jpg', discount: 35, rating: 5, reviewCount: 65 },
    { id: 6, name: 'IPS LCD Gaming Monitor', price: 1160, image: 'https://m.media-amazon.com/images/I/81Vt2NxNHwL._AC_SL1500_.jpg', rating: 5, reviewCount: 65 },
    { id: 7, name: 'HAVIT HV-G92 Gamepad', price: 560, image: 'https://m.media-amazon.com/images/I/61DScniVbvL._AC_SL1500_.jpg', rating: 5, reviewCount: 65, isNew: true },
    { id: 8, name: 'AK-900 Wired Keyboard', price: 200, image: 'https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SL1500_.jpg', rating: 5, reviewCount: 65 },
    { id: 13, name: 'Wireless Mouse', price: 39, image: 'https://m.media-amazon.com/images/I/61TrqYyA-ML._AC_SL1500_.jpg', rating: 4, reviewCount: 42 },
    { id: 14, name: 'External SSD', price: 89, image: 'https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg', rating: 4, reviewCount: 56 },
    { id: 15, name: 'Bluetooth Speaker', price: 79, image: 'https://m.media-amazon.com/images/I/71WNWRLJCsL._AC_SL1500_.jpg', rating: 4, reviewCount: 38, isNew: true },
    { id: 16, name: 'Mechanical Keyboard', price: 129, image: 'https://m.media-amazon.com/images/I/61+WYAjltpL._AC_SL1500_.jpg', rating: 5, reviewCount: 72 },
  ];

  return (
    <div>
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Wishlist ({wishlistItems.length})</h2>
          <button className="bg-white text-black px-4 py-2 rounded border border-black hover:bg-gray-100 transition-colors">
            Move All To Bag
          </button>
        </div>
        <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4">
          {wishlistItems.map(item => (
            <ProductCard key={item.id} product={item} isWishlist={true} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="bg-red-500 w-1 h-8 mr-2"></span>
            Just For You
          </h2>
          <button className="bg-white text-black px-4 py-2 rounded border border-black hover:bg-gray-100 transition-colors">
            See All
          </button>
        </div>
        <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4">
          {justForYouItems.map(item => (
            <ProductCard key={item.id} product={item} isWishlist={false} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Wishlist;
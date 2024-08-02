import React from 'react';

const Wishlist = () => {
  const products = [
    {
      id: 1,
      name: 'Gucci duffle bag',
      price: 960,
      originalPrice: 1160,
      image: 'https://www.shutterstock.com/image-photo/japan-june-11-2020-presentation-260nw-1757485868.jpg',
    },
    {
      id: 2,
      name: 'RGB liquid CPU Cooler',
      price: 1960,
      image: 'https://www.shutterstock.com/image-photo/japan-june-11-2020-presentation-260nw-1757485868.jpg',
    },
    {
      id: 3,
      name: 'GP11 Shooter USB Gamepad',
      price: 550,
      image: 'https://www.shutterstock.com/image-photo/japan-june-11-2020-presentation-260nw-1757485868.jpg',
    },
    {
      id: 4,
      name: 'Quilted Satin Jacket',
      price: 750,
      image: 'https://www.shutterstock.com/image-photo/japan-june-11-2020-presentation-260nw-1757485868.jpg',
    },
  ];

  const justForYou = [
    {
      id: 5,
      name: 'ASUS FHD Gaming Laptop',
      price: 960,
      originalPrice: 1160,
      image: 'https://www.shutterstock.com/image-photo/japan-june-11-2020-presentation-260nw-1757485868.jpg',
      rating: 65,
    },
    {
      id: 6,
      name: 'IPS LCD Gaming Monitor',
      price: 1160,
      image: 'https://www.shutterstock.com/image-photo/japan-june-11-2020-presentation-260nw-1757485868.jpg',
      rating: 65,
    },
    {
      id: 7,
      name: 'HAVIT HV-G92 Gamepad',
      price: 560,
      image: 'https://www.shutterstock.com/image-photo/japan-june-11-2020-presentation-260nw-1757485868.jpg',
      rating: 65,
    },
    {
      id: 8,
      name: 'AK-900 Wired Keyboard',
      price: 200,
      image: 'https://www.shutterstock.com/image-photo/japan-june-11-2020-presentation-260nw-1757485868.jpg',
      rating: 65,
    },
  ];

  const handleRemove = (id) => {
    console.log(`Remove product with id: ${id}`);
  };

  const handleView = (id) => {
    console.log(`View product with id: ${id}`);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="w-2 h-8 bg-red-500 mr-2"></div>
          <h2 className="text-2xl font-semibold">Wishlist</h2>
        </div>
        <button className="px-4 py-2 border border-gray-400 rounded">See All</button>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
              <div
                className="absolute top-2 right-2 bg-white p-1 rounded-full cursor-pointer"
                onClick={() => handleRemove(product.id)}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="px-4 py-2 bg-red-500 rounded">Add To Cart</button>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-medium">{product.name}</h2>
              <div className="flex items-center">
                <span className="text-red-500 text-lg">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <div className="w-2 h-8 bg-red-500 mr-2"></div>
          <h2 className="text-2xl font-semibold">Just For You</h2>
        </div>
        <button className="px-4 py-2 border border-gray-400 rounded">See All</button>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {justForYou.map((product) => (
          <div key={product.id} className="relative group">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
              <div
                className="absolute top-2 right-2 bg-white p-1 rounded-full cursor-pointer"
                onClick={() => handleView(product.id)}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.857-.68 1.662-1.196 2.385C18.268 16.057 14.477 19 10 19c-4.477 0-8.268-2.943-9.542-7 .274-.857.68-1.662 1.196-2.385z"></path>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="px-4 py-2 bg-red-500 rounded">Add To Cart</button>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-medium">{product.name}</h2>
              <div className="flex items-center">
                <span className="text-red-500 text-lg">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
                )}
              </div>
              {product.rating && (
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({product.rating})</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
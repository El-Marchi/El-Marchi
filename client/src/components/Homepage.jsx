import React, { useState, useEffect } from 'react';
import { FiPhone, FiMonitor, FiWatch, FiCamera, FiHeadphones, FiHeart } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from './Footer';
import Navbar from './Navbar';
import Photo from './photo.jsx'; 
import { useNavigate } from 'react-router-dom';


import axios from 'axios';

const HomePage = () => {
  
  return (
    <div className="e-commerce-homepage bg-white max-w-full overflow-x-hidden">
     
      <div className="flex flex-col md:flex-row">
        <Navigation />
        <div className="flex-1 p-4 overflow-x-hidden">
          <HeroCarousel />
          <CategoriesSection />
          <BestSellingProductsSection />
          <Photo />
          <ExploreProductsSection />
          <NewArrivalSection />
          <ServiceFeaturesSection />
        </div>
      </div>
      
    </div>
  );
};

const Navigation = () => (
  <nav className="w-64 bg-white border-r p-4">
    <ul className="space-y-2">
      {[
        "Woman's Fashion",
        "Men's Fashion",
        "Electronics",
        "Home & Lifestyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby's & Toys",
        "Groceries & Pets",
        "Health & Beauty"
      ].map((item, index) => (
        <li key={index} className="flex items-center justify-between hover:bg-gray-100 p-2 rounded-md transition duration-300">
          <span className="text-gray-700 hover:text-black">{item}</span>
          <span className="text-gray-400">›</span>
        </li>
      ))}
    </ul>
  </nav>
);

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907.jpg.og.jpg?202405161715', title: 'iPhone 14 Series', description: 'Up to 10% off Voucher' },
    { image: 'https://s.isanook.com/hi/0/ui/303/1516981/gal-1516981-20201125110042-476d797.jpg', title: 'MacBook Pro', description: 'Supercharged for pros' },
    { image: 'https://iphonewired.com/wp-content/uploads/2022/10/221004-51100-1.png', title: 'AirPods Pro', description: 'Magic like youve never heard' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-black text-white rounded-lg overflow-hidden mb-8">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img src="https://cdn.wallpapersafari.com/85/37/g2SpCY.jpg" alt='Apple entertainment' className="w-8 h-8 mb-2" />
                <h2 className="text-xl md:text-2xl font-semibold mb-2">{slide.title}</h2>
                <h1 className="text-2xl md:text-4xl font-bold mb-4">{slide.description}</h1>
                <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">Shop Now</button>
              </div>
              <img src={slide.image} alt={slide.title} className="w-full md:w-1/2 object-cover" />
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 text-black p-2 rounded-full">
        <FaChevronLeft />
      </button>
      <button onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 text-black p-2 rounded-full">
        <FaChevronRight />
      </button>
    </section>
  );
};

const CategoriesSection = () => {
  const categories = [
    { name: 'Electronics', icon: FiMonitor },
    { name: 'Accessories', icon: FiHeadphones },
    { name: 'Mobile Phones', icon: FiPhone },
    { name: 'Audio', icon: FiHeadphones },
    { name: 'Wearables', icon: FiWatch },
    { name: 'Health & Personal Care', icon: FiHeart },
    { name: 'Photography', icon: FiCamera },
  ];

  return (
    <section className="my-8 border border-gray-200 rounded-lg p-4 md:p-6">
      <div className="flex items-center mb-4">
        <div className="w-1 h-10 bg-red-500 mr-2"></div>
        <span className="text-red-500 font-semibold">Categories</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-4">
        {categories.map((category, i) => (
          <div 
            key={i} 
            className="p-2 md:p-4 text-center rounded-lg transition duration-300 flex flex-col items-center justify-center border border-gray-200 hover:border-red-500 hover:bg-red-50 group"
          >
            <category.icon className="w-6 h-6 md:w-10 md:h-10 mb-1 md:mb-2 text-gray-600 group-hover:text-red-500 transition duration-300" />
            <span className="text-xs md:text-sm font-medium group-hover:text-red-500 transition duration-300">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const BestSellingProductsSection = () => (
  <section className="mb-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">Best Selling Products</h2>
      <button className="bg-red-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-red-600 hover:shadow-lg">
        View All
      </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[
       
      {
        name: 'Fitness Tracker Pro',
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
        price: 149,
        rating: 4.6,
        reviews: 78
      },
      {
        name: 'Smartphone X1',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
        price: 799,
        rating: 4.8,
        reviews: 120
      },
        {
          name: 'RGB liquid CPU cooler',
          image: 'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
          price: 260,
          rating: 4.5,
          reviews: 65
        },
        {
          name: 'Wireless headphones',
          image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80',
          price: 260,
          rating: 4.5,
          reviews: 65
        },
        {
          name: 'Smart Home Hub',
          image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          price: 199,
          rating: 4.7,
          reviews: 92
        },
        {
          name: 'Portable Bluetooth Speaker',
          image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          price: 89,
          rating: 4.4,
          reviews: 105
        },
      ].map((product, i) => (
        <div key={i} className="border rounded-lg p-4 flex flex-col">
          <div className="h-48 mb-2 overflow-hidden rounded-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h3 className="font-semibold flex-grow">{product.name}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-red-500 font-medium">${product.price}</span>
            <div className="flex items-center">
              <span className="text-yellow-500">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
              <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ExploreProductsSection = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);

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

  const handleAddToCart = (product) => {
   
    console.log(`Added ${product.name} to cart`);
  };

  const handleImageClick = (product) => {
   
    console.log(`Clicked image of ${product.name}`);
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Explore Our Products</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.productid} className="border rounded-lg p-4">
            <div className="relative h-48 mb-2">
              <img 
                className="w-full h-full object-cover cursor-pointer rounded" 
                src={product.images && product.images[0] ? product.images[0].imageurl : 'https://via.placeholder.com/150x150'} 
                alt={product.name} 
                onClick={() => handleImageClick(product)} 
              />
              <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100">
                <button 
                  onClick={() => handleAddToCart(product)} 
                  className="text-white text-base font-medium font-['Poppins'] p-2 bg-black rounded-full hover:bg-gray-800 transition-colors mb-4">
                  Add To Cart
                </button>
              </div>
            </div>
            <h3 className="font-semibold">{product.name}</h3>
            <div className="flex justify-between items-center">
              <span className="text-red-500">${product.price}</span>
              <div className="flex items-center">
                <span className="text-yellow-500">★★★★☆</span>
                
              </div>
            </div>
            <button 
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-red-600 hover:shadow-lg"
          onClick={() => navigate('/all-products')}
        >
          View All Products
        </button>
      </div>
    </section>
  );
};

const NewArrivalSection = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">New Arrival</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 bg-gray-900 text-white p-6 rounded-lg shadow-md">
        <div>
          <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
          <p className="text-sm mb-4 text-gray-300">Black and White version of the PS5 coming out on sale.</p>
          <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <div>
            <h3 className="text-xl font-bold mb-1 text-gray-800">Women's Collections</h3>
            <p className="text-xs mb-2 text-gray-600">Featured woman collections that give you another vibe.</p>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <div>
            <h3 className="text-xl font-bold mb-1 text-gray-800">Speakers</h3>
            <p className="text-xs mb-2 text-gray-600">Amazon wireless speakers</p>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <div>
            <h3 className="text-xl font-bold mb-1 text-gray-800">Perfume</h3>
            <p className="text-xs mb-2 text-gray-600">GUCCI INTENSE OUD EDP</p>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServiceFeaturesSection = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t">
    {[
      { icon: '🚚', title: 'FREE AND FAST DELIVERY', description: 'Free delivery for all orders over $140' },
      { icon: '🎧', title: '24/7 CUSTOMER SERVICE', description: 'Friendly 24/7 customer support' },
      { icon: '🔒', title: 'MONEY BACK GUARANTEE', description: 'We return money within 30 days' },
    ].map((feature, i) => (
      <div key={i} className="text-center">
        <div className="text-4xl mb-2 bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto">{feature.icon}</div>
        <h3 className="font-bold mb-1">{feature.title}</h3>
        <p className="text-sm text-gray-600">{feature.description}</p>
      </div>
    ))}
  </section>
);

export default HomePage;
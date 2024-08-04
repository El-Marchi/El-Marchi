import React, { useState, useEffect } from 'react';
import { FiPhone, FiMonitor, FiWatch, FiCamera, FiHeadphones } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from './Footer';
import Navbar from './Navbar';
import Photo from './photo.jsx';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="e-commerce-homepage bg-white max-w-full overflow-x-hidden">
     
      <div className="flex flex-col md:flex-row">
        <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
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
    { name: 'Phones', icon: FiPhone },
    { name: 'Computers', icon: FiMonitor },
    { name: 'SmartWatch', icon: FiWatch },
    { name: 'Camera', icon: FiCamera },
    { name: 'HeadPhones', icon: FiHeadphones },
  ];

  return (
    <section className="my-8 border border-gray-200 rounded-lg p-4 md:p-6">
      <div className="flex items-center mb-4">
        <div className="w-1 h-10 bg-red-500 mr-2"></div>
        <span className="text-red-500 font-semibold">Categories</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
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
    <div className="grid grid-cols-4 gap-4">
      {['The north coat', 'Gucci duffle bag', 'RGB liquid CPU cooler', 'Small bookshelf'].map((product, i) => (
        <div key={i} className="border rounded-lg p-4">
          <div className="bg-gray-200 h-48 mb-2 rounded"></div>
          <h3 className="font-semibold">{product}</h3>
          <div className="flex justify-between items-center">
            <span className="text-red-500">$260</span>
            <div className="flex items-center">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="text-gray-500 text-sm">(65)</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);


const ExploreProductsSection = () => {
  const navigate = useNavigate();

  const handleViewAllProducts = () => {
    navigate('/all-products');
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Explore Our Products</h2>
      <div className="grid grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border rounded-lg p-4">
            <div className="bg-gray-200 h-48 mb-2 rounded"></div>
            <h3 className="font-semibold">Product Name</h3>
            <div className="flex justify-between items-center">
              <span className="text-red-500">$100</span>
              <div className="flex items-center">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-gray-500 text-sm">(65)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button 
          onClick={handleViewAllProducts}
          className="bg-red-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-red-600 hover:shadow-lg"
        >
          View All Products
        </button>
      </div>
    </section>
  );
};

const NewArrivalSection = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">New Arrival</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-black text-white p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">PlayStation 5</h3>
        <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
        <button className="mt-2 underline text-sm">Shop Now</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Women's Collections</h3>
          <p className="text-xs">Featured woman collections that give you another vibe.</p>
          <button className="mt-2 underline text-sm">Shop Now</button>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Speakers</h3>
          <p className="text-xs">Amazon wireless speakers</p>
          <button className="mt-2 underline text-sm">Shop Now</button>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg col-span-full">
          <h3 className="text-lg font-bold mb-2">Perfume</h3>
          <p className="text-xs">GUCCI INTENSE OUD EDP</p>
          <button className="mt-2 underline text-sm">Shop Now</button>
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
import React from 'react';

const Navbar = () => {
  return (
    <header className="font-sans">
      {/* Top banner */}
      <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex-1"></div>
        <div className="text-center flex-1">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <a href="/shop" className="font-bold underline">
            ShopNow
          </a>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <span>English</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b shadow-sm">
        <div className="text-2xl font-bold">Exclusive</div>
        
        <ul className="flex space-x-8">
          {['Home', 'Contact', 'About', 'Sign Up'].map((item, index) => (
            <li key={item}>
              <a 
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className={`hover:text-gray-600 ${index === 0 ? 'underline' : ''}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="pl-3 pr-10 py-2 bg-gray-100 rounded-md w-64 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <SearchIcon />
            </button>
          </div>
          <button>
            <HeartIcon />
          </button>
          <button>
            <CartIcon />
          </button>
        </div>
      </nav>
    </header>
  );
};

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
  </svg>
);

const CartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
);

export default Navbar;
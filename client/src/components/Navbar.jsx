import React, { useState } from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white shadow-md">
      {/* Top Header */}
      <div className="w-full h-12 px-32 py-3 bg-black flex justify-end items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <div className="text-neutral-50 text-sm font-normal font-poppins leading-tight">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </div>
            <div className="text-center text-neutral-50 text-sm font-semibold font-poppins underline leading-normal cursor-pointer">
              ShopNow
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="text-neutral-50 text-sm font-normal font-poppins leading-tight">English</div>
            <div className="w-6 h-6 px-1.5 py-2 flex justify-center items-center">
              <FaAngleDown className="text-neutral-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="h-16 flex justify-between items-center px-32 bg-white shadow-md">
        <div className="flex items-center gap-40">
          <div className="w-28 h-6 flex justify-center items-center">
            <div className="text-black text-2xl font-bold font-inter leading-normal tracking-wide">Exclusive</div>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex-col items-center">
              <div className="text-center text-black text-base font-normal font-poppins leading-normal cursor-pointer">Home</div>
              <div className="w-12 h-px opacity-50 flex justify-center items-center">
                <div className="w-12 h-px border border-black"></div>
              </div>
            </div>
            <div className="w-16 h-6 flex justify-center items-center">
              <div className="text-center text-black text-base font-normal font-poppins leading-normal cursor-pointer">Contact</div>
            </div>
            <div className="w-12 h-6 flex justify-center items-center">
              <div className="text-center text-black text-base font-normal font-poppins leading-normal cursor-pointer">About</div>
            </div>
            <div className="w-16 h-6 flex justify-center items-center">
              <div className="text-center text-black text-base font-normal font-poppins leading-normal cursor-pointer">Sign Up</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="pl-5 pr-3 py-1.5 bg-neutral-100 rounded flex items-center gap-2.5">
            <div className="opacity-50 text-black text-xs font-normal font-poppins leading-none">What are you looking for?</div>
            <FaSearch className="text-black" />
          </div>
          <div className="flex items-center gap-4">
            <FaHeart className="text-black w-6 h-6 cursor-pointer" />
            <div className="relative cursor-pointer">
              <FaShoppingCart className="text-black w-6 h-6" />
              <div className="w-4 h-4 absolute top-0 right-0 bg-red-500 rounded-full flex justify-center items-center">
                <div className="text-neutral-50 text-xs font-normal font-poppins leading-none">2</div>
              </div>
            </div>
            <div className="relative cursor-pointer" onClick={toggleDropdown}>
              <FaUser className="text-black w-6 h-6" />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-10">
                  <div className="flex flex-col p-4">
                    <button className="text-left text-black text-sm font-normal font-poppins leading-tight hover:bg-gray-100 p-2 rounded">Login</button>
                    <button className="text-left text-black text-sm font-normal font-poppins leading-tight hover:bg-gray-100 p-2 rounded">Profile</button>
                    <button className="text-left text-black text-sm font-normal font-poppins leading-tight hover:bg-gray-100 p-2 rounded">Logout</button>
                    <button className="text-left text-black text-sm font-normal font-poppins leading-tight hover:bg-gray-100 p-2 rounded">Wishlist</button>
                    <button className="text-left text-black text-sm font-normal font-poppins leading-tight hover:bg-gray-100 p-2 rounded">Cart</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
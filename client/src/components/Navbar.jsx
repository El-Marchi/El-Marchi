import React, { useState } from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  return (
    <div>
      {/* Top Header */}
      <div className="TopHeader w-full h-12 pl-96 pr-32 py-3 bg-black flex justify-end items-center">
        <div className="Frame746 flex justify-between items-center w-full">
          <div className="Frame555 flex items-center gap-2">
            <div className="SummerSaleForAllSwimSuitsAndFreeExpressDeliveryOff50 text-neutral-50 text-sm font-normal font-['Poppins'] leading-tight">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </div>
            <div className="Shopnow text-center text-neutral-50 text-sm font-semibold font-['Poppins'] underline leading-normal cursor-pointer">
              ShopNow
            </div>
          </div>
          <div className="Frame549 flex items-center gap-1">
            <div className="English text-neutral-50 text-sm font-normal font-['Poppins'] leading-tight">English</div>
            <div className="Dropdown w-6 h-6 px-1.5 py-2 flex justify-center items-center">
              <FaAngleDown className="text-neutral-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="Header h-16 flex justify-between items-center px-32 bg-white shadow-md">
        <div className="Frame556 flex items-center gap-40">
          <div className="Logo w-28 h-6 flex justify-center items-center">
            <div className="Exclusive text-black text-2xl font-bold font-['Inter'] leading-normal tracking-wide">Exclusive</div>
          </div>
          <div className="Frame554 flex items-center gap-12">
            <div className="Header flex-col items-center">
              <div className="Home text-center text-black text-base font-normal font-['Poppins'] leading-normal cursor-pointer">Home</div>
              <div className="Underline w-12 h-px opacity-50 flex justify-center items-center">
                <div className="Line1 w-12 h-px border border-black"></div>
              </div>
            </div>
            <div className="Header w-16 h-6 flex justify-center items-center">
              <div className="Contact text-center text-black text-base font-normal font-['Poppins'] leading-normal cursor-pointer">Contact</div>
            </div>
            <div className="Header w-12 h-6 flex justify-center items-center">
              <div className="About text-center text-black text-base font-normal font-['Poppins'] leading-normal cursor-pointer">About</div>
            </div>
            <div className="Header w-16 h-6 flex justify-center items-center">
              <div className="SignUp text-center text-black text-base font-normal font-['Poppins'] leading-normal cursor-pointer">Sign Up</div>
            </div>
          </div>
        </div>
        <div className="Frame552 flex items-center gap-6">
          <div className="SearchComponentSet pl-5 pr-3 py-1.5 bg-neutral-100 rounded flex items-center gap-2.5">
            <div className="WhatAreYouLookingFor opacity-50 text-black text-xs font-normal font-['Poppins'] leading-none">What are you looking for?</div>
            <FaSearch className="text-black" />
          </div>
          <div className="Frame551 flex items-center gap-4">
            <FaHeart className="text-black w-6 h-6 cursor-pointer" />
            <div className="Cart1WithBuy relative cursor-pointer">
              <FaShoppingCart className="text-black w-6 h-6" />
              <div className="Group1000005931 w-4 h-4 absolute top-0 right-0 bg-red-500 rounded-full flex justify-center items-center">
                <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-none">2</div>
              </div>
            </div>
            <div className="User relative cursor-pointer" onClick={toggleDropdown}>
              <FaUser className="text-neutral-50 w-8 h-8 bg-red-500 rounded-full p-2" />
              {isDropdownOpen && (
                <div className="AccountDropdown absolute right-0 mt-2 w-56 bg-white rounded shadow-lg">
                  <div className="Frame773 flex flex-col p-4">
                    <div className="Frame769 flex items-center gap-4 mb-2">
                      <FaUser className="text-black w-6 h-6" />
                      <div className="ManageMyAccount text-black text-sm font-normal font-['Poppins'] leading-tight">Manage My Account</div>
                    </div>
                    <div className="Frame770 flex items-center gap-4 mb-2">
                      <FaShoppingCart className="text-black w-6 h-6" />
                      <div className="MyOrder text-black text-sm font-normal font-['Poppins'] leading-tight">My Order</div>
                    </div>
                    <div className="Frame771 flex items-center gap-4 mb-2">
                      <FaRegStar className="text-black w-6 h-6" />
                      <div className="MyCancellations text-black text-sm font-normal font-['Poppins'] leading-tight">My Cancellations</div>
                    </div>
                    <div className="Frame773 flex items-center gap-4 mb-2">
                      <FaStar className="text-black w-6 h-6" />
                      <div className="MyReviews text-black text-sm font-normal font-['Poppins'] leading-tight">My Reviews</div>
                    </div>
                    <div className="Frame772 flex items-center gap-4">
                      <FaAngleDown className="text-black w-6 h-6 transform rotate-180" />
                      <div className="Logout text-black text-sm font-normal font-['Poppins'] leading-tight">Logout</div>
                    </div>
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
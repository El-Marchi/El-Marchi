import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Exclusive Column */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Exclusive</h2>
            <p className="mb-2">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="bg-transparent border-b p-2 flex-grow" />
              <button className="ml-2"><FaArrowRight /></button>
            </div>
          </div>

          {/* Support Column */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Support</h2>
            <p>111 Bijoy sarani, Dhaka,</p>
            <p>DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Account Column */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Account</h2>
            <ul>
              <li className="mb-2">My Account</li>
              <li className="mb-2">Login / Register</li>
              <li className="mb-2">Cart</li>
              <li className="mb-2">Wishlist</li>
              <li className="mb-2">Shop</li>
            </ul>
          </div>

          {/* Quick Link Column */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Link</h2>
            <ul>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms Of Use</li>
              <li className="mb-2">FAQ</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>

          {/* Download App Column */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Download App</h2>
            <p className="mb-2">Save $3 with App New User Only</p>
            <div className="flex space-x-4 mb-4">
              <div className="w-24 h-24 bg-gray-300 flex items-center justify-center">
                {/* Placeholder for QR Code */}
                <p className="text-black text-center">QR Code</p>
              </div>
              <div className="space-y-2">
                <img src="/path-to-google-play-badge.png" alt="Google Play" className="h-10" />
                <img src="/path-to-app-store-badge.png" alt="App Store" className="h-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-8">
          <FaFacebook className="text-2xl" />
          <FaTwitter className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaLinkedin className="text-2xl" />
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p>© Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
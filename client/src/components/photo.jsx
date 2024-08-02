import React from 'react';
import logo from "../images/JblBoombox2Hero020X111.webp"

const Photo = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-3xl flex items-center justify-between">
      {/* Modern background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%,transparent)] bg-[length:100px_100px]"></div>
      
      <div className="relative z-10 flex flex-col gap-4">
        <p className="text-green-500 text-sm font-semibold">Enhance Your</p>
        <h2 className="text-2xl font-bold">Music Experience</h2>
        <div className="flex gap-2">
          {['23', '05', '59', '35'].map((num, index) => (
            <div key={index} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
              {num}
            </div>
          ))}
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold w-max">
          Buy Now!
        </button>
      </div>
      <div className="relative z-10 w-64 h-48">
        {/* Speaker design */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-lg"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.1),transparent_70%)] rounded-full"></div>
        <div className="absolute inset-0 border border-gray-700 opacity-50 rounded-full"></div>
        <img
          src={logo}
          alt="JBL Speaker"
          className="w-full h-full object-contain p-4 relative z-10"
        />
      </div>
    </div>
  );
};

export default Photo;
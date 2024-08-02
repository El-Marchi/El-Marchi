import React, { useState } from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Make sure to import Link
import 'tailwindcss/tailwind.css'

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [image,setImage]=useState("https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp")

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="ProductDetailsPage container mx-auto p-4">
      {/* Roadmap */}
      <div className="Roadmap flex items-center gap-3 mb-4">
        <Link 
          to="/account" 
          className="Account text-black text-sm font-normal font-['Poppins'] leading-tight 
                     hover:text-red-500 transition-colors duration-300 
                     hover:underline cursor-pointer"
        >
          Account
        </Link>
        <div className="Line13 w-3.5 h-px origin-top-left rotate-[117.05deg] opacity-50 border border-black"></div>
        <Link 
          to="/gaming" 
          className="Gaming text-black text-sm font-normal font-['Poppins'] leading-tight 
                     hover:text-red-500 transition-colors duration-300 
                     hover:underline cursor-pointer"
        >
          Gaming
        </Link>
        <div className="Line16 w-3.5 h-px origin-top-left rotate-[117.05deg] opacity-50 border border-black"></div>
        <div className="ProductName text-black text-sm font-normal font-['Poppins'] leading-tight">Havic HV G-92 Gamepad</div>
      </div>

      <div className="flex">
        {/* Smaller Images */}
        <div className="flex flex-col gap-4">
          <div className="Frame895 w-44 h-36 bg-neutral-100 rounded flex justify-center items-center hover:shadow-lg transition-shadow duration-300">
            <img className="Image57 w-32 h-28" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="Thumbnail 1" onClick={()=>setImage("https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp")} />
          </div>
          <div className="Frame896 w-44 h-36 bg-neutral-100 rounded flex justify-center items-center hover:shadow-lg transition-shadow duration-300">
            <img className="Image58 w-28 h-24" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="Thumbnail 2" onClick={()=>setImage("https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg")} />
          </div>
          <div className="Frame897 w-44 h-36 bg-neutral-100 rounded flex justify-center items-center hover:shadow-lg transition-shadow duration-300">
            <img className="Image61 w-32 h-24" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="Thumbnail 3" onClick={()=>setImage("https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg")} />
          </div>
          <div className="Frame919 w-44 h-36 bg-neutral-100 rounded flex justify-center items-center hover:shadow-lg transition-shadow duration-300">
            <img className="Image59 w-32 h-28" src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" alt="Thumbnail 4" onClick={()=>setImage("https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg")} />
          </div>
        </div>

        {/* Main Image */}
        <div className="Frame894 flex-1 bg-neutral-100 rounded flex justify-center items-center mx-4">
          <img className="Image63 w-96 h-80 object-contain" src={image} alt="Product" />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <div className="HavicHvG92Gamepad text-black text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">Havic HV G-92 Gamepad</div>
          <div className="flex items-center gap-2 mt-2">
            <div className="FourStar flex items-center">
              {/* Rating Div */}
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={rating}
                      onClick={() => handleRating(ratingValue)}
                      className="hidden"
                    />
                    <FaStar
                      className="text-yellow-500 cursor-pointer"
                      size={20}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                      color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    />
                  </label>
                );
              })}
            </div>
            <div className="150Reviews opacity-50 text-black text-sm font-normal font-['Poppins'] leading-tight">(150 Reviews)</div>
            <div className="Line17 w-4 h-px origin-top-left rotate-90 opacity-50 border border-black mx-2"></div>
            <div className="InStock opacity-60 text-green-500 text-sm font-normal font-['Poppins'] leading-tight">In Stock</div>
          </div>
          <div className="19200 text-black text-2xl font-normal font-['Inter'] leading-normal tracking-wide mt-4">$192.00</div>
          <div className="Playstation5ControllerSkinHighQualityVinylWithAirChannelAdhesiveForEasyBubbleFreeInstallMessFreeRemovalPressureSensitive text-black text-sm font-normal font-['Poppins'] leading-tight mt-4">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
          </div>
          <div className="Underline w-full h-px mt-4 opacity-50">
            <div className="Line1 w-full h-px border border-black"></div>
          </div>

          {/* Quantity Selector */}
          <div className="Frame926 flex items-center mt-4">
            <div className="Frame906 w-10 h-11 px-2 py-2.5 rounded-tl rounded-bl border border-black/50 flex justify-center items-center cursor-pointer" onClick={handleDecrement}>
              <div className="IconMinus self-stretch grow shrink basis-0 px-1 justify-center items-center inline-flex">-</div>
            </div>
            <div className="Frame908 h-11 py-2 border-t border-b border-black/50 flex justify-center items-center">
              <div className="text-black text-xl font-medium font-['Poppins'] leading-7">{quantity}</div>
            </div>
            <div className="Frame907 w-10 h-11 px-2 py-2.5 bg-red-500 rounded-tr rounded-br flex justify-center items-center cursor-pointer" onClick={handleIncrement}>
              <div className="IconPlus self-stretch grow shrink basis-0 p-1 justify-center items-center inline-flex">+</div>
            </div>
          </div>

          {/* Buy Now, Add to Cart, and Add to Wishlist Buttons */}
          <div className="flex items-center mt-4">
            <button className="Button px-12 py-2.5 bg-red-500 rounded text-neutral-50 text-base font-medium font-['Poppins'] leading-normal cursor-pointer">Buy Now</button>
            <button className="Button px-12 py-2.5 bg-blue-500 rounded text-neutral-50 text-base font-medium font-['Poppins'] leading-normal cursor-pointer ml-4">Add to Cart</button>
            <button className="Button px-4 py-2.5 bg-gray-200 rounded text-black text-base font-medium font-['Poppins'] leading-normal cursor-pointer ml-4 flex items-center">
              <FaHeart className="mr-2" /> Add to Wishlist
            </button>
          </div>

          {/* Delivery and Return Information */}
          <div className="Frame911 w-full h-44 mt-4 rounded border border-black/50 p-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="IconDelivery w-10 h-10 relative" />
              <div className="flex flex-col">
                <div className="FreeDelivery text-black text-base font-medium font-['Poppins'] leading-normal">Free Delivery</div>
                <div className="EnterYourPostalCodeForDeliveryAvailability text-black text-xs font-medium font-['Poppins'] underline leading-none">Enter your postal code for Delivery Availability</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="IconReturn w-10 h-10 relative" />
              <div className="flex flex-col">
                <div className="ReturnDelivery text-black text-base font-medium font-['Poppins'] leading-normal">Return Delivery</div>
                <div className="Free30DaysDeliveryReturnsDetails">
                  <span style={{ color: 'black', fontSize: '12px', fontWeight: '500', fontFamily: 'Poppins', lineHeight: 'none' }}>Free 30 Days Delivery Returns. </span>
                  <span style={{ color: 'black', fontSize: '12px', fontWeight: '500', fontFamily: 'Poppins', textDecoration: 'underline', lineHeight: 'none' }}>Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="Frame925 mt-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="CategoryRectangle w-5 h-7 rounded bg-red-500"></div>
          <div className="RelatedItems text-black text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">Related Items</div>
        </div>
        <div className="flex gap-6">
          {[
            'https://www.shutterstock.com/image-photo/japan-june-11-2020-presentation-260nw-1757485868.jpg',
            'https://www.shutterstock.com/image-photo/japan-june-11-2020-presentation-260nw-1757485868.jpg',
            'https://www.shutterstock.com/image-photo/japan-june-11-2020-presentation-260nw-1757485868.jpg',
            'https://www.shutterstock.com/image-photo/japan-june-11-2020-presentation-260nw-1757485868.jpg'
          ].map((src, index) => (
            <div key={index} className="Frame897 w-44 h-36 bg-neutral-100 rounded flex justify-center items-center relative group">
              <img className="Image59 w-32 h-28 object-cover" src={src} alt={`Related Item ${index + 1}`} />
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full py-2 bg-red-500 text-white text-sm rounded-b-lg shadow-md hover:bg-red-600 transition-colors duration-300">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
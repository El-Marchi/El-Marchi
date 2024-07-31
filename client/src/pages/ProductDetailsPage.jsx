import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="ProductDetailsPage container mx-auto p-4">
      {/* Roadmap */}
      <div className="Roadmap flex items-center gap-3 mb-4">
        <div className="Account opacity-50 text-black text-sm font-normal font-['Poppins'] leading-tight">Account</div>
        <div className="Line13 w-3.5 h-px origin-top-left rotate-[117.05deg] opacity-50 border border-black"></div>
        <div className="Nothing opacity-50 text-black text-sm font-normal font-['Poppins'] leading-tight">Gaming</div>
        <div className="Line16 w-3.5 h-px origin-top-left rotate-[117.05deg] opacity-50 border border-black"></div>
        <div className="Nothing text-black text-sm font-normal font-['Poppins'] leading-tight">Havic HV G-92 Gamepad</div>
      </div>

      <div className="flex">
        {/* Smaller Images */}
        <div className="flex flex-col gap-4">
          <div className="Frame895 w-44 h-36 bg-neutral-100 rounded flex justify-center items-center">
            <img className="Image57 w-32 h-28" src="https://via.placeholder.com/121x114" alt="Thumbnail 1" />
          </div>
          <div className="Frame896 w-44 h-36 bg-neutral-100 rounded flex justify-center items-center">
            <img className="Image58 w-28 h-24" src="https://via.placeholder.com/112x97" alt="Thumbnail 2" />
          </div>
          <div className="Frame897 w-44 h-36 bg-neutral-100 rounded flex justify-center items-center">
            <img className="Image61 w-32 h-24" src="https://via.placeholder.com/134x94" alt="Thumbnail 3" />
          </div>
          <div className="Frame919 w-44 h-36 bg-neutral-100 rounded flex justify-center items-center">
            <img className="Image59 w-32 h-28" src="https://via.placeholder.com/122x106" alt="Thumbnail 4" />
          </div>
        </div>

        {/* Main Image */}
        <div className="Frame894 flex-1 bg-neutral-100 rounded flex justify-center items-center mx-4">
          <img className="Image63 w-96 h-80" src="https://via.placeholder.com/446x315" alt="Product" />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <div className="HavicHvG92Gamepad text-black text-2xl font-semibold font-['Inter'] leading-normal tracking-wide">Havic HV G-92 Gamepad</div>
          <div className="flex items-center gap-2 mt-2">
            <div className="FourStar flex items-center">
              {/* Rating Div */}
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaRegStar className="text-yellow-500" />
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

          {/* Buy Now Button */}
          <div className="flex items-center mt-4">
            <div className="Button px-12 py-2.5 bg-red-500 rounded text-neutral-50 text-base font-medium font-['Poppins'] leading-normal cursor-pointer">Buy Now</div>
            <div className="Frame904 w-10 h-10 p-1 ml-4 rounded border border-black/50 flex justify-center items-center cursor-pointer">
              <div className="Wishlist grow shrink basis-0 self-stretch px-1.5 pt-1.5 pb-2 justify-center items-center inline-flex" />
            </div>
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
          <div className="Frame897 w-44 h-36 bg-neutral-100 rounded flex justify-center items-center">
            <img className="Image59 w-32 h-28" src="https://via.placeholder.com/122x106" alt="Related Item 1" />
          </div>
          <div className="Frame897 w-44 h-36 bg-neutral-100 rounded flex justify-center items-center">
            <img className="Image60 w-32 h-28" src="https://via.placeholder.com/121x114" alt="Related Item 2" />
          </div>
          <div className="Frame898 w-44 h-36 bg-neutral-100 rounded flex justify-center items-center">
            <img className="Image61 w-32 h-28" src="https://via.placeholder.com/134x94" alt="Related Item 3" />
          </div>
          <div className="Frame899 w-44 h-36 bg-neutral-100 rounded flex justify-center items-center">
            <img className="Image62 w-32 h-28" src="https://via.placeholder.com/122x106" alt="Related Item 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
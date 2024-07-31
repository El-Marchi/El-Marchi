import React from 'react';

const About = () => {
  return (
    <div className="AboutPage container mx-auto p-8">
      {/* Roadmap */}
      <div className="Roadmap flex items-center gap-2 mb-8">
        <div className="Account opacity-50 text-black text-sm font-normal font-['Poppins'] leading-tight">Home</div>
        <div className="Line13 w-3.5 h-px origin-top-left rotate-[117.05deg] border border-black/50"></div>
        <div className="Nothing text-black text-sm font-normal font-['Poppins'] leading-tight">About</div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        {/* Text Content */}
        <div className="w-full md:w-1/2 pr-8">
          <div className="OurStory text-black text-5xl font-semibold font-['Inter'] leading-10 tracking-widest mb-6">Our Story</div>
          <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed mb-4">
            Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </div>
          <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed">
            Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion.
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img className="w-full h-auto rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f" alt="Our Story" />
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="p-4 border border-gray-300 rounded-lg flex flex-col items-center shadow-md">
          <div className="text-3xl font-bold font-['Inter'] leading-loose tracking-wider">10.5k</div>
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Sellers active on our site</div>
        </div>
        <div className="p-4 bg-red-500 text-white rounded-lg flex flex-col items-center shadow-md">
          <div className="text-3xl font-bold font-['Inter'] leading-loose tracking-wider">33k</div>
          <div className="text-center text-base font-normal font-['Poppins'] leading-normal">Monthly Product Sale</div>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg flex flex-col items-center shadow-md">
          <div className="text-3xl font-bold font-['Inter'] leading-loose tracking-wider">45.5k</div>
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Customers active on our site</div>
        </div>
        <div className="p-4 border border-gray-300 rounded-lg flex flex-col items-center shadow-md">
          <div className="text-3xl font-bold font-['Inter'] leading-loose tracking-wider">25k</div>
          <div className="text-center text-black text-base font-normal font-['Poppins'] leading-normal">Annual gross sale on our site</div>
        </div>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-4 flex flex-col items-center">
          <img className="w-48 h-48 rounded-full mb-4 shadow-lg" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" alt="Tom Cruise" />
          <div className="text-black text-3xl font-medium font-['Inter'] leading-loose tracking-wider">Tom Cruise</div>
          <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Founder & Chairman</div>
          <div className="flex gap-4 mt-2">
            <div className="IconTwitter w-6 h-6 pr-0.5 justify-start items-center flex">
              <div className="Group w-7 h-6 relative">
              </div>
            </div>
            <div className="IconInstagram w-6 h-6 p-0.5 justify-center items-center flex">
              <div className="Group w-4 h-4 relative">
              </div>
            </div>
            <div className="IconLinkedin w-6 h-6 pl-0.5 pr-1 pt-0.5 pb-1 justify-center items-center flex" />
          </div>
        </div>
        <div className="p-4 flex flex-col items-center">
          <img className="w-48 h-48 rounded-full mb-4 shadow-lg" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" alt="Emma Watson" />
          <div className="text-black text-3xl font-medium font-['Inter'] leading-loose tracking-wider">Emma Watson</div>
          <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Managing Director</div>
          <div className="flex gap-4 mt-2">
            <div className="IconTwitter w-6 h-6 pr-0.5 justify-start items-center flex">
              <div className="Group w-7 h-6 relative">
              </div>
            </div>
            <div className="IconInstagram w-6 h-6 p-0.5 justify-center items-center flex">
              <div className="Group w-4 h-4 relative">
              </div>
            </div>
            <div className="IconLinkedin w-6 h-6 pl-0.5 pr-1 pt-0.5 pb-1 justify-center items-center flex" />
          </div>
        </div>
        <div className="p-4 flex flex-col items-center">
          <img className="w-48 h-48 rounded-full mb-4 shadow-lg" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" alt="Will Smith" />
          <div className="text-black text-3xl font-medium font-['Inter'] leading-loose tracking-wider">Will Smith</div>
          <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Product Designer</div>
          <div className="flex gap-4 mt-2">
            <div className="IconTwitter w-6 h-6 pr-0.5 justify-start items-center flex">
              <div className="Group w-7 h-6 relative">
              </div>
            </div>
            <div className="IconInstagram w-6 h-6 p-0.5 justify-center items-center flex">
              <div className="Group w-4 h-4 relative">
              </div>
            </div>
            <div className="IconLinkedin w-6 h-6 pl-0.5 pr-1 pt-0.5 pb-1 justify-center items-center flex" />
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-4 flex flex-col items-center">
          <div className="w-20 h-20 relative mb-4">
            <div className="Group1000005938 w-20 h-20 left-0 top-0 absolute">
              <div className="Ellipse6 w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
              <div className="Ellipse5 w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full" />
            </div>
            <div className="IconDelivery w-10 h-10 left-[20px] top-[20px] absolute" />
          </div>
          <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">FREE AND FAST DELIVERY</div>
          <div className="text-center text-black text-sm font-normal font-['Poppins'] leading-tight">Free delivery for all orders over $140</div>
        </div>
        <div className="p-4 flex flex-col items-center">
          <div className="w-20 h-20 relative mb-4">
            <div className="Group1000005938 w-20 h-20 left-0 top-0 absolute">
              <div className="Ellipse6 w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
              <div className="Ellipse5 w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full" />
            </div>
            <div className="IconCustomerService w-10 h-10 left-[20px] top-[20px] absolute" />
          </div>
          <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">24/7 CUSTOMER SERVICE</div>
          <div className="text-center text-black text-sm font-normal font-['Poppins'] leading-tight">Friendly 24/7 customer support</div>
        </div>
        <div className="p-4 flex flex-col items-center">
          <div className="w-20 h-20 relative mb-4">
            <div className="Group1000005938 w-20 h-20 left-0 top-0 absolute">
              <div className="Ellipse6 w-20 h-20 left-0 top-0 absolute opacity-30 bg-zinc-800 rounded-full" />
              <div className="Ellipse5 w-14 h-14 left-[11px] top-[11px] absolute bg-black rounded-full" />
            </div>
            <div className="IconSecure w-10 h-10 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
              <div className="ShieldTick w-10 h-10 relative">
              </div>
            </div>
          </div>
          <div className="text-black text-xl font-semibold font-['Poppins'] leading-7">MONEY BACK GUARANTEE</div>
          <div className="text-center text-black text-sm font-normal font-['Poppins'] leading-tight">We return money within 30 days</div>
        </div>
      </div>
    </div>
  );
}

export default About;
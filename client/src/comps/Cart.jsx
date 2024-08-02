import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ className = '' }) => {
  return (
    <div className={`cart ${className}`}>
      <section className="p-8">
        <div className="flex flex-col items-center gap-16">
          <div className="flex items-start gap-4 text-gray-500">
            <a href="#" className="text-gray-500">Home</a>
            <img className="h-3 w-1.5" loading="lazy" alt="" src="/line-13.svg" />
            <span>Cart</span>
            <img className="h-3 w-1.5" alt="" src="/line-14.svg" />
            <span className="hidden">Nothing</span>
            <img className="hidden h-3 w-1.5" alt="" src="/line-15.svg" />
            <span className="hidden">Nothing</span>
            <img className="hidden h-3 w-1.5" alt="" src="/line-16.svg" />
            <span className="hidden">Nothing</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-4 gap-4 font-medium text-lg border-b border-gray-200 pb-4">
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
              </div>
              <div className="grid grid-cols-4 gap-4 border-b border-gray-200 py-4">
                <div className="flex items-center gap-4">
                  <img className="h-20 w-20" loading="lazy" alt="" src="/g27cq4500x500-1@2x.png" />
                  <div>LCD Monitor</div>
                </div>
                <div>$650</div>
                <div className="flex items-center gap-4">
                  <button className="bg-gray-200 rounded px-2 py-1">-</button>
                  <span>01</span>
                  <button className="bg-gray-200 rounded px-2 py-1">+</button>
                </div>
                <div>$650</div>
                <button className="text-red-500 hover:text-red-700">
                  <img className="h-6 w-6" alt="" src="/iconcancel.svg" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-4 border-b border-gray-200 py-4">
                <div className="flex items-center gap-4">
                  <img className="h-20 w-20" loading="lazy" alt="" src="/g27cq4500x500-11@2x.png" />
                  <div>H1 Gamepad</div>
                </div>
                <div>$550</div>
                <div className="flex items-center gap-4">
                  <button className="bg-gray-200 rounded px-2 py-1">-</button>
                  <span>02</span>
                  <button className="bg-gray-200 rounded px-2 py-1">+</button>
                </div>
                <div>$1100</div>
                <button className="text-red-500 hover:text-red-700">
                  <img className="h-6 w-6" alt="" src="/iconcancel-1.svg" />
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Return To Shop</button>
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Update Cart</button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-4">
              <input className="bg-transparent border border-gray-300 text-white placeholder-gray-500 p-2 rounded" placeholder="Coupon Code" type="text" />
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Apply Coupon</button>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="text-2xl font-medium">Cart Total</div>
              <div className="flex flex-col gap-4 text-lg">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>$1750</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between border-t border-gray-300 pt-4">
                  <span>Total:</span>
                  <span>$1750</span>
                </div>
                <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-black text-white p-16">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold">Exclusive</h3>
              <div className="text-xl font-semibold mt-2">Subscribe</div>
              <div className="text-base mt-1">Get 10% off your first order</div>
            </div>
            <div className="flex items-center gap-4 border border-white p-2 rounded">
              <input className="bg-transparent text-white placeholder-opacity-60 p-2 rounded" placeholder="Enter your email" type="text" />
              <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                <img className="w-6 h-6" alt="" src="/iconsend.svg" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-12 justify-center">
            <div className="flex flex-col items-center gap-4 text-xl font-medium">
              <div>Support</div>
              <div className="text-base text-center">
                <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-xl font-medium">
              <div>Account</div>
              <div className="flex flex-col gap-2 text-base">
                <a href="#">My Account</a>
                <a href="#">Login / Register</a>
                <a href="#">Cart</a>
                <a href="#">Wishlist</a>
                <a href="#">Shop</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-xl font-medium">
              <div>Quick Links</div>
              <div className="flex flex-col gap-2 text-base">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms Of Use</a>
                <a href="#">FAQ</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 text-xl font-medium">
              <div>Download App</div>
              <div className="flex items-center gap-4">
                <img className="w-20 h-20" loading="lazy" alt="" src="/qr-code@2x.png" />
                <div className="flex flex-col items-center">
                  <img className="w-28 h-10 mb-2" loading="lazy" alt="" src="/googleplay.svg" />
                  <img className="w-28 h-10" loading="lazy" alt="" src="/appstore@2x.png" />
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <img className="w-6 h-6" loading="lazy" alt="" src="/iconfacebook.svg" />
                <img className="w-6 h-6" loading="lazy" alt="" src="/icontwitter.svg" />
                <img className="w-6 h-6" loading="lazy" alt="" src="/iconinstagram.svg" />
                <img className="w-6 h-6" loading="lazy" alt="" src="/iconlinkedin.svg" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 opacity-60 mt-8">
            <img className="w-full" alt="" src="/underline-2.svg" />
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" alt="" src="/iconcopyright.svg" />
              <div className="text-base">Copyright Rimel 2022. All rights reserved</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Cart.propTypes = {
  className: PropTypes.string,
};

export default Cart;

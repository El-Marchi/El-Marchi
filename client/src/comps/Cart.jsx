import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer.jsx';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const Cart = ({ className = '' }) => {
  return (
    <div className={`cart ${className} min-h-screen bg-gray-100`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col gap-8">
          {/* Cart Items */}
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-4">Product</th>
                    <th className="text-right pb-4">Price</th>
                    <th className="text-right pb-4">Quantity</th>
                    <th className="text-right pb-4">Total</th>
                    <th className="text-right pb-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Product Row 1 */}
                  <tr className="border-b">
                    <td className="py-4">
                      <div className="flex items-center">
                        <img className="w-16 h-16 mr-4" src="https://via.placeholder.com/64" alt="LCD Monitor" />
                        <span className="font-semibold">LCD Monitor</span>
                      </div>
                    </td>
                    <td className="text-right py-4">$650</td>
                    <td className="text-right py-4">
                      <div className="flex items-center justify-end">
                        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                          <FaMinus />
                        </button>
                        <input className="mx-2 border text-center w-12" type="text" value="1" />
                        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td className="text-right py-4">$650</td>
                    <td className="text-right py-4">
                      <button className="text-red-500 focus:outline-none">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                  
                  {/* Product Row 2 */}
                  <tr className="border-b">
                    <td className="py-4">
                      <div className="flex items-center">
                        <img className="w-16 h-16 mr-4" src="https://via.placeholder.com/64" alt="H1 Gamepad" />
                        <span className="font-semibold">H1 Gamepad</span>
                      </div>
                    </td>
                    <td className="text-right py-4">$550</td>
                    <td className="text-right py-4">
                      <div className="flex items-center justify-end">
                        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                          <FaMinus />
                        </button>
                        <input className="mx-2 border text-center w-12" type="text" value="2" />
                        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td className="text-right py-4">$1100</td>
                    <td className="text-right py-4">
                      <button className="text-red-500 focus:outline-none">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Cart Actions */}
            <div className="flex justify-between items-center mb-8">
              <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300">
                Continue Shopping
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
                Update Cart
              </button>
            </div>
          </div>

          {/* Coupon and Cart Total */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Coupon Code */}
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Apply Coupon</h2>
                <div className="flex flex-col">
                  <input 
                    className="bg-gray-100 text-gray-800 placeholder-gray-500 p-3 rounded-lg mb-3 focus:outline-none" 
                    placeholder="Enter coupon code" 
                    type="text" 
                  />
                  <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Total */}
            <div className="md:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Cart Total</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$1750</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between mb-4">
                  <span className="font-semibold text-lg">Total</span>
                  <span className="font-semibold text-lg">$1750</span>
                </div>
                <button className="bg-red-500 text-white py-3 px-6 rounded-lg w-full hover:bg-red-600 transition duration-300 text-lg font-semibold">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

Cart.propTypes = {
  className: PropTypes.string,
};

export default Cart;
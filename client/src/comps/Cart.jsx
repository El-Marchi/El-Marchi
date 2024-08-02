import React, { useMemo } from 'react';
import PropTypes from "prop-types";

const Cart = ({ className = "" }) => {
  const buttonStyle = useMemo(() => ({
    position: 'relative',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    padding: '16px 48px',
    backgroundColor: 'transparent',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    whiteSpace: 'nowrap',
  }), []);

  const viewAllProductsStyle = useMemo(() => ({
    color: '#000',
  }), []);

  return (
    <div className={`cart ${className}`}>
      <section className="cart-inner p-8">
        <div className="roadmap-parent flex flex-col items-center gap-16">
          <div className="roadmap flex flex-row items-start gap-4">
            <a className="account text-gray-500">Home</a>
            <img className="roadmap-child h-3 w-1.5" loading="lazy" alt="" src="/line-13.svg" />
            <div className="nothing">Cart</div>
            <img className="roadmap-item h-3 w-1.5" alt="" src="/line-14.svg" />
            <div className="nothing1 hidden">Nothing</div>
            <img className="roadmap-inner hidden h-3 w-1.5" alt="" src="/line-15.svg" />
            <div className="nothing2 hidden">Nothing</div>
            <img className="line-icon hidden h-3 w-1.5" alt="" src="/line-16.svg" />
            <div className="nothing3 hidden">Nothing</div>
          </div>
          <div className="frame-parent flex flex-col items-center gap-8">
            <div className="cart-main-section-parent flex flex-col items-center gap-8">
              <div className="cart-main-section flex flex-row items-center gap-4">
                <div className="product">Product</div>
                <div className="price">Price</div>
                <div className="quantity">Quantity</div>
                <div className="subtotal">Subtotal</div>
              </div>
              <div className="cart-section flex flex-row items-center gap-4">
                <div className="monitor-cart-small-parent flex flex-row items-center gap-4">
                  <div className="monitor-cart-small">
                    <img className="g27cq4-500x500-1-icon h-20 w-20" loading="lazy" alt="" src="/g27cq4500x500-1@2x.png" />
                  </div>
                  <div className="lcd-monitor-wrapper">
                    <div className="lcd-monitor">LCD Monitor</div>
                  </div>
                </div>
                <div className="empty-item-wrapper">
                  <div className="empty-item">$650</div>
                </div>
                <div className="quantity-wrapper">
                  <div className="quantity1 flex flex-row items-center gap-4">
                    <div className="wrapper">
                      <div className="div">01</div>
                    </div>
                    <div className="drop-up-small-parent flex flex-col items-center gap-1">
                      <img className="drop-up-small-icon h-4 w-4" alt="" src="/dropupsmall@2x.png" />
                      <img className="drop-down-small-icon h-4 w-4" alt="" src="/dropdownsmall.svg" />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="div1">$650</div>
                </div>
                <img className="icon-cancel h-6 w-6" alt="" src="/iconcancel.svg" />
              </div>
              <div className="cart-section1 flex flex-row items-center gap-4">
                <div className="gamepad-cart-small-parent flex flex-row items-center gap-4">
                  <div className="gamepad-cart-small">
                    <img className="g92-2-500x500-1-icon h-20 w-20" loading="lazy" alt="" src="/g27cq4500x500-11@2x.png" />
                  </div>
                  <div className="lcd-monitor-container">
                    <div className="lcd-monitor1">H1 Gamepad</div>
                  </div>
                </div>
                <div className="frame">
                  <div className="div2">$550</div>
                </div>
                <div className="quantity-container">
                  <div className="quantity2 flex flex-row items-center gap-4">
                    <div className="frame-container">
                      <div className="frame-div">
                        <div className="div3">02</div>
                      </div>
                      <div className="drop-up-small-group flex flex-col items-center gap-1">
                        <img className="drop-up-small-icon1 h-4 w-4" alt="" src="/dropupsmall-1@2x.png" />
                        <img className="drop-down-small-icon1 h-4 w-4" alt="" src="/dropdownsmall-1.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper1">
                  <div className="div4">$1100</div>
                </div>
                <img className="icon-cancel1 h-6 w-6" alt="" src="/iconcancel-1.svg" />
              </div>
            </div>
            <div className="button-parent flex flex-row gap-4">
              <button className="button bg-red-500 text-white py-2 px-8 rounded hover:bg-red-600">
                <div className="view-all-products">Return To Shop</div>
              </button>
              <button className="button1 bg-red-500 text-white py-2 px-8 rounded hover:bg-red-600">
                <div className="view-all-products1">Update Cart</div>
              </button>
            </div>
          </div>
          <div className="instance-parent flex flex-col items-center gap-8">
            <div className="frame-parent1 flex flex-row items-center gap-4">
              <div className="coupon-code-wrapper">
                <input className="coupon-code bg-transparent text-white placeholder-opacity-40 p-2 rounded" placeholder="Coupon Code" type="text" />
              </div>
              <button className="button2 bg-red-500 text-white py-2 px-8 rounded hover:bg-red-600">
                <div className="view-all-products2">Apply Coupon</div>
              </button>
            </div>
            <div className="cart-total-parent flex flex-col items-center gap-4">
              <div className="cart-total text-2xl font-medium">Cart Total</div>
              <div className="subtotal-shipping-total-item-parent flex flex-col items-center gap-4">
                <div className="subtotal-shipping-total-item flex flex-row items-center gap-4">
                  <div className="subtotal1">Subtotal:</div>
                  <div className="div5">$1750</div>
                </div>
                <img className="underline-icon w-full" loading="lazy" alt="" src="/underline.svg" />
                <div className="subtotal-shipping-total-item1 flex flex-row items-center gap-4">
                  <div className="shipping">Shipping:</div>
                  <div className="free">Free</div>
                </div>
                <img className="underline-icon1 w-full" loading="lazy" alt="" src="/underline-1.svg" />
                <div className="subtotal-shipping-total-item2 flex flex-row items-center gap-4">
                  <div className="total">Total:</div>
                  <div className="div6">$1750</div>
                </div>
                <div className="button-wrapper flex justify-center">
                  <button className="button3 bg-red-500 text-white py-2 px-8 rounded hover:bg-red-600">
                    <div className="view-all-products3">Proceed to checkout</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer bg-black text-white p-16">
        <div className="footer-inner flex flex-col items-center gap-16">
          <div className="frame-parent2 flex flex-col items-center gap-8">
            <div className="frame-parent3 flex flex-col items-center gap-8">
              <div className="frame-parent4 flex flex-col items-center gap-4">
                <div className="logo-parent flex flex-col items-center gap-4">
                  <div className="logo">
                    <h3 className="exclusive text-2xl font-bold">Exclusive</h3>
                  </div>
                  <div className="subscribe text-xl font-medium">Subscribe</div>
                </div>
                <div className="get-10-off text-base">Get 10% off your first order</div>
              </div>
              <div className="send-mail flex items-center gap-4 border border-white p-2 rounded">
                <input className="enter-your-email bg-transparent text-white placeholder-opacity-40" placeholder="Enter your email" type="text" />
                <img className="icon-send w-6 h-6" alt="" src="/iconsend.svg" />
              </div>
            </div>
            <div className="support-parent flex flex-col items-center gap-4">
              <div className="support text-xl font-medium">Support</div>
              <div className="bijoy-sarani-dhaka-dh-1515-parent flex flex-col items-center gap-2">
                <div className="bijoy-sarani-dhaka">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
                <div className="exclusivegmailcom">exclusive@gmail.com</div>
                <div className="address-item">+88015-88888-9999</div>
              </div>
            </div>
            <div className="frame-parent5 flex flex-col items-center gap-4">
              <div className="account-parent flex flex-col items-center gap-4">
                <div className="account1 text-xl font-medium">Account</div>
                <div className="account-links-item flex flex-col items-center gap-2">
                  <div className="my-account">My Account</div>
                  <div className="login-register">Login / Register</div>
                  <div className="cart1">Cart</div>
                  <div className="wishlist">Wishlist</div>
                  <div className="shop">Shop</div>
                </div>
              </div>
              <div className="quick-link-parent flex flex-col items-center gap-4">
                <div className="quick-link text-xl font-medium">Quick Link</div>
                <div className="quick-links-item flex flex-col items-center gap-2">
                  <div className="privacy-policy">Privacy Policy</div>
                  <div className="terms-of-use">Terms Of Use</div>
                  <div className="faq">FAQ</div>
                  <div className="contact">Contact</div>
                </div>
              </div>
            </div>
            <div className="download-app-column-parent flex flex-col items-center gap-4">
              <div className="download-app-column flex flex-col items-center gap-4">
                <div className="download-app text-xl font-medium">Download App</div>
                <div className="save-3-with-app-new-user-only-parent flex flex-col items-center gap-2">
                  <div className="save-3-with text-xs opacity-70">Save $3 with App New User Only</div>
                  <div className="qr-code-parent flex items-center gap-2">
                    <img className="qr-code-icon w-20 h-20" loading="lazy" alt="" src="/qr-code@2x.png" />
                    <div className="app-store-icons flex flex-col items-center gap-1">
                      <img className="googleplay-icon w-28 h-10" loading="lazy" alt="" src="/googleplay.svg" />
                      <img className="appstore-icon w-28 h-10" loading="lazy" alt="" src="/appstore@2x.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="icon-facebook-parent flex gap-4">
                <img className="icon-facebook w-6 h-6" loading="lazy" alt="" src="/iconfacebook.svg" />
                <img className="icon-twitter w-6 h-6" loading="lazy" alt="" src="/icontwitter.svg" />
                <img className="icon-instagram w-6 h-6" loading="lazy" alt="" src="/iconinstagram.svg" />
                <img className="icon-linkedin w-6 h-6" loading="lazy" alt="" src="/iconlinkedin.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="underline-parent flex flex-col items-center gap-4 opacity-40">
          <img className="underline-icon2 w-full" alt="" src="/underline-2.svg" />
          <div className="copyright-content flex items-center gap-2">
            <img className="icon-copyright w-5 h-5" alt="" src="/iconcopyright.svg" />
            <div className="copyright-rimel-2022 text-base">Copyright Rimel 2022. All right reserved</div>
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
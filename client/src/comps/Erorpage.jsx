import React from 'react';
import PropTypes from "prop-types";

const ErrorPage = ({ className = "" }) => {
  return (
    <div className={`error ${className}`}>
      <section className="error-inner flex flex-col items-center justify-center p-8">
        <div className="frame-parent flex flex-col items-center gap-16">
          <div className="roadmap-wrapper flex flex-row items-start gap-4">
            <div className="roadmap flex flex-row items-start gap-4">
              <a className="account text-gray-500">Home</a>
              <img className="roadmap-child h-3 w-1.5" loading="lazy" alt="" src="/line-13.svg" />
              <div className="nothing">404 Error</div>
              <img className="roadmap-item h-3 w-1.5" alt="" src="/line-14.svg" />
              <div className="nothing1 hidden">Nothing</div>
              <img className="roadmap-inner hidden h-3 w-1.5" alt="" src="/line-15.svg" />
              <div className="nothing2 hidden">Nothing</div>
              <img className="line-icon hidden h-3 w-1.5" alt="" src="/line-16.svg" />
              <div className="nothing3 hidden">Nothing</div>
            </div>
          </div>
          <div className="frame-wrapper flex flex-col items-center gap-8">
            <div className="not-found-parent flex flex-col items-center gap-8">
              <div className="not-found text-4xl font-medium">404 Not Found</div>
              <div className="your-visited-page-not-found-y-wrapper flex flex-col items-center text-center">
                <div className="your-visited-page">Your visited page not found. You may go home page.</div>
              </div>
            </div>
          </div>
          <div className="button-wrapper flex justify-center">
            <button className="button bg-red-500 text-white py-2 px-8 rounded hover:bg-red-600">
              <div className="view-all-products">Back to home page</div>
            </button>
          </div>
        </div>
      </section>
      <footer className="footer bg-black text-white p-16">
        <div className="footer-top flex flex-col items-center gap-16">
          <div className="footer-columns flex flex-wrap justify-between gap-8">
            <div className="footer-column-one flex flex-col gap-4">
              <div className="footer-branding flex flex-col gap-4">
                <div className="logo">
                  <h3 className="exclusive text-2xl font-bold">Exclusive</h3>
                </div>
                <div className="subscribe text-xl font-medium">Subscribe</div>
              </div>
              <div className="get-10-off text-base">Get 10% off your first order</div>
              <div className="send-mail flex items-center gap-4 border border-white p-2 rounded">
                <input className="enter-your-email bg-transparent text-white placeholder-opacity-40" placeholder="Enter your email" type="text" />
                <img className="icon-send w-6 h-6" alt="" src="/iconsend.svg" />
              </div>
            </div>
            <div className="support-column flex flex-col gap-4">
              <div className="support text-xl font-medium">Support</div>
              <div className="support-address flex flex-col gap-2">
                <div className="bijoy-sarani-dhaka">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
                <div className="exclusivegmailcom">exclusive@gmail.com</div>
                <div className="div">+88015-88888-9999</div>
              </div>
            </div>
            <div className="account-column flex flex-col gap-4">
              <div className="account-links flex flex-col gap-4">
                <div className="account1 text-xl font-medium">Account</div>
                <div className="account-list flex flex-col gap-2">
                  <div className="my-account">My Account</div>
                  <div className="login-register">Login / Register</div>
                  <div className="cart">Cart</div>
                  <div className="wishlist">Wishlist</div>
                  <div className="shop">Shop</div>
                </div>
              </div>
              <div className="quick-links flex flex-col gap-4">
                <div className="quick-link text-xl font-medium">Quick Link</div>
                <div className="quick-links-list flex flex-col gap-2">
                  <div className="privacy-policy">Privacy Policy</div>
                  <div className="terms-of-use">Terms Of Use</div>
                  <div className="faq">FAQ</div>
                  <div className="contact">Contact</div>
                </div>
              </div>
            </div>
            <div className="download-app-column flex flex-col gap-4">
              <div className="download-app-content flex flex-col gap-4">
                <div className="download-app text-xl font-medium">Download App</div>
                <div className="app-info flex flex-col gap-1">
                  <div className="save-3-with text-xs opacity-70">Save $3 with App New User Only</div>
                  <div className="qr-code-parent flex items-center gap-2">
                    <img className="qr-code-icon w-20 h-20" loading="lazy" alt="" src="/qr-code@2x.png" />
                    <div className="app-store-buttons flex flex-col gap-1">
                      <img className="googleplay-icon w-28 h-10" loading="lazy" alt="" src="/googleplay.svg" />
                      <img className="appstore-icon w-28 h-10" loading="lazy" alt="" src="/appstore@2x.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-icons flex gap-4">
                <img className="icon-facebook w-6 h-6" loading="lazy" alt="" src="/iconfacebook.svg" />
                <img className="icon-twitter w-6 h-6" loading="lazy" alt="" src="/icontwitter.svg" />
                <img className="icon-instagram w-6 h-6" loading="lazy" alt="" src="/iconinstagram.svg" />
                <img className="icon-linkedin w-6 h-6" loading="lazy" alt="" src="/iconlinkedin.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom flex flex-col items-center gap-4 opacity-40">
          <img className="underline-icon w-full" loading="lazy" alt="" src="/underline.svg" />
          <div className="copyright-content-wrapper flex items-center gap-2">
            <img className="icon-copyright w-5 h-5" loading="lazy" alt="" src="/iconcopyright.svg" />
            <div className="copyright-rimel-2022 text-base">Copyright Rimel 2022. All right reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

ErrorPage.propTypes = {
  className: PropTypes.string,
};

export default ErrorPage;
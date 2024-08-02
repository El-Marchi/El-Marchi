import React from 'react';
import PropTypes from "prop-types";
import Footer from '../components/Footer.jsx';

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
      <Footer /> {Footer}
    </div>
  );
};

ErrorPage.propTypes = {
  className: PropTypes.string,
};

export default ErrorPage;
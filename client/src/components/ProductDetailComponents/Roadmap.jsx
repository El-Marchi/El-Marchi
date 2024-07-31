import PropTypes from "prop-types";

const Roadmap = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start relative gap-[30px] max-w-full text-left text-sm text-button font-title-14px-semibold mq450:flex-wrap ${className}`}
    >
      <div className="relative leading-[21px] text-gray inline-block min-w-[59px]">
        Account
      </div>
      <img
        className="h-[11.7px] w-1.5 absolute !m-[0] top-[4.6px] left-[71px] object-contain"
        loading="lazy"
        alt=""
        src="/line-13.svg"
      />
      <div className="relative leading-[21px] text-gray inline-block min-w-[57px]">
        Gaming
      </div>
      <img
        className="h-[11.7px] w-1.5 relative object-contain hidden z-[3]"
        alt=""
        src="/line-14.svg"
      />
      <div className="self-stretch w-[55px] relative leading-[21px] hidden opacity-[0.5] z-[4]">
        Product
      </div>
      <img
        className="h-[11.7px] w-1.5 relative object-contain hidden z-[5]"
        alt=""
        src="/line-14.svg"
      />
      <div className="self-stretch w-[68px] relative leading-[21px] hidden opacity-[0.5] z-[6]">
        View Cart
      </div>
      <img
        className="h-[11.7px] w-1.5 absolute !m-[0] top-[4.6px] left-[158px] object-contain"
        loading="lazy"
        alt=""
        src="/line-13.svg"
      />
      <div className="relative leading-[21px]">Havic HV G-92 Gamepad</div>
    </div>
  );
};

Roadmap.propTypes = {
  className: PropTypes.string,
};

export default Roadmap;

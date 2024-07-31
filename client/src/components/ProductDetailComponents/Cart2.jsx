import PropTypes from "prop-types";

const Cart2 = ({ className = "", gammaxxL240Argb1500x5001 }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px] text-left text-base text-button font-title-20px-semibold ${className}`}
    >
      <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
        <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
          <img
            className="w-[34px] h-[34px] relative"
            alt=""
            src="/fill-heart.svg"
          />
          <img
            className="w-[34px] h-[34px] relative"
            alt=""
            src="/fill-eye-4.svg"
          />
        </div>
        <div className="absolute top-[35px] left-[40px] w-[190px] h-[180px] overflow-hidden z-[1]">
          <img
            className="absolute top-[calc(50%_-_43px)] left-[calc(50%_-_95px)] w-[191px] h-[95px] object-cover"
            alt=""
            src={gammaxxL240Argb1500x5001}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <div className="relative leading-[24px] font-medium">
          RGB liquid CPU Cooler
        </div>
        <div className="flex flex-row items-start justify-start gap-[12px] text-button2">
          <div className="relative leading-[24px] font-medium inline-block min-w-[37px] whitespace-nowrap">
            $160
          </div>
          <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-600 inline-block min-w-[36px] whitespace-nowrap">
            $170
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-600">
          <div className="flex flex-row items-start justify-start">
            <img
              className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
              alt=""
              src="/vector-1.svg"
            />
            <img
              className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
              alt=""
              src="/vector-1.svg"
            />
            <img
              className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
              alt=""
              src="/vector-1.svg"
            />
            <img
              className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
              alt=""
              src="/vector-1.svg"
            />
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              alt=""
              src="/starhalffilled.svg"
            />
          </div>
          <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
            (65)
          </div>
        </div>
      </div>
    </div>
  );
};

Cart2.propTypes = {
  className: PropTypes.string,
  gammaxxL240Argb1500x5001: PropTypes.string,
};

export default Cart2;

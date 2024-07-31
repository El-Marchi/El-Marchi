import { useMemo } from "react";
import DiscountPercent from "./DiscountPercent";
import FiveStar from "./FiveStar";
import PropTypes from "prop-types";

const CartWithFlatDiscount = ({
  className = "",
  g27cq4500x5001,
  propWidth,
  propTop,
  propHeight,
  iPSLCDGamingMonitor,
  prop1,
  propMinWidth,
  prop2,
  propMinWidth1,
  prop3,
  prop,
}) => {
  const g27cq4500x5001IconStyle = useMemo(() => {
    return {
      width: propWidth,
      top: propTop,
      height: propHeight,
    };
  }, [propWidth, propTop, propHeight]);

  const div2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div3Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px] text-left text-xs text-text font-title-14px-semibold ${className}`}
    >
      <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
        <DiscountPercent prop={prop} />
        <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
          <img
            className="w-[34px] h-[34px] relative"
            loading="lazy"
            alt=""
            src="/fill-heart.svg"
          />
          <img
            className="w-[34px] h-[34px] relative"
            loading="lazy"
            alt=""
            src="/fill-eye.svg"
          />
        </div>
        <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
          <img
            className="absolute w-[calc(100%_-_20px)] top-[26px] right-[10px] left-[10px] max-w-full overflow-hidden h-[129px] object-cover"
            loading="lazy"
            alt=""
            src={g27cq4500x5001}
            style={g27cq4500x5001IconStyle}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] text-base text-button">
        <div className="relative leading-[24px] font-medium">
          {iPSLCDGamingMonitor}
        </div>
        <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
          <div
            className="relative leading-[24px] font-medium inline-block min-w-[40px] whitespace-nowrap"
            style={div2Style}
          >
            {prop1}
          </div>
          <div
            className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray inline-block min-w-[42px] whitespace-nowrap"
            style={div3Style}
          >
            {prop2}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray">
          <FiveStar />
          <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
            {prop3}
          </div>
        </div>
      </div>
    </div>
  );
};

CartWithFlatDiscount.propTypes = {
  className: PropTypes.string,
  g27cq4500x5001: PropTypes.string,
  iPSLCDGamingMonitor: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propTop: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default CartWithFlatDiscount;

import { useMemo } from "react";
import PropTypes from "prop-types";

const CartWithFlatDiscount11 = ({
  className = "",
  propAlignSelf,
  propFlex,
  propMinWidth,
  g922500x5001,
}) => {
  const cartWithFlatDiscountStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-xs text-text font-title-20px-semibold ${className}`}
      style={cartWithFlatDiscountStyle}
    >
      <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
        <div className="absolute top-[12px] left-[12px] rounded bg-button2 flex flex-row items-start justify-start py-1 px-3">
          <div className="relative leading-[18px] inline-block min-w-[31px]">
            -40%
          </div>
        </div>
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
            src="/fill-eye-4.svg"
          />
        </div>
        <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
          <img
            className="absolute w-[calc(100%_-_18px)] top-[calc(50%_-_76px)] right-[9px] left-[9px] max-w-full overflow-hidden h-[152px] object-cover"
            loading="lazy"
            alt=""
            src={g922500x5001}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] text-base text-button">
        <div className="relative leading-[24px] font-medium">
          HAVIT HV-G92 Gamepad
        </div>
        <div className="flex flex-row items-start justify-start gap-[12px] text-button2">
          <div className="relative leading-[24px] font-medium inline-block min-w-[36px] whitespace-nowrap">
            $120
          </div>
          <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-600 inline-block min-w-[37px] whitespace-nowrap">
            $160
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
              className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
            (88)
          </div>
        </div>
      </div>
    </div>
  );
};

CartWithFlatDiscount11.propTypes = {
  className: PropTypes.string,
  g922500x5001: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default CartWithFlatDiscount11;

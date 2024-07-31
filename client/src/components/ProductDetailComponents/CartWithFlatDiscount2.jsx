import { useMemo } from "react";
import PropTypes from "prop-types";

const CartWithFlatDiscount2 = ({
  className = "",
  propMinWidth,
  ak90001500x5001,
}) => {
  const cartWithFlatDiscount1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[16px] text-left text-xs text-text font-title-20px-semibold ${className}`}
      style={cartWithFlatDiscount1Style}
    >
      <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-start justify-start pt-3 px-3 pb-[9px] relative gap-[129px] mq450:gap-[64px]">
        <div className="w-full h-[41px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b bg-button" />
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="rounded bg-button2 flex flex-row items-start justify-start py-1 px-3">
            <div className="relative leading-[18px] inline-block min-w-[31px]">
              -35%
            </div>
          </div>
          <div className="flex flex-col items-start justify-start relative gap-[8px]">
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
            <div className="w-[190px] h-[180px] absolute !m-[0] bottom-[-107px] left-[-184px] overflow-hidden shrink-0 z-[1]">
              <img
                className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_96px)] w-[191px] h-[101px] object-cover"
                alt=""
                src={ak90001500x5001}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[75px] text-base text-bg">
          <div className="relative leading-[24px] font-medium inline-block min-w-[96px] z-[1]">
            Add To Cart
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[8px] text-base text-button">
        <div className="relative leading-[24px] font-medium">
          AK-900 Wired Keyboard
        </div>
        <div className="flex flex-row items-start justify-start gap-[12px] text-button2">
          <div className="relative leading-[24px] font-medium inline-block min-w-[42px] whitespace-nowrap">
            $960
          </div>
          <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-600 inline-block min-w-[43px] whitespace-nowrap">
            $1160
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
              src="/vector-9.svg"
            />
          </div>
          <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
            (75)
          </div>
        </div>
      </div>
    </div>
  );
};

CartWithFlatDiscount2.propTypes = {
  className: PropTypes.string,
  ak90001500x5001: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default CartWithFlatDiscount2;

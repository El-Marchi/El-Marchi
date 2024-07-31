import { useMemo } from "react";
import PropTypes from "prop-types";

const DiscountPercent = ({
  className = "",
  propPosition,
  propTop,
  propLeft,
  prop,
}) => {
  const discountPercentStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <div
      className={`absolute top-[12px] left-[12px] rounded bg-secondary-2 flex flex-row items-start justify-start py-1 px-3 text-left text-xs text-text font-title-14px-semibold ${className}`}
      style={discountPercentStyle}
    >
      <div className="relative leading-[18px] inline-block min-w-[31px]">
        {prop}
      </div>
    </div>
  );
};

DiscountPercent.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default DiscountPercent;

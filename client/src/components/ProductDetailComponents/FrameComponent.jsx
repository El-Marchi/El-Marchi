import { useMemo } from "react";
import FourStar from "./FourStar";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  aK900WiredKeyboard,
  prop,
  propMinWidth,
  prop1,
  propMinWidth1,
  prop2,
}) => {
  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[8px] text-left text-base text-button font-title-14px-semibold ${className}`}
    >
      <div className="relative leading-[24px] font-medium">
        {aK900WiredKeyboard}
      </div>
      <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
        <div
          className="relative leading-[24px] font-medium inline-block min-w-[42px] whitespace-nowrap"
          style={divStyle}
        >
          {prop}
        </div>
        <div
          className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray inline-block min-w-[43px] whitespace-nowrap"
          style={div1Style}
        >
          {prop1}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray">
        <FourStar />
        <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
          {prop2}
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  aK900WiredKeyboard: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default FrameComponent;

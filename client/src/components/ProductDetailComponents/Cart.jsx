import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const Cart = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px] ${className}`}
    >
      <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
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
        <div className="absolute top-[35px] left-[40px] w-[190px] h-[180px] overflow-hidden z-[1]">
          <img
            className="absolute top-[calc(50%_-_43px)] left-[calc(50%_-_95px)] w-[191px] h-[95px] object-cover"
            alt=""
            src="/gammaxxl240argb1500x500-1@2x.png"
          />
        </div>
      </div>
      <FrameComponent
        aK900WiredKeyboard="RGB liquid CPU Cooler"
        prop="$160"
        propMinWidth="37px"
        prop1="$170"
        propMinWidth1="36px"
        prop2="(65)"
      />
    </div>
  );
};

Cart.propTypes = {
  className: PropTypes.string,
};

export default Cart;

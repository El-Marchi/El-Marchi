import CartWithFlatDiscount from "./CartWithFlatDiscount";
import DiscountPercent from "./DiscountPercent";
import FrameComponent from "./FrameComponent";
import Cart from "./Cart";
import PropTypes from "prop-types";

const Related = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[60px] text-left text-base text-secondary-2 font-title-14px-semibold lg:gap-[30px] ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[16px]">
        <div className="h-10 w-5 relative">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
        </div>
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <div className="relative leading-[20px] font-semibold inline-block min-w-[104px]">
            Related Item
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] text-white">
        <CartWithFlatDiscount
          g27cq4500x5001="/g922500x500-1@2x.png"
          propWidth="calc(100% - 18px)"
          propTop="calc(50% - 76px)"
          propHeight="152px"
          iPSLCDGamingMonitor="HAVIT HV-G92 Gamepad"
          prop1="$120"
          propMinWidth="36px"
          prop2="$160"
          propMinWidth1="37px"
          prop3="(88)"
          prop="-40%"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
          <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-start justify-start pt-3 px-3 pb-[9px] relative gap-[129px] mq450:gap-[64px]">
            <div className="w-full h-[41px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b bg-button" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <DiscountPercent
                propPosition="unset"
                propTop="unset"
                propLeft="unset"
                prop="-35%"
              />
              <div className="flex flex-col items-start justify-start relative gap-[8px]">
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
                <div className="w-[190px] h-[180px] absolute !m-[0] bottom-[-107px] left-[-184px] overflow-hidden shrink-0 z-[1]">
                  <img
                    className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_96px)] w-[191px] h-[101px] object-cover"
                    alt=""
                    src="/ak90001500x500-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[75px]">
              <div className="relative leading-[24px] font-medium inline-block min-w-[96px] z-[1]">
                Add To Cart
              </div>
            </div>
          </div>
          <FrameComponent
            aK900WiredKeyboard="AK-900 Wired Keyboard"
            prop="$960"
            prop1="$1160"
            prop2="(75)"
          />
        </div>
        <CartWithFlatDiscount
          g27cq4500x5001="/g922500x500-11@2x.png"
          iPSLCDGamingMonitor="IPS LCD Gaming Monitor"
          prop1="$370"
          prop2="$400"
          prop3="(99)"
          prop="-30%"
        />
        <Cart />
      </div>
    </section>
  );
};

Related.propTypes = {
  className: PropTypes.string,
};

export default Related;

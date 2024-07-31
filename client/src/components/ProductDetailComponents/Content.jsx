import FourStar from "./FourStar";
import Button from "./Button";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border gap-[70px] max-w-full text-left text-5xl text-button font-heading-24px-regular lg:flex-wrap lg:gap-[35px] mq750:gap-[17px] mq750:pb-[39px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[30px] min-w-[455px] max-w-full mq750:min-w-full">
        <div className="w-[170px] flex flex-col items-start justify-start gap-[16px] mq750:hidden">
          <div className="self-stretch h-[138px] relative rounded bg-secondary overflow-hidden shrink-0">
            <img
              className="absolute h-[calc(100%_-_24px)] top-[12px] bottom-[12px] left-[24px] max-h-full w-[121px] object-contain"
              loading="lazy"
              alt=""
              src="/image-57@2x.png"
            />
          </div>
          <div className="self-stretch h-[138px] relative rounded bg-secondary overflow-hidden shrink-0">
            <img
              className="absolute top-[20px] left-[29px] w-28 h-[97px] object-contain"
              loading="lazy"
              alt=""
              src="/image-58@2x.png"
            />
          </div>
          <div className="self-stretch h-[138px] relative rounded bg-secondary overflow-hidden shrink-0">
            <img
              className="absolute top-[22px] left-[18px] w-[134px] h-[94px] object-cover"
              loading="lazy"
              alt=""
              src="/image-61@2x.png"
            />
          </div>
          <div className="self-stretch h-[138px] relative rounded bg-secondary overflow-hidden shrink-0">
            <img
              className="absolute top-[16px] left-[24px] w-[122px] h-[106px] object-cover"
              loading="lazy"
              alt=""
              src="/image-59@2x.png"
            />
          </div>
        </div>
        <div className="h-[600px] flex-1 relative rounded bg-secondary overflow-hidden max-w-[calc(100%_-_200px)] mq750:max-w-full">
          <img
            className="absolute top-[154px] left-[27px] w-[446px] h-[315px] object-cover"
            loading="lazy"
            alt=""
            src="/image-63@2x.png"
          />
        </div>
      </div>
      <div className="w-[400px] flex flex-col items-start justify-start gap-[16px] min-w-[400px] max-w-full lg:flex-1 mq750:min-w-full">
        <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-semibold font-inherit mq450:text-lgi mq450:leading-[19px]">
          Havic HV G-92 Gamepad
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-sm font-title-14px-semibold">
          <div className="flex flex-row items-start justify-start gap-[16px] text-gray">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <FourStar />
              <div className="relative leading-[21px] inline-block min-w-[95px]">
                (150 Reviews)
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px] text-springgreen">
              <div className="h-[17px] w-px relative box-border opacity-[0.5] border-r-[1px] border-solid border-button" />
              <div className="relative leading-[21px] inline-block min-w-[55px]">
                In Stock
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[24px] max-w-full text-5xl font-heading-24px-regular">
            <div className="relative tracking-[0.03em] leading-[24px] inline-block min-w-[97px] whitespace-nowrap mq450:text-lgi mq450:leading-[19px]">
              $192.00
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[32px] max-w-full text-sm font-title-14px-semibold mq450:gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="w-[373px] relative leading-[21px] inline-block max-w-full">{`PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.`}</div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/underline.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[17.5px] text-xl mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-start justify-start min-w-[103px]">
                  <div className="w-10 rounded-tl rounded-tr-none rounded-br-none rounded-bl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-gray">
                    <div className="h-6 w-6 relative overflow-hidden shrink-0">
                      <img
                        className="absolute h-[6.25%] w-[66.67%] top-[50%] right-[16.67%] bottom-[43.75%] left-[16.67%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden flex flex-row items-start justify-start py-1.5 px-[34px] shrink-0 z-[1] ml-[-1px] border-t-[1px] border-solid border-gray border-b-[1px]">
                    <div className="relative leading-[28px] font-medium inline-block min-w-[12px] mq450:text-base mq450:leading-[22px]">
                      2
                    </div>
                  </div>
                  <img
                    className="h-11 w-[41px] relative rounded-tl-none rounded-tr rounded-br rounded-bl-none overflow-hidden shrink-0 min-h-[44px] z-[2] ml-[-1px]"
                    loading="lazy"
                    alt=""
                    src="/frame-907.svg"
                  />
                </div>
                <Button />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-10 h-10 relative rounded overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-904.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-base">
            <div className="flex-1 rounded box-border overflow-hidden flex flex-col items-start justify-start py-[22px] px-0 gap-[15.5px] max-w-full border-[1px] border-solid border-gray">
              <div className="flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <img
                      className="w-10 h-10 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/icondelivery.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[24px] font-medium inline-block min-w-[103px]">
                      Free Delivery
                    </div>
                    <div className="relative text-xs [text-decoration:underline] leading-[18px] font-medium">
                      Enter your postal code for Delivery Availability
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/underline-1.svg"
              />
              <div className="flex flex-row items-start justify-start py-0 px-4">
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <img
                      className="w-10 h-10 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/iconreturn.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[24px] font-medium inline-block min-w-[122px]">
                      Return Delivery
                    </div>
                    <div className="relative text-xs leading-[18px] font-medium">
                      {`Free 30 Days Delivery Returns. `}
                      <span className="[text-decoration:underline]">
                        Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;

import PropTypes from "prop-types";

const Button = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-2.5 px-12 bg-secondary-2 flex-[0.4182] rounded flex flex-row items-start justify-start box-border min-w-[107px] whitespace-nowrap hover:bg-salmon mq450:flex-1 ${className}`}
    >
      <div className="relative text-base leading-[24px] font-medium font-title-14px-semibold text-text text-left inline-block min-w-[69px]">
        Buy Now
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;

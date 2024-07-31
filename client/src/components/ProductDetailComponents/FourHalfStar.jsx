import PropTypes from "prop-types";

const FourHalfStar = ({ className = "" }) => {
  return (
    <div className={`flex flex-row items-start justify-start ${className}`}>
      <img
        className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <img
        className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <img
        className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <img
        className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
        alt=""
        src="/starhalffilled.svg"
      />
    </div>
  );
};

FourHalfStar.propTypes = {
  className: PropTypes.string,
};

export default FourHalfStar;

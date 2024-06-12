import PropTypes from "prop-types";

const Chip = ({ features = false }) => {
  const classNameCommon = "text-bodyBold font-medium px-[10px] rounded-sm";
  return (
    <>
      {features ? (
        <span className={`bg-[#FFDDD6] text-redColors ${classNameCommon}`}>
          Features
        </span>
      ) : (
        <span className={`bg-[#D7F5E7] text-greenColors ${classNameCommon}`}>
          New
        </span>
      )}
    </>
  );
};

Chip.propTypes = {
  features: PropTypes.bool,
};

export default Chip;

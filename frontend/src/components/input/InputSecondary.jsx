import React from "react";
import PropTypes from "prop-types";
const InputSecondary = React.memo(
  ({
    error,
    name,
    placeholder,
    className = "",
    children,
    onchange = () => {},
    onclick = () => {},
    onfocus = () => {},
    classNameWrap = "",
    ref,
    ...props
  }) => {
    return (
      <div className="wrap-input">
        <div className={`relative ${classNameWrap}`}>
          <input
            className={`w-full pr-5 md:py-[15px] border border-[#4E5D78] md:rounded-[10px] outline-none text-bodyBold font-medium bg-darkColors2 ${className}`}
            name={name}
            ref={ref}
            placeholder={placeholder}
            onChange={onchange}
            onClick={onclick}
            onFocus={onfocus}
            autoComplete="off"
            {...props}
          />
          {children && (
            <span className="absolute left-0 top-2/4 translate-x-5 -translate-y-2/4">
              {children}
            </span>
          )}
        </div>
        {error?.length > 0 && (
          <span className="text-sm text-red-500 mt-[10px] block capitalize">
            {error}
          </span>
        )}
      </div>
    );
  }
);

InputSecondary.displayName = "InputSearch";
InputSecondary.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  classNameWrap: PropTypes.string,
  onchange: PropTypes.func,
  onclick: PropTypes.func,
  ref: PropTypes.string,
  onfocus: PropTypes.func,
};

export default InputSecondary;

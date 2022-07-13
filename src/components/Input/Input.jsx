import classNames from "classnames";
import React, {forwardRef} from "react";

const Input = forwardRef((props, ref) => {
  const {valid, disabled, className, type = "text", ...other} = props;

  const baseStyle =
    "block w-full text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md";
  const activeStyle =
    "focus:border-purple-400 border-gray-300 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700";
  const disabledStyle =
    "cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800";
  const validStyle =
    "border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring focus:ring-green-200 dark:focus:ring-green-200";
  const invalidStyle =
    "border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-200";
  const radioStyle =
    "text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-0 dark:focus:ring-gray-300";
  const checkStyle =
    "text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-0 rounded dark:focus:ring-gray-300";

  function hasValidation(isValid) {
    return isValid !== undefined;
  }

  function validationStyle(isValid) {
    if (hasValidation(isValid)) {
      return isValid ? validStyle : invalidStyle;
    }
    return "";
  }

  function typeStyle(isType) {
    switch (isType) {
      case "radio":
        return radioStyle;
      case "checkbox":
        return checkStyle;
      default:
        return baseStyle;
    }
  }

  const cls = classNames(
    typeStyle(type),
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    className
  );

  return (
    <input
      className={cls}
      type={type}
      ref={ref}
      disabled={disabled}
      {...other}
    />
  );
});

export default Input;

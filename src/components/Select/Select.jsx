import classNames from "classnames";
import React, {forwardRef} from "react";

const Select = forwardRef((props, ref) => {
  const {valid, children, className, multiple, disabled, ...other} = props;

  const styleVar = {
    base: "block w-full text-sm dark:text-gray-300 focus:outline-none focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600 form-select leading-5 mt-1",
    active:
      "focus:border-purple-400 border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring focus:ring-purple-300 dark:focus:ring-gray-300 dark:focus:border-gray-600",
    select: "leading-5",
    disabled: "cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800",
    valid:
      "border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring focus:ring-green-200 dark:focus:ring-green-200",
    invalid:
      "border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-200",
  };

  const baseStyle = styleVar.base;
  const activeStyle = styleVar.active;
  const validStyle = styleVar.valid;
  const invalidStyle = styleVar.invalid;
  const disabledStyle = styleVar.disabled;
  const selectStyle = styleVar.select;

  function hasValidation(isValid) {
    return isValid !== undefined;
  }

  function validationStyle(isValid) {
    if (hasValidation(isValid)) {
      return isValid ? validStyle : invalidStyle;
    }
    return "";
  }

  const cls = classNames(
    baseStyle,
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    !multiple && selectStyle,
    className
  );

  return (
    <select
      className={cls}
      ref={ref}
      disabled={disabled}
      multiple={!!multiple}
      {...other}
    >
      {children}
    </select>
  );
});

export default Select;

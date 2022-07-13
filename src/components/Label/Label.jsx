import React, {forwardRef} from "react";
import classNames from "classnames";

const labelStyle = {
  base: "block text-sm text-gray-700 dark:text-gray-400",
  // check and radio get this same style
  check: "inline-flex items-center",
  disabled: "opacity-50 cursor-not-allowed",
};

const Label = forwardRef((props, ref) => {
  const {children, check, radio, disabled, className, ...other} = props;

  const baseStyle = labelStyle.base;
  const checkStyle = labelStyle.check;
  const disabledStyle = labelStyle.disabled;

  const cls = classNames(
    baseStyle,
    // check and radio are interchangeable
    (check || radio) && checkStyle,
    disabled && disabledStyle,
    className
  );

  return (
    <label className={cls} ref={ref} {...other}>
      {children}
    </label>
  );
});

export default Label;

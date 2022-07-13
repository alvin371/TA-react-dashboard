import React, {forwardRef} from "react";
import classNames from "classnames";

const Card = forwardRef((props, ref) => {
  const {className, children, colored = false, ...other} = props;
  const baseStyle =
    "min-w-0 rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden";
  const uncoloredStyle = "bg-white dark:bg-gray-800 shadow-xs";
  const cls = classNames(baseStyle, !colored && uncoloredStyle, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default Card;

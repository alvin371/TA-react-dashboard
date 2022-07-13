import classNames from "classnames";
import React, {forwardRef} from "react";

const CardBody = forwardRef((props, ref) => {
  const {className, children, ...other} = props;
  const baseStyle = "p-4";
  const cls = classNames(baseStyle, className);

  return (
    <div className={cls} {...other} ref={ref}>
      {children}
    </div>
  );
});

export default CardBody;

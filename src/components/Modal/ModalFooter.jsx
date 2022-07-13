import React from "react";
import {ModalFooter as ModalFooterUI} from "@windmill/react-ui";

const ModalFooter = ({className, leftButton, rightButton}) => {
  return (
    <ModalFooterUI className={`flex-col-reverse gap-2 ${className}`}>
      <div className="w-full sm:w-auto block">{leftButton}</div>
      <div className="w-full sm:w-auto block">{rightButton}</div>
    </ModalFooterUI>
  );
};

export default ModalFooter;

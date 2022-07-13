import {ModalHeader as ModalHeaderUI} from "@windmill/react-ui";
import React from "react";

const ModalHeader = ({text}) => {
  return (
    <ModalHeaderUI className="flex items-center justify-center">
      <span className="w-11/12">{text}</span>
    </ModalHeaderUI>
  );
};

export default ModalHeader;

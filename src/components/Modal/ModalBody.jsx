import { ModalBody as ModalBodyUI } from "@windmill/react-ui";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";

const ModalBody = ({ children, className, autoHide = false }) => {
  return (
    <Scrollbars
      autoHide={autoHide}
      className="overflow-y-scroll"
      style={{ height: "70vh" }}
    >
      <ModalBodyUI
        className={`flex flex-col gap-4 my-8 items-center ${className}`}
      >
        {children}
      </ModalBodyUI>
    </Scrollbars>
  );
};

export default ModalBody;

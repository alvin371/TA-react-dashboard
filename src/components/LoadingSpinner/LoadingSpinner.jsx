import React from "react";

const LoadingSpinner = ({height = 60}) => {
  return (
    <div
      className="flex justify-center items-center"
      style={{height: `${height}px`}}
    >
      <div id="loading" className="w-12 h-12"></div>
    </div>
  );
};

export default LoadingSpinner;

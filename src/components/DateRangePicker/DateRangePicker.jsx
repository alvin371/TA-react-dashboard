import React from "react";
import {DatePicker} from "antd";
import "./antd-min.css";
import "./DateRangePicker.css";

const DateRangePicker = ({
  onChange,
  disabled,
  size = "large",
  defaultValue,
  ...props
}) => {
  const {RangePicker} = DatePicker;
  return (
    <RangePicker
      onChange={onChange}
      disabled={disabled}
      defaultValue={defaultValue}
      size={size}
      {...props}
    />
  );
};

export default DateRangePicker;

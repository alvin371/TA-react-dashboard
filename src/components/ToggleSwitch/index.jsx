import React from "react";
import {Badge} from "@windmill/react-ui";
import classNames from "classnames";

const ToggleSwitch = ({
  onChange,
  checked,
  withLabel = false,
  labelTrue = "",
  labelFalse = "",
  disabled = false,
}) => {
  const cls = classNames("switch", disabled && "disabled");
  return (
    <label className={cls}>
      <input
        disabled={disabled}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      ></input>
      <span className="slider"></span>
      {withLabel && (
        <Badge
          type={checked ? "success" : "warning"}
          style={{position: "absolute", left: "64px", bottom: "8px"}}
        >
          {checked ? labelTrue : labelFalse}
        </Badge>
      )}
    </label>
  );
};

export default ToggleSwitch;

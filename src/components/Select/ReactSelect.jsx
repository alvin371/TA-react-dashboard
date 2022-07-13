import React from "react";
import Select from "react-select";

const ReactSelect = ({
  isClearable,
  onChange,
  className,
  options,
  value,
  defaultValue,
  placeholder,
  isFloat = false,
  ...props
}) => {
  const floatingStyle = {menuPortal: (base) => ({...base, zIndex: 9999})};

  const floating = isFloat ? floatingStyle : {};

  return (
    <Select
      isClearable={isClearable}
      onChange={onChange}
      className={className}
      options={options}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      styles={{
        control: (provided, state) => ({
          ...provided,
          boxShadow: state.isFocused && "0 0 0 3px rgb(202 191 253 / 45%)",
          borderColor: state.isFocused && "#ac94fa",
          "&:hover": {
            borderColor: state.isFocused && "#ac94fa",
          },
        }),
        ...floating,
      }}
      {...props}
    />
  );
};

export default ReactSelect;

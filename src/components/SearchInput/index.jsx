import React from "react";
import {Input} from "@windmill/react-ui";
import {SearchIcon} from "../../icons";
import {DebounceInput} from "react-debounce-input";

const SearchInput = ({
  placeholder = "Search...",
  onChange,
  value = "",
  disabled = false,
  className,
}) => {
  return (
    <div className="relative max-w-xl focus-within:text-purple-500">
      <div className="absolute inset-y-0 flex items-center pl-2">
        <SearchIcon className="w-4 h-4 dark:text-white" aria-hidden="true" />
      </div>
      <DebounceInput
        disabled={disabled}
        value={value}
        className={`pl-8 text-gray-700 ${className}`}
        debounceTimeout={1500}
        placeholder={placeholder}
        aria-label="Search"
        element={Input}
        onChange={(e) => e.target.blur()}
        onBlur={(e) => onChange(e)}
      />
    </div>
  );
};

export default SearchInput;

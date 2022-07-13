import React, {forwardRef} from "react";

const DropdownItem = forwardRef((props, ref) => {
  const dropdownItemVar = {
    base: "mb-2 last:mb-0",
  };
  const {children, ...other} = props;

  const baseStyle = dropdownItemVar.base;

  return (
    <li className={baseStyle}>
      <button
        className="inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 focus:outline-none"
        ref={ref}
        {...other}
      >
        {children}
      </button>
    </li>
  );
});

export default DropdownItem;

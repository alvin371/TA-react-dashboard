import React, {forwardRef, useEffect, useRef} from "react";
import FocusLock from "react-focus-lock";
import {Transition} from "@windmill/react-ui";

const Dropdown = forwardRef((props, ref) => {
  const dropdownVar = {
    base: "absolute w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-lg shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700",
    align: {
      left: "left-0",
      right: "right-0",
    },
  };

  const {
    children,
    onClose,
    isOpen,
    className,
    align = "left",
    ...other
  } = props;

  const baseStyle = dropdownVar.base;
  const alignStyle = dropdownVar.align[align];

  function handleEsc(e) {
    if (e.key === "Esc" || e.key === "Escape") {
      onClose();
    }
  }

  const dropdownRef = useRef(null);
  function handleClickOutside(e) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, {capture: true});
    document.addEventListener("keydown", handleEsc, {capture: true});
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <Transition
      show={isOpen}
      leave="transition ease-out duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div ref={ref}>
        <FocusLock returnFocus>
          <ul
            className={[baseStyle, alignStyle, className].join(" ")}
            ref={dropdownRef}
            aria-label="submenu"
            {...other}
          >
            {children}
          </ul>
        </FocusLock>
      </div>
    </Transition>
  );
});

export default Dropdown;

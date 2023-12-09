import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-md" };
const variants = {
  fill: {
    yellow_700: "bg-yellow-700 text-blue_gray-900",
    deep_purple_A400: "bg-deep_purple-A400 text-white-A700",
    green_700: "bg-green-700 shadow-bs text-white-A700",
    blue_50: "bg-blue-50 shadow-bs text-indigo-500",
    gray_100: "bg-gray-100",
    red_500: "bg-red-500 text-gray-900",
    blue_gray_400: "bg-blue_gray-400 text-white-A700",
    indigo_A400: "bg-indigo-A400 shadow-bs text-white-A700",
  },
  outline: {
    deep_purple_A400:
      "border border-deep_purple-A400 border-solid text-deep_purple-A400",
    blue_gray_100_03:
      "border-2 border-blue_gray-100_03 border-solid text-blue_gray-900",
  },
};
const sizes = { xs: "p-1.5", sm: "p-2.5", md: "p-3.5", lg: "p-[23px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "yellow_700",
    "deep_purple_A400",
    "green_700",
    "blue_50",
    "gray_100",
    "red_500",
    "blue_gray_400",
    "indigo_A400",
    "blue_gray_100_03",
  ]),
};

export { Button };

import React from "react";

const sizeClasses = {
  txtInterRegular16Gray600: "font-inter font-normal",
  txtSegoeUIBold30: "font-bold font-segoeui",
  txtInterMedium14Gray600: "font-inter font-medium",
  txtSegoeUIBold32: "font-bold font-segoeui",
  txtSegoeUISemibold16: "font-segoeui font-semibold",
  txtSegoeUIBold36: "font-bold font-segoeui",
  txtSegoeUI36: "font-normal font-segoeui",
  txtInterMedium14WhiteA700: "font-inter font-medium",
  txtInterMedium11WhiteA700: "font-inter font-medium",
  txtInterMedium30: "font-inter font-medium",
  txtInterRegular24: "font-inter font-normal",
  txtInterRegular8: "font-inter font-normal",
  txtInterRegular54: "font-inter font-normal",
  txtInterMedium12: "font-inter font-medium",
  txtSegoeUIBold20: "font-bold font-segoeui",
  txtInterMedium11: "font-inter font-medium",
  txtInterRegular14DeeppurpleA700: "font-inter font-normal",
  txtInterRegular128: "font-inter font-normal",
  txtInterMedium16: "font-inter font-medium",
  txtSegoeUIBold24: "font-bold font-segoeui",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold40: "font-inter font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtSegoeUI14Gray800: "font-normal font-segoeui",
  txtSegoeUI16WhiteA700: "font-normal font-segoeui",
  txtInterRegular14Gray800: "font-inter font-normal",
  txtAbhayaLibreBold20: "font-abhayalibre font-bold",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular13: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtSegoeUIBold16: "font-bold font-segoeui",
  txtInterMedium16Bluegray90001: "font-inter font-medium",
  txtInterRegular14Black900: "font-inter font-normal",
  txtSegoeUIBold54: "font-bold font-segoeui",
  txtSegoeUIBold14: "font-bold font-segoeui",
  txtSegoeUI14: "font-normal font-segoeui",
  txtSegoeUIBold30WhiteA700: "font-bold font-segoeui",
  txtArialMT16: "font-arial font-normal",
  txtSegoeUI18: "font-normal font-segoeui",
  txtSegoeUI16: "font-normal font-segoeui",
  txtInterRegular16Black900: "font-inter font-normal",
  txtInterRegular48: "font-inter font-normal",
  txtSegoeUIBold36WhiteA700: "font-bold font-segoeui",
  txtSegoeUIBold48: "font-bold font-segoeui",
  txtInterMedium14Gray90001: "font-inter font-medium",
  txtSegoeUI14DeeppurpleA700: "font-normal font-segoeui",
  txtInterBold36: "font-bold font-inter",
  txtSegoeUISemibold20: "font-segoeui font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtSegoeUI20: "font-normal font-segoeui",
  txtSegoeUI24: "font-normal font-segoeui",
  txtInterBold30: "font-bold font-inter",
  txtSegoeUIBold36DeeppurpleA40001: "font-bold font-segoeui",
  txtInterSemiBold22: "font-inter font-semibold",
  txtArialMT16Gray300: "font-arial font-normal",
  txtSegoeUIBold36OrangeA200: "font-bold font-segoeui",
  txtInterRegular36: "font-inter font-normal",
  txtInterRegular54Black900: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

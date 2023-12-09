import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const RegisterPage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-segoeui items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col gap-[25px] items-center justify-start mt-[62px] md:px-5 w-[52%] md:w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-center text-deep_purple-A400_01"
            size="txtSegoeUIBold36DeeppurpleA40001"
          >
            Register
          </Text>
          <div className="flex flex-col gap-[27px] items-center justify-start w-full">
            <div className="flex flex-col gap-[9px] items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-sm"
                  size="txtSegoeUI14"
                >
                  Name
                </Text>
                <Input
                  name="groupSixteen"
                  placeholder="Your Name"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="rounded-lg w-full"
                  type="text"
                  shape="round"
                  color="blue_gray_100_03"
                  size="md"
                  variant="outline"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-sm"
                  size="txtSegoeUI14"
                >
                  Phone
                </Text>
                <Input
                  name="groupSeventeen"
                  placeholder="Your Number"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="rounded-lg w-full"
                  type="number"
                  shape="round"
                  color="blue_gray_100_03"
                  size="md"
                  variant="outline"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-sm"
                  size="txtSegoeUI14"
                >
                  Password
                </Text>
                <Input
                  name="groupEighteen"
                  placeholder="password"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="rounded-lg w-full"
                  type="password"
                  shape="round"
                  color="blue_gray_100_03"
                  size="md"
                  variant="outline"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-blue_gray-900 text-sm"
                  size="txtSegoeUI14"
                >
                  Confirm Password
                </Text>
                <Input
                  name="groupNineteen"
                  placeholder="confirm password"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="rounded-lg w-full"
                  type="password"
                  shape="round"
                  color="blue_gray_100_03"
                  size="md"
                  variant="outline"
                ></Input>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <Button
                className="cursor-pointer font-bold min-w-[736px] md:min-w-full rounded-lg text-center text-sm"
                shape="round"
                color="deep_purple_A400"
                size="md"
                variant="outline"
              >
                REGISTER
              </Button>
              <Text className="text-blue_gray-900 text-sm" size="txtSegoeUI14">
                <span className="text-blue_gray-900 font-segoeui text-left font-normal">
                  Already have an account please{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-blue_gray-900 font-segoeui text-left font-normal underline"
                >
                  Login
                </a>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[5px] items-center justify-start max-w-7xl mt-[67px] mx-auto md:px-5 w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500"
            size="txtSegoeUIBold36"
          >
            Our Latest News
          </Text>
          <Line className="bg-blue_gray-50 h-px w-full" />
        </div>
        <div className="bg-deep_orange-900 flex flex-col items-center justify-start mt-[39px] p-[73px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1034px] mb-1.5 mx-auto w-full">
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtSegoeUIBold36WhiteA700"
              >
                SUBSCRIBE FOR OUR BLOGS
              </Text>
              <Text
                className="text-base text-white-A700"
                size="txtSegoeUI16WhiteA700"
              >
                Sign up to receive email updates about courses
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row font-inter items-center justify-evenly w-[31%] md:w-full">
              <Input
                name="leadingcontent"
                placeholder="Type email here..."
                className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                wrapClassName="border border-blue_gray-100_02 border-solid rounded-bl-md rounded-tl-md w-[65%]"
                type="email"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
              <Button
                className="border border-red-500 border-solid cursor-pointer font-medium h-12 min-w-[110px] rounded-br-md rounded-tr-md text-base text-center"
                color="red_500"
                size="md"
                variant="fill"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-300_01 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default RegisterPage;

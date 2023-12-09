import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const DashboardAdminFivePage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-segoeui md:gap-10 items-center justify-between max-w-[1271px] mx-auto md:px-5 w-full">
            <div className="bg-gray-100 flex md:flex-1 flex-col gap-[25px] items-center justify-start py-[18px] w-[26%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                <Img
                  className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                  src="images/img_ellipse124_100x100.png"
                  alt="ellipse124"
                />
                <Text
                  className="mt-4 text-blue_gray-900 text-xl"
                  size="txtSegoeUI20"
                >
                  Md Rafiqul Islam
                </Text>
                <Text
                  className="mt-[3px] text-gray-800 text-sm"
                  size="txtSegoeUI14Gray800"
                >
                  Dhaka, Bangladesh
                </Text>
              </div>
              <div className="h-[482px] md:h-[684px] mb-[237px] relative w-full">
                <div className="absolute bg-blue_gray-100_03 h-[42px] inset-x-[0] mx-auto top-[17%] w-full"></div>
                <div className="absolute flex flex-col gap-6 h-full inset-y-[0] items-start justify-start left-[11%] my-auto w-auto">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtSegoeUI14"
                  >
                    Home
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtSegoeUI14"
                  >
                    Students
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtSegoeUI14"
                  >
                    Create Blog
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtSegoeUI14"
                  >
                    Account
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtSegoeUI14"
                  >
                    Address
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtSegoeUI14"
                  >
                    Documentation
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtSegoeUI14"
                  >
                    Branch
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtSegoeUI14"
                  >
                    Video course
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtSegoeUI14"
                  >
                    Tution fee
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtSegoeUI14"
                  >
                    Update session
                  </Text>
                  <a
                    href="javascript:"
                    className="text-blue_gray-900 text-sm w-auto"
                  >
                    <Text size="txtSegoeUI14">Logout</Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col font-inter gap-[27px] items-center justify-start w-[65%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                  size="txtInterBold30"
                >
                  Create a Blog
                </Text>
              </div>
              <div className="md:h-[518px] h-[758px] sm:h-[782px] relative w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-[99%]">
                  <Text
                    className="text-base text-blue_gray-900_01"
                    size="txtInterMedium16Bluegray90001"
                  >
                    Title
                  </Text>
                  <Input
                    name="formfieldstext_One"
                    placeholder="title"
                    className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100_01 border-solid mt-3.5 shadow-bs w-full"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                  <Text
                    className="mt-[29px] text-base text-blue_gray-900_01"
                    size="txtInterMedium16Bluegray90001"
                  >
                    Blogs Title Image (if you want)
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 h-[50px] md:h-auto items-center justify-start max-w-[807px] mt-[13px] shadow-bs w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid sm:flex-1 rounded-br-md rounded-tr-md w-[86%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                  <Text
                    className="mt-[25px] text-base text-blue_gray-900_01"
                    size="txtInterMedium16Bluegray90001"
                  >
                    Category
                  </Text>
                  <Input
                    name="tabsmobile"
                    placeholder="--Please choose a Category--"
                    className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100_01 border-solid flex md:h-auto max-w-[807px] mt-[13px] w-full"
                    suffix={
                      <Img
                        className="mt-auto mb-px h-5 ml-[35px]"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                  <Text
                    className="mt-[29px] text-base text-blue_gray-900_01"
                    size="txtInterMedium16Bluegray90001"
                  >
                    Description
                  </Text>
                  <div className="md:h-[165px] h-[322px] sm:h-[375px] mt-[79px] relative w-full">
                    <div className="absolute bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col md:gap-10 gap-[250px] inset-x-[0] justify-start mx-auto p-0.5 rounded-md shadow-bs top-[0] w-full">
                      <Text
                        className="md:ml-[0] ml-[11px] mr-[604px] mt-2.5 text-base text-gray-600"
                        size="txtInterRegular16Gray600"
                      >
                        Something about myself.
                      </Text>
                      <Img
                        className="h-3 md:ml-[0] ml-[791px] w-3"
                        src="images/img_resizeindicator.svg"
                        alt="resizeindicator"
                      />
                    </div>
                    <Button
                      className="absolute bottom-[0] cursor-pointer font-medium h-[50px] left-[0] text-base text-center w-[95px]"
                      shape="round"
                      color="indigo_A400"
                      size="md"
                      variant="fill"
                    >
                      Preview
                    </Button>
                    <Button
                      className="absolute bottom-[0] cursor-pointer font-medium h-[50px] left-[15%] text-base text-center w-[88px]"
                      shape="round"
                      color="green_700"
                      size="md"
                      variant="fill"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[43%] h-14 inset-x-[0] mx-auto object-cover w-full"
                  src="images/img_screenshot52.png"
                  alt="screenshotFiftyTwo"
                />
              </div>
            </div>
          </div>
          <Footer className="bg-gray-300_01 flex font-segoeui items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DashboardAdminFivePage;

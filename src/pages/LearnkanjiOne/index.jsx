import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const LearnkanjiOnePage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-segoeui gap-[15px] items-start justify-between max-w-[1418px] mx-auto md:px-5 w-full">
            <div className="bg-gray-100 flex md:flex-1 flex-col gap-[25px] items-center justify-start py-[18px] w-[23%] md:w-full">
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
              <div className="h-[528px] md:h-[887px] mb-[397px] relative w-full">
                <div className="absolute bg-blue_gray-100_03 h-[42px] inset-x-[0] mx-auto top-[16%] w-full"></div>
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
                    Audio Lesson
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
            <div className="flex md:flex-1 flex-col font-inter justify-start md:mt-0 mt-[70px] w-[77%] md:w-full">
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[507px]">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                  size="txtInterBold30"
                >
                  Kanji
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[23px] mt-[82px] w-[89%] md:w-full">
                <Text
                  className="mb-4 sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                  size="txtInterSemiBold40"
                >
                  Kanji
                </Text>
                <Text
                  className="mb-2.5 md:ml-[0] ml-[152px] md:mt-0 mt-[5px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                  size="txtInterSemiBold40"
                >
                  Reading
                </Text>
                <Text
                  className="mb-0.5 md:ml-[0] ml-[138px] md:mt-0 mt-[13px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                  size="txtInterSemiBold40"
                >
                  Mening
                </Text>
                <Text
                  className="md:ml-[0] ml-[137px] md:mt-0 mt-4 sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                  size="txtInterSemiBold40"
                >
                  Details
                </Text>
              </div>
              <Img
                className="h-[215px] sm:h-auto mt-[21px] object-cover w-full"
                src="images/img_screenshot91.png"
                alt="screenshotNinetyOne"
              />
            </div>
          </div>
          <Footer className="bg-gray-300_01 flex font-segoeui items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LearnkanjiOnePage;

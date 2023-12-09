import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const LearnHiraganaOnePage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-segoeui md:gap-10 items-center justify-between max-w-[1283px] mx-auto md:px-5 w-full">
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
            <div className="font-inter md:h-[1011px] h-[1037px] relative w-[66%] md:w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0]">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                  size="txtInterBold30"
                >
                  Hiragana
                </Text>
              </div>
              <div className="absolute h-[1011px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[1011px] m-auto object-cover w-full"
                  src="images/img_screenshot41.png"
                  alt="screenshotFortyOne"
                />
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[4%] my-auto w-4/5">
                  <div className="bg-white-A700 flex flex-col items-start justify-end p-[19px] rounded-[16px] shadow-bs1 w-full">
                    <div className="flex flex-col md:gap-10 gap-[87px] justify-start md:ml-[0] ml-[29px] mt-[63px] w-[86%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end ml-9 md:ml-[0] w-[91%] md:w-full">
                        <Text
                          className="sm:mt-0 mt-0.5 text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                          size="txtInterRegular48"
                        >
                          A
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[150px] md:text-5xl text-9xl text-black-900 text-center"
                          size="txtInterRegular128"
                        >
                          あ
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[116px] sm:mt-0 mt-[3px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                          size="txtInterRegular48"
                        >
                          আ
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="mt-[23px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                          size="txtInterRegular48"
                        >
                          <>&lt;</>
                        </Text>
                        <Button
                          className="cursor-pointer font-medium mb-4 min-w-[77px] mt-[27px] text-center text-sm"
                          shape="round"
                          color="indigo_A400"
                          size="sm"
                          variant="fill"
                        >
                          Dreaw
                        </Button>
                        <Text
                          className="mb-[23px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                          size="txtInterRegular48"
                        >
                          <>&gt;</>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-300_01 flex font-segoeui items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default LearnHiraganaOnePage;

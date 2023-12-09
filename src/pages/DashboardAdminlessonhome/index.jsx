import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const DashboardAdminlessonhomePage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-segoeui md:gap-10 items-center justify-between max-w-[1370px] mx-auto md:px-5 w-full">
            <div className="bg-gray-100 flex md:flex-1 flex-col gap-[25px] items-center justify-start py-[18px] w-[24%] md:w-full">
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
            <div className="flex md:flex-1 flex-col font-inter items-center justify-start w-[69%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                  size="txtInterBold30"
                >
                  Japanese Lesson
                </Text>
              </div>
              <div className="bg-gray-300_01 flex flex-col items-start justify-start mt-[37px] p-[27px] sm:px-5 rounded-lg w-[93%] md:w-full">
                <div className="flex flex-col items-center justify-start mb-[19px] md:ml-[0] ml-[3px]">
                  <Text
                    className="leading-[36.00px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                    size="txtInterBold30"
                  >
                    <>
                      Here all about japanese Course and Resources.
                      <br />
                      You can select and learn your japanese course.
                    </>
                  </Text>
                </div>
              </div>
              <div className="md:h-[1099px] h-[700px] sm:h-[758px] mt-[51px] relative w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[98%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[41px] items-start justify-start w-full">
                      <div className="bg-gray-300_01 border-2 border-blue_gray-900 border-solid flex sm:flex-col flex-row gap-[15.59px] h-[325px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[109.15px] py-[21.83px] rounded-lg w-[486px] sm:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="leading-[36.00px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
                            size="txtInterBold30"
                          >
                            <>
                              Character
                              <br />
                              <br />
                              Hiragana
                              <br />
                              Katakana
                              <br />
                              Kanji
                            </>
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-medium min-w-[87px] text-center text-sm"
                          shape="round"
                          color="indigo_A400"
                          size="sm"
                          variant="fill"
                        >
                          <>More&gt;&gt;</>
                        </Button>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between w-full">
                        <div className="bg-gray-300_01 border-2 border-blue_gray-900 border-solid flex sm:flex-1 sm:flex-col flex-row gap-[15.59px] h-[315px] md:h-auto items-center justify-center mb-[19px] md:px-10 sm:px-5 px-[109.15px] py-[21.83px] rounded-lg w-[486px] sm:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="leading-[36.00px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
                              size="txtInterBold30"
                            >
                              <>
                                Courses
                                <br />
                                <br />
                                Hiragana Course
                                <br />
                                Katakana Course
                                <br />
                                N5 Course
                                <br />
                                N4 Course
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-medium min-w-[87px] text-center text-sm"
                            shape="round"
                            color="indigo_A400"
                            size="sm"
                            variant="fill"
                          >
                            <>More&gt;&gt;</>
                          </Button>
                        </div>
                        <div className="bg-gray-300_01 border-2 border-blue_gray-900 border-solid flex sm:flex-1 sm:flex-col flex-row gap-[15.59px] h-[315px] md:h-auto items-center justify-center md:mt-0 mt-[19px] md:px-10 sm:px-5 px-[109.15px] py-[21.83px] rounded-lg w-[401px] sm:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="leading-[36.00px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
                              size="txtInterBold30"
                            >
                              <>
                                Vocabuary
                                <br />
                                <br />
                                Numbers
                                <br />
                                Date
                                <br />
                                Time
                                <br />
                                Nations
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer font-medium min-w-[87px] text-center text-sm"
                            shape="round"
                            color="indigo_A400"
                            size="sm"
                            variant="fill"
                          >
                            <>More&gt;&gt;</>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-gray-300_01 border-2 border-blue_gray-900 border-solid flex sm:flex-col flex-row gap-[15.59px] h-[325px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[109.15px] py-[21.83px] right-[0] rounded-lg top-[0] w-[425px] sm:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="leading-[36.00px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
                      size="txtInterBold30"
                    >
                      <>
                        Resources
                        <br />
                        <br />
                        Exam
                        <br />
                        Video
                        <br />
                        PDF
                        <br />
                        About japan
                      </>
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[87px] text-center text-sm"
                    shape="round"
                    color="indigo_A400"
                    size="sm"
                    variant="fill"
                  >
                    <>More&gt;&gt;</>
                  </Button>
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

export default DashboardAdminlessonhomePage;

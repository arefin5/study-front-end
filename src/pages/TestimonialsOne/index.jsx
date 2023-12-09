import React from "react";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const TestimonialsOnePage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-segoeui items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="h-[315px] md:px-5 relative w-full">
            <Header className="flex flex-col items-center justify-center mb-[-1.66px] mx-auto w-full z-[1]" />
            <div className="bg-blue_gray-100 flex flex-col items-start justify-end mt-auto mx-auto p-[18px] w-full">
              <div className="flex flex-row gap-[19px] items-center justify-start md:ml-[0] ml-[93px] mt-[3px] w-[11%] md:w-full">
                <Text
                  className="text-center text-deep_purple-A700 text-sm underline"
                  size="txtSegoeUI14DeeppurpleA700"
                >
                  HOME
                </Text>
                <Text
                  className="text-center text-deep_purple-A700 text-sm underline"
                  size="txtSegoeUI14DeeppurpleA700"
                >
                  TESTIMONIAL
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[215px] mt-[18px] text-4xl sm:text-[32px] md:text-[34px] text-orange-A200"
          size="txtSegoeUIBold36OrangeA200"
        >
          WHAT OLFU STUDENTS & FORMER STUDENTS SAYS
        </Text>
        <div className="flex flex-col items-center mt-[53px] w-full">
          <div className="md:h-[436px] h-[537px] max-w-[1335px] mx-auto md:px-5 relative w-full">
            <Img
              className="absolute h-[435px] inset-x-[0] mx-auto object-cover top-[0] w-full"
              src="images/img_screenshot111.png"
              alt="screenshot111"
            />
            <div className="absolute bg-gray-100_02 bottom-[0] flex flex-col inset-x-[0] items-end justify-end mx-auto p-[23px] sm:px-5 w-[74%]">
              <div className="h-[378px] md:h-[390px] mr-[35px] mt-3 relative w-[89%] md:w-full">
                <Img
                  className="h-[378px] m-auto object-cover w-full"
                  src="images/img_rectangle34_378x830.png"
                  alt="rectangleThirtyFour"
                />
                <div className="absolute flex flex-row sm:gap-10 inset-x-[0] items-center justify-between mx-auto top-[39%] w-[98%]">
                  <div className="h-[21px] relative w-[4%]">
                    <div className="bg-gray-100 h-[21px] m-auto rounded-[13px] w-full"></div>
                    <Img
                      className="absolute h-2.5 inset-[0] justify-center m-auto"
                      src="images/img_chevronleft_gray_900_01.svg"
                      alt="chevronleft"
                    />
                  </div>
                  <div className="h-[21px] relative rotate-[180deg] w-[4%]">
                    <div className="bg-gray-100 h-[21px] m-auto rounded-[13px] w-full"></div>
                    <Img
                      className="absolute h-2.5 inset-[0] justify-center m-auto"
                      src="images/img_chevronleft_gray_900_01_10x13.svg"
                      alt="chevronleft_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-deep_orange-900 flex flex-col items-center justify-start mt-[18px] p-[73px] md:px-10 sm:px-5 w-full">
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
          <footer className="flex items-center justify-center mt-9 md:px-5 w-full">
            <div className="sm:h-[274px] h-[291px] md:h-[373px] relative w-full">
              <div className="absolute bg-gray-300_01 bottom-[0] h-[274px] inset-x-[0] mx-auto w-full"></div>
              <div className="absolute flex flex-col items-center justify-start left-[3%] top-[0] w-[81%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[18%] md:w-full">
                      <Img
                        className="h-[70px] md:h-auto object-cover w-[70px]"
                        src="images/img_rectangle64.png"
                        alt="rectangleSixtyFour"
                      />
                      <Text
                        className="leading-[20.00px] text-blue_gray-900 text-sm"
                        size="txtSegoeUI14"
                      >
                        <>
                          ACME Industries Ltd.
                          <br />
                          Providing reliable tech since 1992
                        </>
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[58px] justify-start w-[63%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col gap-[18px] items-start justify-start w-[13%]">
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtSegoeUIBold14"
                          >
                            SERVICES
                          </Text>
                          <ul className="flex flex-col items-start justify-start w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Branding</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mt-[9px] text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Design</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mt-2.5 text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Marketing</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mt-1.5 text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Advertisement</Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start w-[10%]">
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtSegoeUIBold14"
                          >
                            COMPANY
                          </Text>
                          <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">About us</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mt-[9px] text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Contact</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mt-2.5 text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Jobs</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="mt-2 text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Press kit</Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start w-[12%]">
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtSegoeUIBold14"
                          >
                            LEGAL
                          </Text>
                          <ul className="flex flex-col gap-2.5 items-start justify-start w-full common-column-list">
                            <li>
                              <a
                                href="javascript:"
                                className="text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Terms of use</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Privacy policy</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Cookie policy</Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[54px] text-blue_gray-900 text-sm"
                        size="txtSegoeUI14"
                      >
                        Copyright © 2023 - All right reserved by ACME
                        Industries Ltd
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default TestimonialsOnePage;

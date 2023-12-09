import React from "react";

import { Button, Img, Input, Text } from "components";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const DashboardAdminquizeOnePage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-segoeui md:gap-10 items-start justify-between max-w-[1313px] mx-auto md:px-5 w-full">
            <div className="bg-gray-100 flex md:flex-1 flex-col gap-[25px] items-center justify-start py-[18px] w-1/4 md:w-full">
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
            <div className="flex md:flex-1 flex-col font-inter gap-[57px] items-center justify-start md:mt-0 mt-[67px] w-[66%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                  size="txtInterBold30"
                >
                  Quiz
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-between w-full">
                  <Img className="h-[30px]" src="images/img_x.svg" alt="x" />
                  <div className="bg-blue_gray-100_03 h-[15px] sm:mt-0 my-[7px] rounded-[7px] w-[96%]"></div>
                </div>
                <Text
                  className="mt-[46px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
                  size="txtInterMedium30"
                >
                  Select the correct character (s) for “开”
                </Text>
                <Button
                  className="cursor-pointer min-w-[598px] md:min-w-full mt-6 rounded-[10px] text-4xl sm:text-[32px] md:text-[34px] text-center"
                  color="blue_gray_100_03"
                  size="lg"
                  variant="outline"
                >
                  e
                </Button>
                <Button
                  className="cursor-pointer min-w-[598px] md:min-w-full mt-2 rounded-[10px] text-4xl sm:text-[32px] md:text-[34px] text-center"
                  color="blue_gray_100_03"
                  size="lg"
                  variant="outline"
                >
                  hya
                </Button>
                <Button
                  className="cursor-pointer min-w-[598px] md:min-w-full mt-2 rounded-[10px] text-4xl sm:text-[32px] md:text-[34px] text-center"
                  color="blue_gray_100_03"
                  size="lg"
                  variant="outline"
                >
                  o
                </Button>
                <Button
                  className="cursor-pointer min-w-[598px] md:min-w-full mt-2 rounded-[10px] text-4xl sm:text-[32px] md:text-[34px] text-center"
                  color="blue_gray_100_03"
                  size="lg"
                  variant="outline"
                >
                  so
                </Button>
                <div className="flex flex-row sm:gap-10 items-center justify-between mt-[84px] w-full">
                  <Button
                    className="cursor-pointer font-medium text-base text-center w-[146px]"
                    shape="round"
                    color="indigo_A400"
                    size="md"
                    variant="fill"
                  >
                    Skip
                  </Button>
                  <Button
                    className="cursor-pointer font-medium text-base text-center w-[146px]"
                    shape="round"
                    color="blue_50"
                    size="md"
                    variant="fill"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray-300_01 flex font-segoeui items-center justify-center md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-5 ml-10 mr-[236px] mt-[37px] w-[81%]">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
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
                      Copyright © 2023 - All right reserved by ACME Industries
                      Ltd
                    </Text>
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

export default DashboardAdminquizeOnePage;

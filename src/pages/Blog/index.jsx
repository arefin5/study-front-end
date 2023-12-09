import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Header2 from "components/Header2";

import { CloseSVG } from "../../assets/images";

const BlogPage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter justify-start mx-auto w-full">
        <div className="flex flex-col items-center px-[18px] w-full">
          <div className="font-segoeui sm:h-[257px] h-[315px] md:h-[532px] max-w-[1440px] mx-auto md:px-5 relative w-full">
            <div className="absolute bg-blue_gray-100 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[18px] w-full">
              <div className="flex flex-row gap-[35px] items-center justify-start md:ml-[0] ml-[93px] mt-[3px] w-[8%] md:w-full">
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
                  BLOG
                </Text>
              </div>
            </div>
            <Header2 className="absolute flex md:flex-col md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
          </div>
          <Img
            className="h-[166px] max-w-[1292px] mt-[83px] mx-auto w-full"
            src="images/img_latestblog.svg"
            alt="latestblog"
          />
          <Img
            className="h-[733px] md:h-auto max-w-[1276px] mt-[46px] mx-auto object-cover w-full"
            src="images/img_whyisjapana.png"
            alt="whyisjapana"
          />
          <Text
            className="leading-[24.00px] mt-[15px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[93%] sm:w-full"
            size="txtInterRegular24"
          >
            With exceptional traits in providing genuine scholarships provided
            by the Japanese government, and being a global leader in a multitude
            of niche verticals such as engineering, life science, robotics,
            astronautics, and so on. As far as the geographical location is
            considered, Japan consists of 4000 plus islands and is the 10th
            largest population, and Nihongo or Japanese being the national
            language. With an excellent employment rate of around 96.7%, Japan
            can be considered a developed nation. Japan also has the globe’s
            finest of health index, as well as life expectancy, making the
            country a huge hub for top-notch opportunities for Indian
            caregivers. Japan is considered the most industrialized country with
            second-to-none market leaders in the field of electronics,
            automation, nanotechnology, construction, robotics, and many more.
            In conjunction with this, Japan is frequently on the lookout for
            Indian engineering professionals and also technicians and skilled
            workforce for their production and tourist verticals.
          </Text>
        </div>
        <div className="flex flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[121px] mt-[66px] md:px-5 w-[41%] md:w-full">
          <Text
            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtInterRegular24"
          >
            Comment
          </Text>
          <Input
            name="leadingcontent"
            placeholder="Type email here..."
            className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
            wrapClassName="border border-blue_gray-100_02 border-solid md:ml-[0] ml-[3px] rounded-bl-md rounded-tl-md w-full"
            type="email"
            color="white_A700"
            size="lg"
            variant="fill"
          ></Input>
        </div>
        <div className="flex flex-col items-end px-3 w-full">
          <List
            className="sm:flex-col flex-row gap-[43px] grid grid-cols-3 md:px-5 w-[26%]"
            orientation="horizontal"
          >
            <div className="flex flex-col items-center justify-start sm:ml-[0] rounded-md w-full">
              <Img
                className="h-20 md:h-auto object-cover rounded-md w-full"
                src="images/img_rectangle67.png"
                alt="rectangleSixtySeven"
              />
            </div>
            <div className="flex flex-col items-center justify-start sm:ml-[0] rounded-md w-full">
              <Img
                className="h-20 md:h-auto object-cover rounded-md w-full"
                src="images/img_rectangle68.png"
                alt="rectangleSixtyEight"
              />
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start sm:ml-[0] rounded-md w-full">
              <Img
                className="h-20 md:h-auto object-cover rounded-md w-full"
                src="images/img_rectangle69.png"
                alt="rectangleSixtyNine"
              />
            </div>
          </List>
        </div>
        <div className="flex flex-col font-segoeui items-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-deep_orange-900 flex flex-col items-center justify-end max-w-[1467px] mx-auto p-[46px] md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[77%] md:w-full">
                <div className="md:h-12 h-14 relative w-[48%] md:w-full">
                  <Text
                    className="absolute right-[0] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 top-[0]"
                    size="txtSegoeUIBold36WhiteA700"
                  >
                    SUBSCRIBE FOR OUR BLOGS
                  </Text>
                  <Text
                    className="absolute bottom-[0] left-[0] text-base text-white-A700"
                    size="txtSegoeUI16WhiteA700"
                  >
                    Sign up to receive email updates about courses
                  </Text>
                </div>
                <div className="flex flex-row font-inter items-center justify-evenly w-[31%] md:w-full">
                  <div className="bg-white-A700 border border-blue_gray-100_02 border-solid flex h-8 justify-end px-[13px] py-[9px] relative rounded-bl-md rounded-tl-md w-[205px]">
                    <Text
                      className="mt-auto text-base text-gray-600 w-auto"
                      size="txtInterRegular16Gray600"
                    >
                      Type email here...
                    </Text>
                    <Input
                      name="leadingcontent_One"
                      placeholder="Type email here..."
                      className="justify-center md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                      wrapClassName="absolute border border-blue_gray-100_02 border-solid inset-[0] m-auto rounded-bl-md rounded-tl-md w-full"
                      type="email"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <Button
                    className="border border-red-500 border-solid cursor-pointer font-medium h-8 min-w-[110px] rounded-br-md rounded-tr-md text-base text-center"
                    color="red_500"
                    size="xs"
                    variant="fill"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <footer className="bg-gray-300_01 flex items-center justify-center md:px-5 w-full">
              <div className="flex flex-col items-center justify-center mb-[68px] ml-[68px] mr-[217px] mt-[99px] w-[81%]">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[18%] md:w-full">
                      <Img
                        className="h-[29px] md:h-auto object-cover w-[34%] sm:w-full"
                        src="images/img_rectangle64.png"
                        alt="rectangleSixtyFour"
                      />
                      <Text
                        className="leading-[20.00px] mt-0.5 text-blue_gray-900 text-sm"
                        size="txtSegoeUI14"
                      >
                        <>
                          ACME Industries Ltd.
                          <br />
                          Providing reliable tech since 1992
                        </>
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[15px] justify-start w-[63%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <div className="flex flex-col items-start justify-start w-[13%]">
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
                                className="text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Design</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Marketing</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Advertisement</Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col h-[70px] items-start justify-start w-[70px]">
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
                                className="text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Contact</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Jobs</Text>
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:"
                                className="text-blue_gray-900 text-sm"
                              >
                                <Text size="txtSegoeUI14">Press kit</Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[12%]">
                          <Text
                            className="text-blue_gray-400 text-sm"
                            size="txtSegoeUIBold14"
                          >
                            LEGAL
                          </Text>
                          <ul className="flex flex-col items-start justify-start w-full common-column-list">
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
                        className="md:ml-[0] ml-[55px] text-blue_gray-900 text-sm"
                        size="txtSegoeUI14"
                      >
                        Copyright © 2023 - All right reserved by ACME
                        Industries Ltd
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

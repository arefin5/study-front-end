import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const STUDYPage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-segoeui items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-pink-900 flex flex-col items-center justify-start mt-[60px] pt-[9px] px-[9px] rounded-[16px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1259px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Img
                className="h-[427px] md:h-auto object-cover"
                src="images/img_rectangle78.png"
                alt="rectangleSeventyEight"
              />
              <div className="flex flex-col gap-[33px] items-start justify-start md:mt-0 mt-[23px]">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtSegoeUIBold30WhiteA700"
                >
                  STUDY -WORK – SETTLE IN JAPAN
                </Text>
                <Text
                  className="leading-[24.00px] text-base text-white-A700"
                  size="txtSegoeUI16WhiteA700"
                >
                  <>
                    The country of first choice for migration immediately after
                    COVID-19 is, undoubtedly Japan, especially, with its current
                    popularity, stable economy, and a wide array of schools and
                    universities providing career opportunities, and a
                    settlement circumstance, thereafter. Japan is a culturally
                    rich and technologically advanced nation is a desirable
                    destination for international students. Japan offers a
                    once-in-a-lifetime opportunity for students from India, Sri
                    Lanka, and other countries, as well.
                    <br />
                    International experiences are exhilarating and when it comes
                    to academics and career, a few countries are rich in culture
                    and technology and provide top-notch education and career
                    opportunities. Getting a chance to study abroad while
                    earning college credit parallelly, is extraordinary and
                    worth a fortune. Several countries provide course options at
                    various prestigious universities that complement your study
                    with a for-credit internship, as well as matchless career
                    opportunities later on. Not only does it let you attain a
                    deeper insight into academics and career opportunities but
                    it also gets you to clap your eyes on the professional and
                    personal culture and language of the specific country.
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1251px] mt-12 mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="gap-12 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 justify-start pb-[15px] rounded-[16px] shadow-bs2 w-full">
                <Img
                  className="h-[260px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-full"
                  src="images/img_rectangle77.png"
                  alt="rectangleSeventySeven"
                />
                <Text
                  className="leading-[24.00px] ml-4 md:ml-[0] text-blue_gray-900 text-xl w-[84%] sm:w-full"
                  size="txtSegoeUIBold20"
                >
                  How To Pick Your Study-Abroad Program?
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 justify-start pb-[15px] rounded-[16px] shadow-bs2 w-full">
                <Img
                  className="h-[260px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-full"
                  src="images/img_rectangle77_260x385.png"
                  alt="rectangleSeventySeven"
                />
                <Text
                  className="leading-[24.00px] ml-4 md:ml-[0] text-blue_gray-900 text-xl w-[84%] sm:w-full"
                  size="txtSegoeUIBold20"
                >
                  How To Pick Your Study-Abroad Program?
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 justify-start pb-[15px] rounded-[16px] shadow-bs2 w-full">
                <Img
                  className="h-[260px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-full"
                  src="images/img_rectangle77_1.png"
                  alt="rectangleSeventySeven"
                />
                <Text
                  className="leading-[24.00px] ml-4 md:ml-[0] text-blue_gray-900 text-xl w-[84%] sm:w-full"
                  size="txtSegoeUIBold20"
                >
                  How To Pick Your Study-Abroad Program?
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 justify-start pb-[15px] rounded-[16px] shadow-bs2 w-full">
                <Img
                  className="h-[260px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-full"
                  src="images/img_rectangle77_2.png"
                  alt="rectangleSeventySeven"
                />
                <Text
                  className="leading-[24.00px] ml-4 md:ml-[0] text-blue_gray-900 text-xl w-[84%] sm:w-full"
                  size="txtSegoeUIBold20"
                >
                  How To Pick Your Study-Abroad Program?
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 justify-start pb-[15px] rounded-[16px] shadow-bs2 w-full">
                <Img
                  className="h-[260px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-full"
                  src="images/img_rectangle77_3.png"
                  alt="rectangleSeventySeven"
                />
                <Text
                  className="leading-[24.00px] ml-4 md:ml-[0] text-blue_gray-900 text-xl w-[84%] sm:w-full"
                  size="txtSegoeUIBold20"
                >
                  How To Pick Your Study-Abroad Program?
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 justify-start pb-[15px] rounded-[16px] shadow-bs2 w-full">
                <Img
                  className="h-[260px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-full"
                  src="images/img_rectangle77_4.png"
                  alt="rectangleSeventySeven"
                />
                <Text
                  className="leading-[24.00px] ml-4 md:ml-[0] text-blue_gray-900 text-xl w-[84%] sm:w-full"
                  size="txtSegoeUIBold20"
                >
                  How To Pick Your Study-Abroad Program?
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 justify-start pb-[15px] rounded-[16px] shadow-bs2 w-full">
                <Img
                  className="h-[260px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-full"
                  src="images/img_rectangle77_5.png"
                  alt="rectangleSeventySeven"
                />
                <Text
                  className="leading-[24.00px] ml-4 md:ml-[0] text-blue_gray-900 text-xl w-[84%] sm:w-full"
                  size="txtSegoeUIBold20"
                >
                  How To Pick Your Study-Abroad Program?
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 justify-start pb-[15px] rounded-[16px] shadow-bs2 w-full">
                <Img
                  className="h-[260px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-full"
                  src="images/img_rectangle77_6.png"
                  alt="rectangleSeventySeven"
                />
                <Text
                  className="leading-[24.00px] ml-4 md:ml-[0] text-blue_gray-900 text-xl w-[84%] sm:w-full"
                  size="txtSegoeUIBold20"
                >
                  How To Pick Your Study-Abroad Program?
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 justify-start pb-[15px] rounded-[16px] shadow-bs2 w-full">
                <Img
                  className="h-[260px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-full"
                  src="images/img_rectangle77_7.png"
                  alt="rectangleSeventySeven"
                />
                <Text
                  className="leading-[24.00px] ml-4 md:ml-[0] text-blue_gray-900 text-xl w-[84%] sm:w-full"
                  size="txtSegoeUIBold20"
                >
                  How To Pick Your Study-Abroad Program?
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 justify-start pb-[15px] rounded-[16px] shadow-bs2 w-full">
                <Img
                  className="h-[260px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-full"
                  src="images/img_rectangle77_8.png"
                  alt="rectangleSeventySeven"
                />
                <Text
                  className="leading-[24.00px] ml-4 md:ml-[0] text-blue_gray-900 text-xl w-[84%] sm:w-full"
                  size="txtSegoeUIBold20"
                >
                  How To Pick Your Study-Abroad Program?
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 justify-start pb-[15px] rounded-[16px] shadow-bs2 w-full">
                <Img
                  className="h-[260px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-full"
                  src="images/img_rectangle77_9.png"
                  alt="rectangleSeventySeven"
                />
                <Text
                  className="leading-[24.00px] ml-4 md:ml-[0] text-blue_gray-900 text-xl w-[84%] sm:w-full"
                  size="txtSegoeUIBold20"
                >
                  How To Pick Your Study-Abroad Program?
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 justify-start pb-[15px] rounded-[16px] shadow-bs2 w-full">
                <Img
                  className="h-[260px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-full"
                  src="images/img_rectangle77_10.png"
                  alt="rectangleSeventySeven"
                />
                <Text
                  className="leading-[24.00px] ml-4 md:ml-[0] text-blue_gray-900 text-xl w-[84%] sm:w-full"
                  size="txtSegoeUIBold20"
                >
                  How To Pick Your Study-Abroad Program?
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[5px] items-center justify-start max-w-7xl mt-[89px] mx-auto md:px-5 w-full">
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
        <footer className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-blue_gray-100_03 flex flex-col items-center justify-center p-[26px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-center md:ml-[0] ml-[13px] mt-1 w-[84%] md:w-full">
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
          </div>
        </footer>
      </div>
    </>
  );
};

export default STUDYPage;

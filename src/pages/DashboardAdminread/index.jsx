import React from "react";

import { Button, Img, Input, Line, List, Radio, Text } from "components";
import DashboardAdminFourNavbarslink from "components/DashboardAdminFourNavbarslink";
import Footer from "components/Footer";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const DashboardAdminreadPage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1509px] mx-auto relative w-full">
        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Header3 className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
            <div className="flex md:flex-col flex-row font-segoeui md:gap-10 gap-[91px] items-start justify-start md:px-5 w-[92%] md:w-full">
              <div className="bg-gray-100 flex flex-col gap-[25px] items-center justify-start py-[18px] w-1/4 md:w-full">
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
              <div className="flex flex-col font-inter md:gap-10 gap-[125px] items-center justify-start md:mt-0 mt-[23px] w-[69%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                    size="txtInterBold30"
                  >
                    Lesson 1
                  </Text>
                </div>
                <div className="flex flex-col md:gap-10 gap-[798px] justify-start w-full">
                  <div className="bg-gray-100_01 flex md:flex-col flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[23px] mr-[572px] px-5 py-[15px] rounded-[25px] w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_play.svg"
                      alt="play"
                    />
                    <div className="h-5 relative w-[88%] md:w-full">
                      <Radio
                        value="000112"
                        className="m-auto sm:pr-5 text-blue_gray-900 text-left text-sm"
                        inputClassName="absolute mr-[5px]"
                        checked={false}
                        name="000112"
                        label="000  112"
                        id="000112"
                      ></Radio>
                      <div className="absolute h-1 inset-y-[0] my-auto overflow-hidden right-[30%] w-[35%]">
                        <div className="w-full h-full absolute bg-blue_gray_100_03 rounded-[2px]"></div>
                        <div
                          className="h-full absolute bg-gray_700  rounded-[2px]"
                          style={{ width: "17%" }}
                        ></div>
                      </div>
                      <Img
                        className="absolute h-5 inset-y-[0] my-auto right-[15%] w-5"
                        src="images/img_volumeup.svg"
                        alt="volumeup"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[139px] text-center text-sm"
                      shape="round"
                      color="indigo_A400"
                      size="sm"
                      variant="fill"
                    >
                      Previous lesson
                    </Button>
                    <div className="bg-indigo-A400 md:h-[17px] h-[38px] px-[17px] py-[9px] relative rounded-md shadow-bs w-[118px]">
                      <Text
                        className="m-auto text-sm text-white-A700 w-auto"
                        size="txtInterMedium14WhiteA700"
                      >
                        Next Lesson
                      </Text>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-sm text-white-A700 w-max"
                        size="txtInterMedium14WhiteA700"
                      >
                        Next Lesson
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer className="bg-gray-300_01 flex font-segoeui items-center justify-center md:px-5 w-full" />
          </div>
        </div>
        <div className="absolute flex flex-col gap-6 items-center justify-start md:px-5 right-[8%] top-[13%] w-[64%]">
          <div className="md:h-16 h-[117px] relative w-[97%] md:w-full">
            <div className="absolute bottom-[44%] h-px inset-x-[0] mx-auto w-[98%] md:w-full">
              <Line className="bg-gray-300_01 h-px m-auto w-full" />
              <Line className="absolute bg-gray-300_01 h-px inset-[0] justify-center m-auto w-full" />
            </div>
            <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-auto">
              <div className="h-16 relative w-[305px]">
                <DashboardAdminFourNavbarslink
                  className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-start left-[0] my-auto w-auto"
                  accountsettingstext="Vocabulary"
                />
                <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-start left-[33%] my-auto w-auto">
                  <div className="flex flex-col h-[62px] md:h-auto items-center justify-center pt-1 px-1 w-auto">
                    <Text
                      className="text-center text-gray-600 text-sm w-auto"
                      size="txtInterMedium14Gray600"
                    >
                      Grammar
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col md:h-auto h-full inset-y-[0] items-center justify-start my-auto right-[23%] w-auto">
                  <div className="flex flex-col h-[62px] md:h-auto items-center justify-center pt-1 px-1 w-auto">
                    <Text
                      className="text-center text-gray-600 text-sm w-auto"
                      size="txtInterMedium14Gray600"
                    >
                      Kaiwa
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col md:h-auto h-full items-center justify-center ml-auto my-auto pt-1 px-1 w-[54px]">
                  <Text
                    className="text-center text-gray-600 text-sm w-auto"
                    size="txtInterMedium14Gray600"
                  >
                    Mondai
                  </Text>
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto w-auto">
                  <div className="flex flex-row gap-4 items-start justify-start w-auto">
                    <div className="flex flex-col h-16 md:h-auto items-center justify-start w-auto">
                      <div className="flex flex-col h-[62px] md:h-auto items-center justify-center pt-1 px-1 w-auto">
                        <Text
                          className="text-center text-gray-900_01 text-sm w-auto"
                          size="txtInterMedium14Gray90001"
                        >
                          Vocabulary
                        </Text>
                      </div>
                      <Line className="bg-indigo-A200 h-0.5 w-full" />
                    </div>
                    <div className="flex flex-col h-16 md:h-auto items-center justify-start w-auto">
                      <div className="flex flex-col h-[62px] md:h-auto items-center justify-center pt-1 px-1 w-auto">
                        <Text
                          className="text-center text-gray-600 text-sm w-auto"
                          size="txtInterMedium14Gray600"
                        >
                          Grammar
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-16 md:h-auto items-center justify-start w-auto">
                      <div className="flex flex-col h-[62px] md:h-auto items-center justify-center pt-1 px-1 w-auto">
                        <Text
                          className="text-center text-gray-600 text-sm w-auto"
                          size="txtInterMedium14Gray600"
                        >
                          Kaiwa
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-[62px] md:h-auto items-center justify-center pt-1 px-1 w-[54px]">
                      <Text
                        className="text-center text-gray-600 text-sm w-auto"
                        size="txtInterMedium14Gray600"
                      >
                        Mondai
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col h-16 md:h-auto items-center justify-start right-[0] w-[141px]">
              <div className="flex flex-row gap-4 h-16 md:h-auto items-start justify-start w-[136px]">
                <DashboardAdminFourNavbarslink
                  className="flex flex-col h-16 md:h-auto items-center justify-start w-auto"
                  accountsettingstext="Furigana"
                />
                <div className="flex flex-col h-16 md:h-auto items-center justify-start w-auto">
                  <div className="flex flex-col h-[62px] md:h-auto items-center justify-center pt-1 px-1 w-auto">
                    <Text
                      className="text-center text-gray-600 text-sm w-auto"
                      size="txtInterMedium14Gray600"
                    >
                      Bangla
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end pt-3 w-[97%] md:w-full">
            <div className="md:h-[150px] h-[17px] md:ml-[0] ml-[9px] relative w-[81%] md:w-full">
              <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[94%]">
                <Text
                  className="text-deep_purple-A700 text-sm"
                  size="txtInterRegular14DeeppurpleA700"
                >
                  わたし
                </Text>
                <Text
                  className="md:ml-[0] ml-[298px] text-black-900 text-sm"
                  size="txtInterRegular14Black900"
                >
                  私 : tư
                </Text>
                <Text
                  className="md:ml-[0] ml-[264px] text-gray-800 text-sm"
                  size="txtInterRegular14Gray800"
                >
                  Tôi
                </Text>
              </div>
              <Text
                className="my-auto text-blue_gray-900 text-sm"
                size="txtInterRegular14"
              >
                1
              </Text>
              <div className="absolute flex md:flex-col flex-row md:gap-[42px] h-full inset-[0] items-center justify-between m-auto w-full">
                <Text
                  className="text-blue_gray-900 text-sm"
                  size="txtInterRegular14"
                >
                  1
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                  <Text
                    className="text-deep_purple-A700 text-sm"
                    size="txtInterRegular14DeeppurpleA700"
                  >
                    わたし
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[298px] text-black-900 text-sm"
                    size="txtInterRegular14Black900"
                  >
                    私 : tư
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[264px] text-gray-800 text-sm"
                    size="txtInterRegular14Gray800"
                  >
                    Tôi
                  </Text>
                </div>
              </div>
            </div>
            <div className="md:h-[35px] h-px md:ml-[0] ml-[7px] mt-[34px] relative w-[98%] md:w-full">
              <Line className="bg-blue_gray-400 h-px m-auto w-full" />
              <Line className="absolute bg-blue_gray-400 h-px inset-[0] justify-center m-auto w-full" />
            </div>
            <div className="flex md:flex-col flex-row gap-[23px] items-end justify-start md:ml-[0] ml-[7px] mt-3 w-[91%] md:w-full">
              <Text
                className="mb-1 md:mt-0 mt-[9px] text-blue_gray-900 text-sm"
                size="txtInterRegular14"
              >
                2
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                <Text
                  className="md:mt-0 mt-2 text-deep_purple-A700 text-sm"
                  size="txtInterRegular14DeeppurpleA700"
                >
                  わたしたち
                </Text>
                <Text
                  className="mb-2 md:ml-[0] ml-[296px] text-black-900 text-sm"
                  size="txtInterRegular14Black900"
                >
                  私 : tư
                </Text>
                <Text
                  className="ml-60 md:ml-[0] md:mt-0 mt-2 text-gray-800 text-sm"
                  size="txtInterRegular14Gray800"
                >
                  chúng tôi, chúng ta
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[21px] items-start justify-start md:ml-[0] ml-[7px] mt-10 w-[94%] md:w-full">
              <Text
                className="text-blue_gray-900 text-sm"
                size="txtInterRegular14"
              >
                3
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                <Text
                  className="mb-[5px] text-deep_purple-A700 text-sm"
                  size="txtInterRegular14DeeppurpleA700"
                >
                  あなた
                </Text>
                <Text
                  className="mb-[5px] md:ml-[0] ml-[260px] text-black-900 text-sm"
                  size="txtInterRegular14Black900"
                >
                  貴方 : quý phương
                </Text>
                <Text
                  className="md:ml-[0] ml-[114px] md:mt-0 mt-[5px] text-gray-800 text-sm"
                  size="txtInterRegular14Gray800"
                >
                  anh/ chị/ ông/ bà, bạn (ngôi thứ 2 số ít)
                </Text>
              </div>
            </div>
            <List
              className="flex flex-col gap-4 items-center mt-[22px] w-full"
              orientation="vertical"
            >
              <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[99%] md:w-full">
                <Line className="bg-blue_gray-400 h-px ml-0.5 md:ml-[0] w-full" />
                <div className="flex md:flex-col flex-row gap-[35px] items-end justify-start w-[87%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[5px] text-blue_gray-900 text-sm"
                    size="txtInterRegular14"
                  >
                    4
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                    <Text
                      className="mb-1.5 text-deep_purple-A700 text-sm"
                      size="txtInterRegular14DeeppurpleA700"
                    >
                      がっこう
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[243px] md:mt-0 mt-[5px] text-black-900 text-sm"
                      size="txtInterRegular14Black900"
                    >
                      学校 : HỌC HIỆU
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[222px] md:mt-0 mt-1.5 text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      Trường học
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-400 w-[98%]" />
              <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[99%] md:w-full">
                <Line className="bg-blue_gray-400 h-px ml-0.5 md:ml-[0] w-full" />
                <div className="flex md:flex-col flex-row gap-[35px] items-end justify-start w-[87%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[5px] text-blue_gray-900 text-sm"
                    size="txtInterRegular14"
                  >
                    4
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                    <Text
                      className="mb-1.5 text-deep_purple-A700 text-sm"
                      size="txtInterRegular14DeeppurpleA700"
                    >
                      がっこう
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[243px] md:mt-0 mt-[5px] text-black-900 text-sm"
                      size="txtInterRegular14Black900"
                    >
                      学校 : HỌC HIỆU
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[222px] md:mt-0 mt-1.5 text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      Trường học
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-400 w-[98%]" />
              <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[99%] md:w-full">
                <Line className="bg-blue_gray-400 h-px ml-0.5 md:ml-[0] w-full" />
                <div className="flex md:flex-col flex-row gap-[35px] items-end justify-start w-[87%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[5px] text-blue_gray-900 text-sm"
                    size="txtInterRegular14"
                  >
                    4
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                    <Text
                      className="mb-1.5 text-deep_purple-A700 text-sm"
                      size="txtInterRegular14DeeppurpleA700"
                    >
                      がっこう
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[243px] md:mt-0 mt-[5px] text-black-900 text-sm"
                      size="txtInterRegular14Black900"
                    >
                      学校 : HỌC HIỆU
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[222px] md:mt-0 mt-1.5 text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      Trường học
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-400 w-[98%]" />
              <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[99%] md:w-full">
                <Line className="bg-blue_gray-400 h-px ml-0.5 md:ml-[0] w-full" />
                <div className="flex md:flex-col flex-row gap-[35px] items-end justify-start w-[87%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[5px] text-blue_gray-900 text-sm"
                    size="txtInterRegular14"
                  >
                    4
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                    <Text
                      className="mb-1.5 text-deep_purple-A700 text-sm"
                      size="txtInterRegular14DeeppurpleA700"
                    >
                      がっこう
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[243px] md:mt-0 mt-[5px] text-black-900 text-sm"
                      size="txtInterRegular14Black900"
                    >
                      学校 : HỌC HIỆU
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[222px] md:mt-0 mt-1.5 text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      Trường học
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-400 w-[98%]" />
              <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[99%] md:w-full">
                <Line className="bg-blue_gray-400 h-px ml-0.5 md:ml-[0] w-full" />
                <div className="flex md:flex-col flex-row gap-[35px] items-end justify-start w-[87%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[5px] text-blue_gray-900 text-sm"
                    size="txtInterRegular14"
                  >
                    4
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                    <Text
                      className="mb-1.5 text-deep_purple-A700 text-sm"
                      size="txtInterRegular14DeeppurpleA700"
                    >
                      がっこう
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[243px] md:mt-0 mt-[5px] text-black-900 text-sm"
                      size="txtInterRegular14Black900"
                    >
                      学校 : HỌC HIỆU
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[222px] md:mt-0 mt-1.5 text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      Trường học
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-400 w-[98%]" />
              <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[99%] md:w-full">
                <Line className="bg-blue_gray-400 h-px ml-0.5 md:ml-[0] w-full" />
                <div className="flex md:flex-col flex-row gap-[35px] items-end justify-start w-[87%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[5px] text-blue_gray-900 text-sm"
                    size="txtInterRegular14"
                  >
                    4
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                    <Text
                      className="mb-1.5 text-deep_purple-A700 text-sm"
                      size="txtInterRegular14DeeppurpleA700"
                    >
                      がっこう
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[243px] md:mt-0 mt-[5px] text-black-900 text-sm"
                      size="txtInterRegular14Black900"
                    >
                      学校 : HỌC HIỆU
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[222px] md:mt-0 mt-1.5 text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      Trường học
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-400 w-[98%]" />
              <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[99%] md:w-full">
                <Line className="bg-blue_gray-400 h-px ml-0.5 md:ml-[0] w-full" />
                <div className="flex md:flex-col flex-row gap-[35px] items-end justify-start w-[87%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[5px] text-blue_gray-900 text-sm"
                    size="txtInterRegular14"
                  >
                    4
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                    <Text
                      className="mb-1.5 text-deep_purple-A700 text-sm"
                      size="txtInterRegular14DeeppurpleA700"
                    >
                      がっこう
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[243px] md:mt-0 mt-[5px] text-black-900 text-sm"
                      size="txtInterRegular14Black900"
                    >
                      学校 : HỌC HIỆU
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[222px] md:mt-0 mt-1.5 text-gray-800 text-sm"
                      size="txtInterRegular14Gray800"
                    >
                      Trường học
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdminreadPage;

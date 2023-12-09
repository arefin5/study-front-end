import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import DashboardAdminFourNavbarslink from "components/DashboardAdminFourNavbarslink";
import Footer from "components/Footer";
import Header3 from "components/Header3";

import { CloseSVG } from "../../assets/images";

const DashboardAdminreadOnePage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header3 className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-segoeui md:gap-10 gap-[86px] items-start justify-start md:px-5 w-[92%] md:w-full">
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
            <div className="flex flex-col font-inter gap-[47px] items-center justify-start md:mt-0 mt-[23px] w-[70%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                  size="txtInterBold30"
                >
                  Lesson 1
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[36%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-auto">
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
                          <div className="flex flex-row gap-4 h-16 md:h-auto items-start justify-start w-auto">
                            <div className="flex flex-col items-center justify-start w-auto">
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
                  </div>
                  <div className="h-px relative w-full">
                    <Line className="bg-gray-300_01 h-px m-auto w-full" />
                    <Line className="absolute bg-gray-300_01 h-px inset-[0] justify-center m-auto w-full" />
                  </div>
                </div>
                <Text
                  className="ml-1 md:ml-[0] mt-[65px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtInterRegular36"
                >
                  <span className="text-black-900 font-inter text-left font-normal">
                    1{" "}
                  </span>
                  <span className="text-black-900 font-inter text-left font-normal">
                    {" "}
                    これ/それ/あれ
                  </span>
                </Text>
                <div className="h-[413px] md:h-[422px] mt-[9px] relative w-[96%] md:w-full">
                  <Line className="absolute bg-gray-600_02 bottom-[2%] h-px inset-x-[0] mx-auto w-full" />
                  <Text
                    className="absolute h-full inset-y-[0] leading-[50.00px] left-[5%] my-auto text-black-900 text-xs"
                    size="txtInterRegular12"
                  >
                    <>
                      これ」 「それ」 và 「あれ」 là những đại từ chỉ thị. Về
                      mặt ngữ pháp chúng được dùng như những danh từ.
                      <br />
                      「これ」 dùng để chỉ một vật ở gần người nói.
                      <br />
                      「それ」 dùng để chỉ một vật ở gần người nghe.
                      <br />
                      「あれ」 dùng để chỉ một vật ở xa người nói và người nghe.
                      <br />
                      それはじしょですか。
                      <br />
                      Đó có phải là quyển từ điển không ?<br />
                      これをください。
                      <br />
                      Cho tôi cái này.
                    </>
                  </Text>
                </div>
                <a
                  href="http://hoctiengnhat.is-great.net/index.php?con=minna#grammar"
                  className="leading-[50.00px] md:ml-[0] ml-[27px] mt-2.5 text-black-900 text-xs w-[73%] sm:w-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text size="txtInterRegular12">
                    flowthis link design :
                    http://hoctiengnhat.is-great.net/index.php?con=minna#grammar
                  </Text>
                </a>
                <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[5px] mt-[277px] w-full">
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
    </>
  );
};

export default DashboardAdminreadOnePage;

import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const DashboardAdminThreePage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-segoeui md:gap-10 items-start justify-between max-w-[1304px] mx-auto md:px-5 w-full">
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
                    My Classes
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
            <div className="flex md:flex-1 flex-col font-inter gap-[50px] items-center justify-start md:mt-0 mt-[70px] w-[68%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                  size="txtInterBold30"
                >
                  My Classes
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[54%] md:w-full">
                    <Text
                      className="ml-0.5 md:ml-[0] text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      SSC Finance 1st class
                    </Text>
                    <div className="bg-black-900 flex flex-col items-center justify-start py-[52px] w-full">
                      <Img
                        className="h-[258px] md:h-auto object-cover w-full"
                        src="images/img_rectangle42_3.png"
                        alt="rectangleFortyTwo"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start md:mt-0 mt-[38px] w-[42%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        N5 classes
                      </Text>
                      <div className="bg-gray-900_02 flex flex-col gap-3 justify-end mt-2 py-1.5 rounded-md w-full">
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[21px] mr-[123px] mt-0.5">
                          <Text
                            className="text-base text-white-A700"
                            size="txtInterMedium16"
                          >
                            01. N5 1st class introduction
                          </Text>
                          <Text
                            className="mt-[3px] text-[8px] text-white-A700"
                            size="txtInterRegular8"
                          >
                            1 h 45 min video time
                          </Text>
                        </div>
                        <Input
                          name="language"
                          placeholder="Why learn japanese"
                          className="font-medium p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="w-full"
                          shape="round"
                          color="blue_gray_400_01"
                          size="sm"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="bg-gray-900_02 flex flex-col items-start justify-start mt-[15px] p-2.5 rounded-md w-full">
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px]">
                          <Text
                            className="text-base text-white-A700"
                            size="txtInterMedium16"
                          >
                            02. SSC Finance 1st class
                          </Text>
                          <Text
                            className="text-[8px] text-white-A700"
                            size="txtInterRegular8"
                          >
                            1 h 45 min video time
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-900_02 flex flex-col items-start justify-start mt-4 p-2.5 rounded-md w-full">
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px]">
                          <Text
                            className="text-base text-white-A700"
                            size="txtInterMedium16"
                          >
                            03. SSC Finance 1st class
                          </Text>
                          <Text
                            className="text-[8px] text-white-A700"
                            size="txtInterRegular8"
                          >
                            1 h 45 min video time
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_02 flex flex-col items-start justify-start p-2.5 rounded-md w-full">
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px]">
                        <Text
                          className="text-base text-white-A700"
                          size="txtInterMedium16"
                        >
                          04. SSC Finance 1st class
                        </Text>
                        <Text
                          className="text-[8px] text-white-A700"
                          size="txtInterRegular8"
                        >
                          1 h 45 min video time
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[9px] w-full">
                  <Button
                    className="cursor-pointer font-medium md:mt-0 mt-[19px] text-center text-sm w-[100px]"
                    shape="round"
                    color="indigo_A400"
                    size="sm"
                    variant="fill"
                  >
                    Previous
                  </Button>
                  <Button
                    className="cursor-pointer font-medium md:ml-[0] ml-[268px] md:mt-0 mt-[19px] text-center text-sm w-[100px]"
                    shape="round"
                    color="indigo_A400"
                    size="sm"
                    variant="fill"
                  >
                    Next
                  </Button>
                  <div className="bg-gray-900_02 flex md:flex-1 flex-col items-start justify-start ml-12 md:ml-[0] p-2.5 rounded-md w-[42%] md:w-full">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px]">
                      <Text
                        className="text-base text-white-A700"
                        size="txtInterMedium16"
                      >
                        05. SSC Finance 1st class
                      </Text>
                      <Text
                        className="text-[8px] text-white-A700"
                        size="txtInterRegular8"
                      >
                        1 h 45 min video time
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_02 flex flex-col items-start justify-start md:ml-[0] ml-[516px] mt-4 p-2.5 rounded-md w-[42%] md:w-full">
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px]">
                    <Text
                      className="text-base text-white-A700"
                      size="txtInterMedium16"
                    >
                      06. SSC Finance 1st class
                    </Text>
                    <Text
                      className="text-[8px] text-white-A700"
                      size="txtInterRegular8"
                    >
                      1 h 45 min video time
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

export default DashboardAdminThreePage;

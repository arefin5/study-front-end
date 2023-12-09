import React from "react";

import { Button, CheckBox, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const DashboardAdminTwoPage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-segoeui md:gap-10 items-start justify-between max-w-[1265px] mx-auto md:px-5 w-full">
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
              <div className="md:h-[1306px] h-[436px] mb-[902px] relative w-full">
                <div className="absolute bg-blue_gray-100_03 h-[42px] inset-x-[0] mx-auto top-[40%] w-full"></div>
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
            <div className="flex md:flex-1 flex-col font-inter md:gap-10 gap-[84px] justify-start md:mt-0 mt-[59px] w-[57%] md:w-full">
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[191px]">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                  size="txtInterBold30"
                >
                  Student Document
                </Text>
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Name:
                  </Text>
                  <div className="h-[42px] relative w-[528px] sm:w-full">
                    <div className="h-[42px] my-auto shadow-bs w-[61%]"></div>
                    <Input
                      name="content"
                      placeholder="Name"
                      className="!placeholder:text-blue_gray-300 !text-blue_gray-300 justify-center p-0 text-base text-left w-full"
                      wrapClassName="absolute border border-blue_gray-300_01 border-solid inset-[0] m-auto w-full"
                      type="text"
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Student NID:
                  </Text>
                  <div className="flex flex-col items-center justify-start rounded-md shadow-bs w-[528px] sm:w-full">
                    <div className="bg-white-A700 border border-blue_gray-300_01 border-solid flex flex-col items-center justify-start px-3 py-[9px] rounded-md w-full">
                      <Text
                        className="text-base text-blue_gray-300_01 w-auto"
                        size="txtInterRegular16"
                      >
                        NID Number
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Branch:
                  </Text>
                  <div className="flex flex-col items-center justify-start rounded-md shadow-bs w-[528px] sm:w-full">
                    <div className="bg-white-A700 border border-blue_gray-300_01 border-solid flex flex-col items-center justify-start px-3 py-[9px] rounded-md w-full">
                      <Text
                        className="text-base text-blue_gray-300_01 w-auto"
                        size="txtInterRegular16"
                      >
                        NID Number
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start w-auto sm:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Account type:
                  </Text>
                  <div className="flex flex-row gap-6 items-center justify-start w-auto sm:w-full">
                    <CheckBox
                      className="font-medium text-left text-sm"
                      inputClassName="border border-indigo-A400 border-solid h-4 mr-[5px] w-4"
                      name="label"
                      id="label"
                      label="Paid"
                      color="indigo_A400"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium text-left text-sm"
                      inputClassName="border border-blue_gray-100_01 border-solid h-4 mr-[5px] w-4"
                      name="label_One"
                      id="label_One"
                      label="Income"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium text-left text-sm"
                      inputClassName="border border-blue_gray-100_01 border-solid h-4 mr-[5px] w-4"
                      name="label_Two"
                      id="label_Two"
                      label="Buy"
                    ></CheckBox>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Mark Sheet SSC:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_One"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Mark Sheet HSC:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_Two"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Mark Sheet Hns:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_Three"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Bank Statement:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_Four"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Tax Certificate:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_Five"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Academic Certificate:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_Six"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Academic Certificate SSC:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_Seven"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Academic Certificate HSC:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_Eight"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Academic Certificate Hns:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_Nine"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Registration Card SSC:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_Ten"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Registration Card HSC:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_Eleven"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Registration Card Hns:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_Twelve"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Bank Solvency Certificate:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_Thirteen"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Student Passport Copy:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="md"
                      variant="fill"
                    >
                      CHOOSE FILE
                    </Button>
                    <Input
                      name="content_Fourteen"
                      placeholder="No file chosen"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-400 border-solid rounded-br-md rounded-tr-md w-[78%] sm:w-full"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
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

export default DashboardAdminTwoPage;

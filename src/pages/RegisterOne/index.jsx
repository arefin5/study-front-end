import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";
import HOMENavbar from "components/HOMENavbar";

import { CloseSVG } from "../../assets/images";

const RegisterOnePage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat h-[257px] sm:h-[421px] relative w-full"
              style={{ backgroundImage: "url('images/img_frame6.png')" }}
            >
              <Img
                className="absolute h-[257px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_rectangle.png"
                alt="rectangle"
              />
              <Text
                className="absolute bottom-[23%] left-[33%] sm:text-[40px] md:text-[46px] text-[54px] text-center text-white-A700"
                size="txtInterRegular54"
              >
                Guest Singup
              </Text>
              <div className="absolute bg-blue_gray-900_90 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-[172px] w-full">
                <HOMENavbar
                  className="bg-blue_gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-3.5 w-full"
                  logoimage="images/img_logo.png"
                  blogtext="BLOG"
                  dashboardtext="DASHBOARD"
                  registertext="REGISTER"
                  guestregistrationtext="guest registration"
                  logintext="LOGIN"
                  joinfreebutton="Join Free"
                />
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-end mt-12 md:px-10 sm:px-5 px-[511px] w-full">
          <Text
            className="sm:text-[40px] md:text-[46px] text-[54px] text-black-900 text-center"
            size="txtInterRegular54Black900"
          >
            Guest Sing up
          </Text>
        </div>
        <div className="flex flex-col items-center mt-[13px] w-full">
          <div className="flex flex-col gap-[38px] items-center justify-start md:px-5 w-[51%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col font-segoeui gap-[9px] items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-sm"
                    size="txtSegoeUI14"
                  >
                    Name
                  </Text>
                  <Input
                    name="groupTwentyFive"
                    placeholder="Your Name"
                    className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                    wrapClassName="rounded-lg w-full"
                    type="text"
                    shape="round"
                    color="blue_gray_100_03"
                    size="md"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex flex-col font-segoeui gap-1.5 items-start justify-start mt-2.5 w-full">
                  <Text
                    className="text-blue_gray-900 text-sm"
                    size="txtSegoeUI14"
                  >
                    Phone
                  </Text>
                  <Input
                    name="groupTwentySix"
                    placeholder="Your Number"
                    className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                    wrapClassName="rounded-lg w-full"
                    type="number"
                    shape="round"
                    color="blue_gray_100_03"
                    size="sm"
                    variant="outline"
                  ></Input>
                </div>
                <Text
                  className="ml-1.5 md:ml-[0] mt-[15px] text-black-900 text-sm"
                  size="txtInterRegular14Black900"
                >
                  email
                </Text>
                <Input
                  name="group169"
                  placeholder="Your Number"
                  className="font-segoeui p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="ml-0.5 md:ml-[0] mt-[3px] rounded-lg w-full"
                  type="number"
                  shape="round"
                  color="blue_gray_100_03"
                  size="sm"
                  variant="outline"
                ></Input>
                <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start mt-[15px] w-[83%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[5px] text-base text-black-900"
                    size="txtInterRegular16Black900"
                  >
                    last Education details
                  </Text>
                  <Text
                    className="mb-[5px] md:ml-[0] ml-[81px] text-base text-black-900"
                    size="txtInterRegular16Black900"
                  >
                    Year
                  </Text>
                  <Text
                    className="mb-[5px] md:ml-[0] ml-[247px] text-base text-black-900"
                    size="txtInterRegular16Black900"
                  >
                    GPA/CGPA
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row font-inter md:gap-5 items-center justify-start w-[99%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[68px] items-start justify-start p-0.5"
                    style={{ backgroundImage: "url('images/img_group23.svg')" }}
                  >
                    <Text
                      className="my-[21px] text-base text-black-900"
                      size="txtInterRegular16Black900"
                    >
                      HSC
                    </Text>
                  </div>
                  <Img
                    className="h-[68px] md:ml-[0] ml-[42px]"
                    src="images/img_group23.svg"
                    alt="group167"
                  />
                  <Img
                    className="h-[68px] md:ml-[0] ml-[72px]"
                    src="images/img_group23.svg"
                    alt="group168"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[11px] mt-[25px] text-black-900 text-sm"
                  size="txtInterRegular14Black900"
                >
                  Adress
                </Text>
                <Img
                  className="h-[68px] mt-2.5"
                  src="images/img_group23.svg"
                  alt="group166"
                />
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[68px] items-end justify-end p-[18px]"
              style={{ backgroundImage: "url('images/img_group22.svg')" }}
            >
              <Text
                className="mr-[290px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterRegular24"
              >
                submit
              </Text>
            </div>
          </div>
          <div className="bg-deep_orange-900 flex flex-col font-segoeui items-center justify-start mt-[25px] p-[73px] md:px-10 sm:px-5 w-full">
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
          <Footer className="bg-gray-300_01 flex font-segoeui items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default RegisterOnePage;

import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import HOMENavbar from "components/HOMENavbar";

import { CloseSVG } from "../../assets/images";

const NewsPage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-segoeui items-center justify-start mx-auto w-full">
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
            <div className="absolute bottom-[18%] flex flex-col gap-[5px] inset-x-[0] items-center justify-start mx-auto w-[89%]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
                size="txtSegoeUIBold36WhiteA700"
              >
                Our Latest News
              </Text>
              <Line className="bg-blue_gray-50 h-px w-full" />
            </div>
            <div className="absolute bg-blue_gray-900_90 flex flex-col font-inter h-max inset-[0] items-center justify-center m-auto pb-[172px] w-full">
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
        <div className="bg-blue_gray-100 flex flex-col items-start justify-end p-[18px] w-full">
          <div className="flex flex-row gap-[19px] items-center justify-start md:ml-[0] ml-[93px] mt-[3px] md:px-5 w-[11%] md:w-full">
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
        <div className="flex flex-col gap-[5px] items-center justify-start max-w-7xl mt-[215px] mx-auto md:px-5 w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500"
            size="txtSegoeUIBold36"
          >
            Our Latest News
          </Text>
          <Line className="bg-blue_gray-50 h-px w-full" />
        </div>
        <div className="bg-deep_orange-900 flex flex-col items-center justify-start mt-[405px] p-[73px] md:px-10 sm:px-5 w-full">
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
        <Footer className="bg-gray-300_01 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default NewsPage;

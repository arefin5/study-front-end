import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const JoinFreeSeminarPage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header1 className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        </div>
        <Text
          className="md:ml-[0] ml-[182px] mt-[76px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
          size="txtInterBold36"
        >
          Join Free Seminar{" "}
        </Text>
        <div className="flex flex-col font-segoeui items-center mt-8 w-full">
          <Img
            className="h-[601px] md:h-auto max-w-[1143px] mx-auto object-cover w-full"
            src="images/img_screenshot81.png"
            alt="screenshotEightyOne"
          />
          <div className="bg-deep_orange-900 flex flex-col items-center justify-start mt-[152px] p-[73px] md:px-10 sm:px-5 w-full">
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
      </div>
    </>
  );
};

export default JoinFreeSeminarPage;

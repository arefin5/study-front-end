import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const ContactPage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-segoeui items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col md:gap-10 gap-[83px] items-center justify-start max-w-7xl mt-[79px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[11px] items-center justify-start">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
              size="txtSegoeUI36"
            >
              We are always eager to hear from you!
            </Text>
            <Text
              className="leading-[28.00px] text-blue_gray-900 text-center text-xl"
              size="txtSegoeUI20"
            >
              <>
                We’re here to help and answer any question you might have.
                <br />
                We look forward to hearing from you!
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-3.5 items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
              size="txtSegoeUI24"
            >
              Fill the form below so we can get to know you and your needs
              better.
            </Text>
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[62px] items-center justify-start p-[22px] sm:px-5 rounded-[16px] shadow-bs3 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start mb-[9px] md:ml-[0] ml-[9px] w-1/2 md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-sm"
                    size="txtSegoeUI14"
                  >
                    Name
                  </Text>
                  <Input
                    name="groupTen"
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
                <div className="flex flex-col gap-2 items-start justify-start mt-4 w-full">
                  <Text
                    className="text-blue_gray-900 text-sm"
                    size="txtSegoeUI14"
                  >
                    Phone
                  </Text>
                  <Input
                    name="groupEleven"
                    placeholder="Your Number"
                    className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                    wrapClassName="rounded-lg w-full"
                    type="number"
                    shape="round"
                    color="blue_gray_100_03"
                    size="md"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start mt-4 w-full">
                  <Text
                    className="text-blue_gray-900 text-sm"
                    size="txtSegoeUI14"
                  >
                    Email
                  </Text>
                  <Input
                    name="groupTwelve"
                    placeholder="Email"
                    className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                    wrapClassName="rounded-lg w-full"
                    type="email"
                    shape="round"
                    color="blue_gray_100_03"
                    size="md"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start mt-[18px] w-full">
                  <Text
                    className="text-blue_gray-900 text-sm"
                    size="txtSegoeUI14"
                  >
                    Massage
                  </Text>
                  <TextArea
                    className="bg-transparent border border-blue_gray-100_03 border-solid pb-[35px] pl-[18px] sm:pr-5 pr-[35px] pt-4 rounded-lg text-base placeholder:text-gray-500 text-gray-500 text-left w-full"
                    name="groupThirteen"
                    placeholder="Write massage"
                  ></TextArea>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[608px] md:min-w-full mt-12 rounded-lg text-center text-sm"
                  shape="round"
                  color="deep_purple_A400"
                  size="md"
                  variant="fill"
                >
                  REGISTER
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col gap-[53px] items-start justify-start w-[29%] md:w-full">
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px] w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                    <div className="flex flex-row gap-3.5 items-start justify-start w-[38%] md:w-full">
                      <Img
                        className="h-7 mt-0.5 w-[27px]"
                        src="images/img_locationmarker.svg"
                        alt="locationmarker"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtSegoeUIBold24"
                      >
                        Address
                      </Text>
                    </div>
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtSegoeUI16"
                    >
                      Suite 11, 41 Rickard Road, Bankstown, NSW-1000
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[77%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[69%] md:w-full">
                      <Img
                        className="h-[34px] w-[34px]"
                        src="images/img_phonemissedcall.svg"
                        alt="phonemissedcall"
                      />
                      <Text
                        className="mt-0.5 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtSegoeUIBold24"
                      >
                        Contact Info
                      </Text>
                    </div>
                    <Text
                      className="ml-0.5 md:ml-[0] text-base text-blue_gray-900"
                      size="txtSegoeUI16"
                    >
                      Call Us: +61 422 528 597
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] text-base text-blue_gray-900"
                      size="txtSegoeUI16"
                    >
                      Email: dev.moniruzzaman@gmail.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-3/4 md:w-full">
                  <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-start w-[97%] md:w-full">
                      <Img
                        className="h-[35px] w-9"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="mt-1 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtSegoeUIBold24"
                      >
                        Hour of Operation
                      </Text>
                    </div>
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtSegoeUI16"
                    >
                      Monday - Friday: 10:00am - 06:00pm
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[5px] items-center justify-start max-w-7xl mt-[91px] mx-auto md:px-5 w-full">
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
        <Footer className="bg-blue_gray-100_03 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;

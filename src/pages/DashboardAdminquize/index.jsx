import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const DashboardAdminquizePage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[11px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header1 className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-segoeui md:gap-10 items-start justify-between max-w-[1181px] mx-auto md:px-5 w-full">
            <div className="bg-gray-100 flex md:flex-1 flex-col gap-[33px] items-center justify-start py-[21px] w-[28%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                <Img
                  className="h-[117px] md:h-auto object-cover rounded-[58px] w-[68%] sm:w-full"
                  src="images/img_ellipse124_117x100.png"
                  alt="ellipse124"
                />
                <Text
                  className="mt-[19px] text-blue_gray-900 text-xl"
                  size="txtSegoeUI20"
                >
                  Md Rafiqul Islam
                </Text>
                <Text
                  className="mt-2 text-gray-800 text-sm"
                  size="txtSegoeUI14Gray800"
                >
                  Dhaka, Bangladesh
                </Text>
              </div>
              <div className="md:h-[1052px] h-[528px] mb-[562px] relative w-full">
                <div className="absolute bg-blue_gray-100_03 h-[49px] inset-x-[0] mx-auto top-[19%] w-full"></div>
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
            <div className="flex md:flex-1 flex-col font-inter items-center justify-start md:mt-0 mt-[67px] w-[52%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                  size="txtInterBold30"
                >
                  Exam Test Selection
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mt-[135px] w-[99%] md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
                  size="txtInterMedium30"
                >
                  Select your Test skill
                </Text>
                <Button
                  className="cursor-pointer min-w-[598px] md:min-w-full mt-[23px] rounded-[10px] text-4xl sm:text-[32px] md:text-[34px] text-center"
                  color="blue_gray_100_03"
                  size="lg"
                  variant="outline"
                >
                  N5 Vocabulary Test
                </Button>
                <Button
                  className="cursor-pointer min-w-[598px] md:min-w-full mt-2 rounded-[10px] text-4xl sm:text-[32px] md:text-[34px] text-center"
                  color="blue_gray_100_03"
                  size="lg"
                  variant="outline"
                >
                  N5 Grammer Test
                </Button>
                <Button
                  className="cursor-pointer min-w-[598px] md:min-w-full mt-2 rounded-[10px] text-4xl sm:text-[32px] md:text-[34px] text-center"
                  color="blue_gray_100_03"
                  size="lg"
                  variant="outline"
                >
                  N5 Reading Test
                </Button>
                <Button
                  className="cursor-pointer min-w-[598px] md:min-w-full mt-2 rounded-[10px] text-4xl sm:text-[32px] md:text-[34px] text-center"
                  color="blue_gray_100_03"
                  size="lg"
                  variant="outline"
                >
                  N5 Kanji Test
                </Button>
              </div>
              <Button
                className="cursor-pointer min-w-[598px] md:min-w-full mt-[21px] rounded-[10px] text-4xl sm:text-[32px] md:text-[34px] text-center"
                color="blue_gray_100_03"
                size="lg"
                variant="outline"
              >
                N5 Full Test 1
              </Button>
              <Button
                className="cursor-pointer min-w-[598px] md:min-w-full mt-[21px] rounded-[10px] text-4xl sm:text-[32px] md:text-[34px] text-center"
                color="blue_gray_100_03"
                size="lg"
                variant="outline"
              >
                N5 Full Test 2
              </Button>
            </div>
          </div>
          <Footer className="bg-gray-300_01 flex font-segoeui items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DashboardAdminquizePage;

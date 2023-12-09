import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const DashboardAdminOnePage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <Img
              className="h-[50px] md:h-auto ml-12 md:ml-[0] md:mt-0 my-[17px] rounded-[50%] w-[50px]"
              src="images/img_logo.png"
              alt="logo"
            />
            <ul className="flex md:flex-1 md:flex-col flex-row gap-[15px] sm:hidden items-center justify-end mb-[33px] md:ml-[0] ml-[198px] md:mt-0 mt-9 w-auto md:w-full common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="text-[11px] text-blue_gray-900"
                >
                  <Text size="txtInterMedium11">dgf</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="text-[11px] text-blue_gray-900"
                >
                  <Text size="txtInterMedium11">STUDY-SETTLE-JAPAN</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="text-[11px] text-blue_gray-900"
                >
                  <Text size="txtInterMedium11">BLOG</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="text-[11px] text-blue_gray-900"
                >
                  <Text size="txtInterMedium11">CONTACT US</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="text-[11px] text-blue_gray-900"
                >
                  <Text size="txtInterMedium11">DASHBOARD</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="text-[11px] text-blue_gray-900"
                >
                  <Text size="txtInterMedium11">REGISTER</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="text-[11px] text-blue_gray-900 uppercase"
                >
                  <Text size="txtInterMedium11">guest registration</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="text-[11px] text-blue_gray-900"
                >
                  <Text size="txtInterMedium11">LOGIN</Text>
                </a>
              </li>
            </ul>
            <Button
              className="cursor-pointer font-medium min-w-[96px] ml-32 md:ml-[0] md:mt-0 my-[23px] text-center text-sm"
              shape="round"
              color="indigo_A400"
              size="sm"
              variant="fill"
            >
              Join Free
            </Button>
            <Input
              name="formfieldstext"
              placeholder="Search..."
              value={formfieldstextvalue}
              onChange={(e) => setFormfieldstextvalue(e)}
              className="p-0 placeholder:text-gray-600 text-left text-sm w-full"
              wrapClassName="border border-blue_gray-100_01 border-solid flex md:flex-1 md:ml-[0] md:mt-0 mx-3.5 my-[23px] shadow-bs w-[267px] md:w-full"
              suffix={
                formfieldstextvalue?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer h-5 ml-[35px] my-auto"
                    onClick={() => setFormfieldstextvalue("")}
                    fillColor="#6b7280"
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                ) : (
                  <Img
                    className="cursor-pointer h-5 ml-[35px] my-auto"
                    src="images/img_search.svg"
                    alt="search"
                  />
                )
              }
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            ></Input>
          </header>
          <div className="flex md:flex-col flex-row font-segoeui md:gap-10 items-center justify-between max-w-[1282px] mx-auto md:px-5 w-full">
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
              <div className="md:h-[3537px] h-[528px] mb-[3047px] relative w-full">
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
                    Certificates
                  </Text>
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtSegoeUI14"
                  >
                    Audio
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
            <div className="flex md:flex-1 flex-col font-inter gap-[58px] items-center justify-start w-[63%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                  size="txtInterBold30"
                >
                  Certificates
                </Text>
              </div>
              <div className="flex flex-col gap-[47px] items-center justify-start w-full">
                <Img
                  className="h-[1131px] md:h-auto object-cover w-full"
                  src="images/img_certificate01.png"
                  alt="certificateOne"
                />
                <Img
                  className="h-[1131px] md:h-auto object-cover w-full"
                  src="images/img_chertificate201.png"
                  alt="chertificate201"
                />
                <Img
                  className="h-[1131px] md:h-auto object-cover w-full"
                  src="images/img_certificate03.png"
                  alt="certificateThree"
                />
              </div>
            </div>
          </div>
          <Footer className="bg-gray-300_01 flex font-segoeui items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DashboardAdminOnePage;

import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import HOMENavbar from "components/HOMENavbar";

import { CloseSVG } from "../../assets/images";

const HOME1Page = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto pb-[7px] w-full">
        <div className="flex flex-col items-center w-full">
          <HOMENavbar
            className="bg-blue-100 flex md:flex-col flex-row md:gap-10 gap-[141px] items-center justify-start w-full"
            hometext="call"
            studysettext="whats App"
            contactustext="Fix online Seminar"
          />
          <header className="bg-blue_gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full">
            <Img
              className="h-[50px] md:h-auto ml-12 sm:ml-[0] sm:mt-0 my-[17px] rounded-[50%] w-[50px]"
              src="images/img_logo.png"
              alt="logo"
            />
            <ul className="flex md:flex-1 md:flex-col flex-row gap-[15px] md:hidden items-center justify-end mb-[33px] sm:ml-[0] ml-[190px] sm:mt-0 mt-9 w-auto md:w-full common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="text-[11px] text-blue_gray-900"
                >
                  <Text size="txtInterMedium11">HOME</Text>
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
              className="cursor-pointer font-medium min-w-[96px] sm:ml-[0] ml-[120px] sm:mt-0 my-[23px] text-center text-sm"
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
              wrapClassName="border border-blue_gray-100_01 border-solid flex sm:flex-1 ml-3.5 sm:ml-[0] sm:mt-0 my-[23px] shadow-bs w-[257px] sm:w-full"
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
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="h-[828px] mx-auto overflow-auto w-full">
              <Img
                className="absolute h-[828px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_rectangle34.png"
                alt="rectangleThirtyFour"
              />
              <Button
                className="absolute flex h-12 items-center justify-center left-[1%] top-[39%] w-12"
                shape="circle"
                color="gray_100"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_chevronleft.svg"
                  alt="chevronleft"
                />
              </Button>
              <Button
                className="absolute flex h-12 items-center justify-center right-[0] rotate-[180deg] top-[39%] w-12"
                shape="circle"
                color="gray_100"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_chevronleft_gray_900.svg"
                  alt="chevronleft_One"
                />
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[-33px] mx-auto w-[91%] z-[1]"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-col items-center justify-start sm:ml-[0] outline outline-[0.5px] outline-gray-200 p-[19px] w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[96%] md:w-full">
                  <Img
                    className="h-[79px] md:h-auto object-cover w-[29%] sm:w-full"
                    src="images/img_rectangle36.png"
                    alt="rectangleThirtySix"
                  />
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-[3px]">
                    <Text
                      className="ml-0.5 md:ml-[0] text-blue_gray-900 text-xl"
                      size="txtAbhayaLibreBold20"
                    >
                      UK – EUROPE – USA
                    </Text>
                    <Text
                      className="leading-[24.00px] text-base text-blue_gray-900"
                      size="txtArialMT16"
                    >
                      <>
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipisicing elit. Nisi facilis
                        <br />
                        cumque nam ipsam laborum porro
                        <br />
                        nostrum ipsum
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start sm:ml-[0] outline outline-[0.5px] outline-gray-200 p-[19px] w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[96%] md:w-full">
                  <Img
                    className="h-[79px] md:h-auto object-cover w-[29%] sm:w-full"
                    src="images/img_rectangle36.png"
                    alt="rectangleThirtySix"
                  />
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-0.5">
                    <Text
                      className="ml-0.5 md:ml-[0] text-blue_gray-900 text-xl"
                      size="txtAbhayaLibreBold20"
                    >
                      New movie is released!
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-0.5 text-base text-blue_gray-900"
                      size="txtArialMT16"
                    >
                      <>
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipisicing elit. Nisi facilis
                        <br />
                        cumque nam ipsam laborum porro
                        <br />
                        nostrum ipsum
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start sm:ml-[0] outline outline-[0.5px] outline-gray-200 p-[19px] w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[96%] md:w-full">
                  <Img
                    className="h-[79px] md:h-auto object-cover w-[29%] sm:w-full"
                    src="images/img_rectangle36.png"
                    alt="rectangleThirtySix"
                  />
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-1">
                    <Text
                      className="text-blue_gray-900 text-xl"
                      size="txtAbhayaLibreBold20"
                    >
                      Japan is released!
                    </Text>
                    <Text
                      className="leading-[24.00px] text-base text-blue_gray-900"
                      size="txtArialMT16"
                    >
                      <>
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipisicing elit. Nisi facilis
                        <br />
                        cumque nam ipsam laborum porro
                        <br />
                        nostrum ipsum
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col font-segoeui items-center justify-start max-w-[1292px] mt-[113px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[11px] items-center justify-start">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-red-500"
                size="txtSegoeUIBold36"
              >
                OUR SERVICES
              </Text>
              <Text
                className="leading-[24.00px] text-base text-blue_gray-900 text-center w-full"
                size="txtArialMT16"
              >
                Now that you have clapped your eyes on a specific program to be
                studied, the further processes involved in gaining admission
                might seem to you like an uphill battle. But not anymore because
                OASIS Global Education has it all covered for you!
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[94px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="gap-3 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[19px] px-[19px] rounded-[16px] shadow-bs1 w-full">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-[35%] sm:w-full"
                      src="images/img_rectangle36.png"
                      alt="rectangleThirtySix"
                    />
                    <Text
                      className="leading-[26.00px] mt-[34px] text-blue_gray-900 text-center text-xl"
                      size="txtSegoeUISemibold20"
                    >
                      <>
                        BEST COUNSELLING
                        <br />
                        SERVICE!
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[9px] text-base text-blue_gray-900 text-center w-[95%] sm:w-full"
                      size="txtSegoeUI16"
                    >
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters.
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[19px] px-[19px] rounded-[16px] shadow-bs1 w-full">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-[35%] sm:w-full"
                      src="images/img_rectangle36.png"
                      alt="rectangleThirtySix"
                    />
                    <Text
                      className="leading-[26.00px] mt-[34px] text-blue_gray-900 text-center text-xl"
                      size="txtSegoeUISemibold20"
                    >
                      <>
                        BEST COUNSELLING
                        <br />
                        SERVICE!
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[9px] text-base text-blue_gray-900 text-center w-[95%] sm:w-full"
                      size="txtSegoeUI16"
                    >
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters.
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[19px] px-[19px] rounded-[16px] shadow-bs1 w-full">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-[35%] sm:w-full"
                      src="images/img_rectangle36.png"
                      alt="rectangleThirtySix"
                    />
                    <Text
                      className="leading-[26.00px] mt-[34px] text-blue_gray-900 text-center text-xl"
                      size="txtSegoeUISemibold20"
                    >
                      <>
                        BEST COUNSELLING
                        <br />
                        SERVICE!
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[9px] text-base text-blue_gray-900 text-center w-[95%] sm:w-full"
                      size="txtSegoeUI16"
                    >
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters.
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[19px] px-[19px] rounded-[16px] shadow-bs1 w-full">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-[35%] sm:w-full"
                      src="images/img_rectangle36.png"
                      alt="rectangleThirtySix"
                    />
                    <Text
                      className="leading-[26.00px] mt-[34px] text-blue_gray-900 text-center text-xl"
                      size="txtSegoeUISemibold20"
                    >
                      <>
                        BEST COUNSELLING
                        <br />
                        SERVICE!
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[9px] text-base text-blue_gray-900 text-center w-[95%] sm:w-full"
                      size="txtSegoeUI16"
                    >
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters.
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[19px] px-[19px] rounded-[16px] shadow-bs1 w-full">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-[35%] sm:w-full"
                      src="images/img_rectangle36.png"
                      alt="rectangleThirtySix"
                    />
                    <Text
                      className="leading-[26.00px] mt-[34px] text-blue_gray-900 text-center text-xl"
                      size="txtSegoeUISemibold20"
                    >
                      <>
                        BEST COUNSELLING
                        <br />
                        SERVICE!
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[9px] text-base text-blue_gray-900 text-center w-[95%] sm:w-full"
                      size="txtSegoeUI16"
                    >
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters.
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[19px] px-[19px] rounded-[16px] shadow-bs1 w-full">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-[35%] sm:w-full"
                      src="images/img_rectangle36.png"
                      alt="rectangleThirtySix"
                    />
                    <Text
                      className="leading-[26.00px] mt-[34px] text-blue_gray-900 text-center text-xl"
                      size="txtSegoeUISemibold20"
                    >
                      <>
                        BEST COUNSELLING
                        <br />
                        SERVICE!
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[9px] text-base text-blue_gray-900 text-center w-[95%] sm:w-full"
                      size="txtSegoeUI16"
                    >
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters.
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[19px] px-[19px] rounded-[16px] shadow-bs1 w-full">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-[35%] sm:w-full"
                      src="images/img_rectangle36.png"
                      alt="rectangleThirtySix"
                    />
                    <Text
                      className="leading-[26.00px] mt-[34px] text-blue_gray-900 text-center text-xl"
                      size="txtSegoeUISemibold20"
                    >
                      <>
                        BEST COUNSELLING
                        <br />
                        SERVICE!
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[9px] text-base text-blue_gray-900 text-center w-[95%] sm:w-full"
                      size="txtSegoeUI16"
                    >
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters.
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pb-[19px] px-[19px] rounded-[16px] shadow-bs1 w-full">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-[35%] sm:w-full"
                      src="images/img_rectangle36.png"
                      alt="rectangleThirtySix"
                    />
                    <Text
                      className="leading-[26.00px] mt-[34px] text-blue_gray-900 text-center text-xl"
                      size="txtSegoeUISemibold20"
                    >
                      <>
                        BEST COUNSELLING
                        <br />
                        SERVICE!
                      </>
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[9px] text-base text-blue_gray-900 text-center w-[95%] sm:w-full"
                      size="txtSegoeUI16"
                    >
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-col flex-row gap-8 items-center justify-start mt-[159px] md:pr-10 pr-11 sm:pr-5 rounded-[16px] shadow-bs1 w-full">
              <Img
                className="md:flex-1 h-[440px] sm:h-auto object-cover w-[51%] md:w-full"
                src="images/img_rectangle39.png"
                alt="rectangleThirtyNine"
              />
              <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
                  size="txtSegoeUIBold30"
                >
                  WELCOME TO OASIS EDUCATION
                </Text>
                <Text
                  className="mt-2 text-blue_gray-900 text-xl"
                  size="txtSegoeUI20"
                >
                  We Are Eager To Give You Best Education And Style
                </Text>
                <Text
                  className="leading-[24.00px] mt-[5px] text-base text-blue_gray-900"
                  size="txtSegoeUI16"
                >
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    feugiat mauris quis volutpat fermentum. Nunc nec nisi vitae
                    ipsum pharetra tincidunt. Nam vel purus dolor. Aliquam erat
                    volutpat. Donec laoreet iaculis elementum. Aliquam ligula
                    nisi, molestie faucibus tortor quis, vulputate imperdiet
                    turpis. In iaculis arcu et aliquam dapibus. Nulla
                    facilisi.Nunc pellentesque euismod felis id posuere.
                    <br />
                    Nunc maximus aliquet varius. Cras ornare tristique est vel
                    porttitor. Fusce tempor, augue sagittis congue ornare,
                    tortor augue elementum augue, quis egestas nisi ipsum eget
                    urna. Suspendisse vitae lectus quis turpis dapibus euismod
                    eget a metus. Nulla eget nunc purus. Ut egestas et nulla at
                    pretium. Pellentesque sed varius lectus.
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-semibold min-w-[140px] mt-[5px] rounded-[7px] text-center text-sm"
                  shape="round"
                  color="yellow_700"
                  size="md"
                  variant="fill"
                >
                  GET START NOW
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-segoeui gap-[33px] items-center justify-start max-w-7xl mt-[125px] mx-auto md:px-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500"
              size="txtSegoeUIBold36"
            >
              OUR TUTORIAL
            </Text>
            <List
              className="flex flex-col font-inter gap-12 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] text-black-900 text-xl"
                    size="txtInterMedium20"
                  >
                    Tutorials for SSC class 9
                  </Text>
                  <div className="gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <div className="h-[315px] relative w-full">
                      <div className="absolute bg-black-900 h-[315px] inset-[0] justify-center m-auto w-full"></div>
                      <Img
                        className="absolute h-56 inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_rectangle42.png"
                        alt="rectangleFortyTwo"
                      />
                    </div>
                    <div className="h-[315px] relative w-full">
                      <div className="absolute bg-black-900 h-[315px] inset-[0] justify-center m-auto w-full"></div>
                      <Img
                        className="absolute h-56 inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_rectangle42_224x406.png"
                        alt="rectangleFortyTwo_One"
                      />
                    </div>
                    <div className="h-[315px] relative w-full">
                      <div className="absolute bg-black-900 h-[315px] inset-[0] justify-center m-auto w-full"></div>
                      <Img
                        className="absolute h-56 inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_rectangle42_1.png"
                        alt="rectangleFortyTwo_Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] text-black-900 text-xl"
                    size="txtInterMedium20"
                  >
                    Tutorials for SSC class 10
                  </Text>
                  <div className="gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <div className="h-[315px] relative w-full">
                      <div className="absolute bg-black-900 h-[315px] inset-[0] justify-center m-auto w-full"></div>
                      <Img
                        className="absolute h-56 inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_rectangle42_2.png"
                        alt="rectangleFortyTwo"
                      />
                    </div>
                    <div className="h-[315px] relative w-full">
                      <div className="absolute bg-black-900 h-[315px] inset-[0] justify-center m-auto w-full"></div>
                      <Img
                        className="absolute h-56 inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_rectangle42_3.png"
                        alt="rectangleFortyTwo_One"
                      />
                    </div>
                    <div className="h-[315px] relative w-full">
                      <div className="absolute bg-black-900 h-[315px] inset-[0] justify-center m-auto w-full"></div>
                      <Img
                        className="absolute h-56 inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_rectangle42_4.png"
                        alt="rectangleFortyTwo_Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col font-segoeui md:gap-10 gap-[75px] items-center justify-start max-w-7xl mt-[118px] mx-auto md:px-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500"
              size="txtSegoeUIBold36"
            >
              OUR TEAMS
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="gap-16 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="h-64 relative w-full">
                    <Img
                      className="h-64 m-auto object-cover w-full"
                      src="images/img_rectangle53.png"
                      alt="rectangleFiftyThree"
                    />
                    <Text
                      className="absolute bottom-[16%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                      size="txtSegoeUIBold30WhiteA700"
                    >
                      SAJI SAMUEL
                    </Text>
                  </div>
                  <div className="h-64 relative w-full">
                    <Img
                      className="h-64 m-auto object-cover w-full"
                      src="images/img_rectangle53_256x384.png"
                      alt="rectangleFiftyThree"
                    />
                    <Text
                      className="absolute bottom-[15%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                      size="txtSegoeUIBold30WhiteA700"
                    >
                      RAFIQ SAMUEL
                    </Text>
                  </div>
                  <div className="h-64 relative w-full">
                    <Img
                      className="h-64 m-auto object-cover w-full"
                      src="images/img_rectangle53_1.png"
                      alt="rectangleFiftyThree"
                    />
                    <Text
                      className="absolute bottom-[16%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                      size="txtSegoeUIBold30WhiteA700"
                    >
                      RAHIM ALI
                    </Text>
                  </div>
                  <div className="h-64 relative w-full">
                    <Img
                      className="h-64 m-auto object-cover w-full"
                      src="images/img_rectangle53_256x384.png"
                      alt="rectangleFiftyThree"
                    />
                    <Text
                      className="absolute bottom-[16%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                      size="txtSegoeUIBold30WhiteA700"
                    >
                      SAJI RAKIB
                    </Text>
                  </div>
                  <div className="h-64 relative w-full">
                    <Img
                      className="h-64 m-auto object-cover w-full"
                      src="images/img_rectangle53_1.png"
                      alt="rectangleFiftyThree"
                    />
                    <Text
                      className="absolute bottom-[16%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                      size="txtSegoeUIBold30WhiteA700"
                    >
                      RAHAN KHAN
                    </Text>
                  </div>
                  <div className="h-64 relative w-full">
                    <Img
                      className="h-64 m-auto object-cover w-full"
                      src="images/img_rectangle53.png"
                      alt="rectangleFiftyThree"
                    />
                    <Text
                      className="absolute bottom-[16%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                      size="txtSegoeUIBold30WhiteA700"
                    >
                      SAJI SAMUEL
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-arial items-center justify-start mt-40 w-full">
            <div className="h-[444px] md:px-5 relative w-full">
              <Img
                className="h-[444px] m-auto object-cover w-full"
                src="images/img_rectangle54.png"
                alt="rectangleFiftyFour"
              />
              <div className="absolute bg-blue_gray-800_a2 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[94px] md:px-10 sm:px-5 w-[68%]">
                <div className="flex flex-col justify-start my-0.5 w-full">
                  <Img
                    className="h-[100px] md:h-auto md:ml-[0] ml-[336px] rounded-[50%] w-[100px]"
                    src="images/img_ellipse6.png"
                    alt="ellipseSix"
                  />
                  <Text
                    className="leading-[24.00px] mr-7 mt-[21px] text-base text-gray-300 w-[97%] sm:w-full"
                    size="txtArialMT16Gray300"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Praesentium deleniti dolorum iure doloremque ullam eum,
                    consequuntur, laboriosam impedit, natus sunt laborum ab
                    explicabo velit. Nostrum saepe corrupti fuga voluptatem
                    incidunt.
                  </Text>
                  <div className="flex flex-col font-segoeui items-end justify-start md:ml-[0] ml-[713px] mt-[13px]">
                    <Text
                      className="mr-0.5 text-base text-gray-300"
                      size="txtSegoeUIBold16"
                    >
                      Client 1
                    </Text>
                    <Text
                      className="text-base text-gray-300"
                      size="txtSegoeUISemibold16"
                    >
                      Rahim
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-segoeui items-end mt-[127px] md:pl-10 sm:pl-5 pl-[136px] w-full">
          <div className="flex flex-col gap-[5px] items-center justify-start w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500"
              size="txtSegoeUIBold36"
            >
              Our Latest News
            </Text>
            <Line className="bg-blue_gray-50 h-px w-full" />
          </div>
        </div>
        <div className="flex flex-col font-segoeui items-center mt-[659px] w-full">
          <div className="bg-deep_orange-900 flex flex-col items-center justify-start p-[73px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1046px] mb-1.5 mx-auto w-full">
              <div className="flex flex-col justify-start">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                  size="txtSegoeUIBold36WhiteA700"
                >
                  SUBSCRIBE FOR OUR BLOGS
                </Text>
                <Text
                  className="ml-3 md:ml-[0] text-base text-white-A700"
                  size="txtSegoeUI16WhiteA700"
                >
                  Sign up to receive email updates about courses
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row font-inter items-center justify-evenly w-[30%] md:w-full">
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
          <div className="flex flex-col gap-[5px] items-center justify-start max-w-7xl mt-[88px] mx-auto md:px-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500"
              size="txtSegoeUIBold36"
            >
              Our Latest News
            </Text>
            <Line className="bg-blue_gray-50 h-px w-full" />
          </div>
          <footer className="bg-gray-300_01 flex items-center justify-center mt-[915px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[191px] ml-[102px] mr-[168px] mt-[135px] w-[81%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start w-[18%] md:w-full">
                  <Img
                    className="h-[93px] md:h-auto object-cover w-[34%] sm:w-full"
                    src="images/img_rectangle64.png"
                    alt="rectangleSixtyFour"
                  />
                  <Text
                    className="leading-[20.00px] text-blue_gray-900 text-sm"
                    size="txtSegoeUI14"
                  >
                    <>
                      ACME Industries Ltd.
                      <br />
                      Providing reliable tech since 1992
                    </>
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[82px] justify-start w-[63%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-col gap-[30px] items-start justify-start w-[13%]">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtSegoeUIBold14"
                      >
                        SERVICES
                      </Text>
                      <ul className="flex flex-col items-start justify-start w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-blue_gray-900 text-sm"
                          >
                            <Text size="txtSegoeUI14">Branding</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-[18px] text-blue_gray-900 text-sm"
                          >
                            <Text size="txtSegoeUI14">Design</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-5 text-blue_gray-900 text-sm"
                          >
                            <Text size="txtSegoeUI14">Marketing</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-[15px] text-blue_gray-900 text-sm"
                          >
                            <Text size="txtSegoeUI14">Advertisement</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-7 items-start justify-start w-[10%]">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtSegoeUIBold14"
                      >
                        COMPANY
                      </Text>
                      <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-blue_gray-900 text-sm"
                          >
                            <Text size="txtSegoeUI14">About us</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-[18px] text-blue_gray-900 text-sm"
                          >
                            <Text size="txtSegoeUI14">Contact</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-5 text-blue_gray-900 text-sm"
                          >
                            <Text size="txtSegoeUI14">Jobs</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-[17px] text-blue_gray-900 text-sm"
                          >
                            <Text size="txtSegoeUI14">Press kit</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-7 items-start justify-start w-[12%]">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtSegoeUIBold14"
                      >
                        LEGAL
                      </Text>
                      <ul className="flex flex-col gap-[19px] items-start justify-start w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-blue_gray-900 text-sm"
                          >
                            <Text size="txtSegoeUI14">Terms of use</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-blue_gray-900 text-sm"
                          >
                            <Text size="txtSegoeUI14">Privacy policy</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-blue_gray-900 text-sm"
                          >
                            <Text size="txtSegoeUI14">Cookie policy</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[53px] text-blue_gray-900 text-sm"
                    size="txtSegoeUI14"
                  >
                    Copyright © 2023 - All right reserved by ACME Industries
                    Ltd
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HOME1Page;

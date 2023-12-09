import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header2 from "components/Header2";

import { CloseSVG } from "../../assets/images";

const ABOUTPage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-segoeui items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header2 className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex flex-col items-end mt-[77px] md:pl-10 pl-20 sm:pl-5 w-full">
          <div className="flex relative w-full">
            <div className="flex flex-col items-center justify-start my-auto w-[95%]">
              <div className="flex flex-col md:gap-10 gap-[81px] items-center justify-start w-full">
                <div className="flex flex-col md:gap-10 gap-[134px] items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[16px] shadow-bs1 w-full">
                      <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between w-[99%] md:w-full">
                        <Img
                          className="h-[440px] md:h-auto object-cover"
                          src="images/img_rectangle39_440x626.png"
                          alt="rectangleThirtyNine"
                        />
                        <div className="flex flex-col gap-[37px] items-start justify-start md:mt-0 mt-[27px]">
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900"
                            size="txtSegoeUIBold48"
                          >
                            About Us
                          </Text>
                          <Text
                            className="leading-[24.00px] text-blue_gray-900 text-lg w-full"
                            size="txtSegoeUI18"
                          >
                            The country of first choice for migration
                            immediately after COVID-19 is, undoubtedly Japan,
                            especially, with its current popularity, stable
                            economy, and a wide array of schools and
                            universities providing career opportunities, and a
                            settlement circumstance, thereafter. Japan is a
                            culturally rich and technologically advanced nation
                            is a desirable destination for international
                            students. Japan offers a once-in-a-lifetime
                            opportunity for students from India, Sri Lanka, and
                            other countries, as well.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500"
                      size="txtSegoeUIBold36"
                    >
                      OUR TEAMS
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-[75px] w-full">
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
                    <Text
                      className="mt-[188px] text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500"
                      size="txtSegoeUIBold36"
                    >
                      OUR CORE VALUES
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between w-full">
                      <div className="flex flex-col gap-[23px] items-start justify-start">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                          size="txtSegoeUIBold32"
                        >
                          WHO WE ARE
                        </Text>
                        <Text
                          className="leading-[24.00px] text-base text-blue_gray-900"
                          size="txtSegoeUI16"
                        >
                          <>
                            We are a team of professionals who experienced
                            challenges in the overseas education industry and we
                            wanted to bring something which is transparent and
                            trustworthy. We have started Inochi after realizing
                            that, how many students are struggling during the
                            course and after completion of the course because of
                            the wrong information provided by some agents.
                            <br />
                            We have taken this seriously because we wanted to
                            support the students to accomplish their desire by
                            providing them with the right information. We have
                            worked out the complete process for a students life
                            journey when they study abroad. <br />
                            We also have special experienced talent in every
                            process to make sure that we are providing adequate
                            information to students with which they can choose
                            the right country and university.
                          </>
                        </Text>
                      </div>
                      <Img
                        className="h-[446px] md:h-auto object-cover rounded-br-[16px] rounded-tr-[16px]"
                        src="images/img_rectangle65.png"
                        alt="rectangleSixtyFive"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-[42px] items-center justify-between w-full">
                      <Img
                        className="h-[446px] md:h-auto object-cover rounded-bl-[16px] rounded-tl-[16px]"
                        src="images/img_rectangle66.png"
                        alt="rectangleSixtySix"
                      />
                      <div className="flex flex-col gap-6 items-start justify-start">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                          size="txtSegoeUIBold32"
                        >
                          WHY Inochi
                        </Text>
                        <Text
                          className="leading-[24.00px] text-base text-blue_gray-900"
                          size="txtSegoeUI16"
                        >
                          <>
                            Our Founder Mr.Saji Samuel has gone through all the
                            admission process personally when he sent his elder
                            son for medical admission in the Philippines.
                            Because we have undergone this for our children, we
                            know the worries of the parents. <br />
                            How much they are concerned about the country,
                            university, course, safety, financial protection.
                            Etc. <br />
                            We have also seen how some agents are misleading the
                            students with false information and fake promises.{" "}
                            <br />
                            We have joined together as Inochi to give clarity on
                            all the mentioned challenges to the parents and give
                            desired future for the students by supporting all
                            the professional knowledge what we have. Here we are
                            not recommending a university or a country which we
                            have not experienced, but Inochi is sending the
                            students to study where we entrusted our own
                            children’s future.
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[50px] items-end justify-start ml-[-64px] mt-32 w-[11%] z-[1]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500"
                size="txtSegoeUIBold36"
              >
                OUR TEAMS
              </Text>
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="h-64 relative w-full">
                  <Img
                    className="h-64 m-auto object-cover w-full"
                    src="images/img_rectangle53_256x144.png"
                    alt="rectangleFiftyThree"
                  />
                  <Text
                    className="absolute bottom-[16%] right-[0] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtSegoeUIBold30WhiteA700"
                  >
                    SAJI SAMUEL
                  </Text>
                </div>
                <div className="h-64 relative w-full">
                  <Img
                    className="h-64 m-auto object-cover w-full"
                    src="images/img_rectangle53_2.png"
                    alt="rectangleFiftyThree_One"
                  />
                  <Text
                    className="absolute bottom-[15%] right-[0] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtSegoeUIBold30WhiteA700"
                  >
                    RAFIQ SAMUEL
                  </Text>
                </div>
                <div className="h-64 relative w-full">
                  <Img
                    className="h-64 m-auto object-cover w-full"
                    src="images/img_rectangle53_3.png"
                    alt="rectangleFiftyThree_Two"
                  />
                  <Text
                    className="absolute bottom-[16%] right-[0] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtSegoeUIBold30WhiteA700"
                  >
                    RAHIM ALI
                  </Text>
                </div>
                <div className="h-64 relative w-full">
                  <Img
                    className="h-64 m-auto object-cover w-full"
                    src="images/img_rectangle53_2.png"
                    alt="rectangleFiftyThree_Three"
                  />
                  <Text
                    className="absolute bottom-[16%] right-[0] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtSegoeUIBold30WhiteA700"
                  >
                    SAJI RAKIB
                  </Text>
                </div>
                <div className="h-64 relative w-full">
                  <Img
                    className="h-64 m-auto object-cover w-full"
                    src="images/img_rectangle53_3.png"
                    alt="rectangleFiftyThree_Four"
                  />
                  <Text
                    className="absolute bottom-[16%] right-[0] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtSegoeUIBold30WhiteA700"
                  >
                    RAHAN KHAN
                  </Text>
                </div>
                <div className="h-64 relative w-full">
                  <Img
                    className="h-64 m-auto object-cover w-full"
                    src="images/img_rectangle53_256x144.png"
                    alt="rectangleFiftyThree_Five"
                  />
                  <Text
                    className="absolute bottom-[16%] right-[0] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtSegoeUIBold30WhiteA700"
                  >
                    SAJI SAMUEL
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[35px] items-center mt-[129px] w-full">
          <div className="flex flex-col gap-[5px] items-center justify-start max-w-7xl mx-auto md:px-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-red-500"
              size="txtSegoeUIBold36"
            >
              Our Latest News
            </Text>
            <Line className="bg-blue_gray-50 h-px w-full" />
          </div>
          <div className="bg-deep_orange-900 flex flex-col items-center justify-start p-[73px] md:px-10 sm:px-5 w-full">
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
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-gray-300_01 flex flex-col items-center justify-center p-[17px] w-full">
              <div className="flex flex-col items-center justify-center md:ml-[0] ml-[22px] mt-[22px] w-[83%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[18%] md:w-full">
                    <Img
                      className="h-[70px] md:h-auto object-cover w-[70px]"
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
                  <div className="flex md:flex-1 flex-col gap-[58px] justify-start w-[63%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col gap-[18px] items-start justify-start w-[13%]">
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
                              className="mt-[9px] text-blue_gray-900 text-sm"
                            >
                              <Text size="txtSegoeUI14">Design</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="mt-2.5 text-blue_gray-900 text-sm"
                            >
                              <Text size="txtSegoeUI14">Marketing</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="mt-1.5 text-blue_gray-900 text-sm"
                            >
                              <Text size="txtSegoeUI14">Advertisement</Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-[10%]">
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
                              className="mt-[9px] text-blue_gray-900 text-sm"
                            >
                              <Text size="txtSegoeUI14">Contact</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="mt-2.5 text-blue_gray-900 text-sm"
                            >
                              <Text size="txtSegoeUI14">Jobs</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="mt-2 text-blue_gray-900 text-sm"
                            >
                              <Text size="txtSegoeUI14">Press kit</Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-[12%]">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtSegoeUIBold14"
                        >
                          LEGAL
                        </Text>
                        <ul className="flex flex-col gap-2.5 items-start justify-start w-full common-column-list">
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
                      className="md:ml-[0] ml-[54px] text-blue_gray-900 text-sm"
                      size="txtSegoeUI14"
                    >
                      Copyright © 2023 - All right reserved by ACME Industries
                      Ltd
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ABOUTPage;

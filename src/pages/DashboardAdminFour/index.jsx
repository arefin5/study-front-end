import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";
import DashboardAdminFourNavbarslink from "components/DashboardAdminFourNavbarslink";

import { CloseSVG } from "../../assets/images";

const DashboardAdminFourPage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");
  const sideBarMenu = [
    {
      label: "Home",
      href: "/home1",
      active: window.location.pathname === "/home1",
    },
    { label: "Students" },
    { label: "Account" },
    { label: "Address" },
    { label: "Documentation" },
    { label: "Branch" },
    { label: "Video course" },
    { label: "Tution fee" },
    { label: "Update session" },
    { label: "Logout" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto pr-3.5 pt-3.5 w-full">
        <div className="flex flex-col gap-[23px] justify-end mt-[9px] mx-auto md:px-5 w-full">
          <header className="bg-blue_gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-center ml-72 md:ml-[0] w-full">
            <ul className="flex md:flex-1 md:flex-col flex-row gap-[15px] md:hidden items-center justify-end mb-2.5 sm:ml-[0] ml-[26px] sm:mt-0 mt-[13px] w-auto md:w-full common-row-list">
              <li>
                <a href="javascript:">
                  <div className="h-3.5 relative">
                    <Text
                      className="hover:absolute absolute h-full inset-y-[0] left-[0] my-auto text-[11px] text-blue_gray-900 w-auto"
                      size="txtInterMedium11"
                    >
                      HOME
                    </Text>
                    <Text
                      className="hover:absolute absolute h-full inset-y-[0] my-auto right-[0] text-[11px] text-blue_gray-900 w-auto"
                      size="txtInterMedium11"
                    >
                      STUDY-SETTLE-JAPAN
                    </Text>
                  </div>
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
              className="cursor-pointer font-medium min-w-[96px] sm:ml-[0] ml-[94px] text-center text-sm"
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
              wrapClassName="border border-blue_gray-100_01 border-solid flex sm:flex-1 ml-3.5 sm:ml-[0] shadow-bs w-[267px] sm:w-full"
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
          <div className="flex md:flex-col flex-row font-segoeui gap-[31px] items-start justify-start mr-[226px] w-[85%] md:w-full">
            <Sidebar className="!sticky !w-[314px] bg-gray-100 flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="flex flex-col items-center justify-start mt-[23px] mx-auto px-3.5 w-[47%]">
                <Img
                  className="h-32 md:h-auto object-cover rounded-[64px] w-[31%] sm:w-full"
                  src="images/img_ellipse124_128x97.png"
                  alt="ellipse124_One"
                />
                <Text
                  className="mt-[21px] text-blue_gray-900 text-xl"
                  size="txtSegoeUI20"
                >
                  Md Rafiqul Islam
                </Text>
                <Text
                  className="mt-[11px] text-gray-800 text-sm"
                  size="txtSegoeUI14Gray800"
                >
                  Dhaka, Bangladesh
                </Text>
              </div>
              <Img
                className="h-32 md:h-auto object-cover rounded-[64px] w-[31%] sm:w-full"
                src="images/img_ellipse124_128x97.png"
                alt="ellipse124_One"
              />
              <Text
                className="mt-[21px] text-blue_gray-900 text-xl"
                size="txtSegoeUI20"
              >
                Md Rafiqul Islam
              </Text>
              <Text
                className="mt-[11px] text-gray-800 text-sm"
                size="txtSegoeUI14Gray800"
              >
                Dhaka, Bangladesh
              </Text>
              <div className="bg-blue_gray-100_03 h-[54px] mt-[145px] w-full"></div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    flexDirection: "column",
                    paddingBottom: "7px",
                    color: "#1f2937",
                    fontSize: "14px",
                    paddingLeft: "7px",
                    paddingRight: "7px",
                  },
                }}
                className="flex flex-col items-center justify-start mb-[514px] md:pr-10 sm:pr-5 pr-[218px] w-[31%]"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col font-inter gap-[15px] justify-start md:mt-0 mt-[34px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[77%] md:w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <div className="flex flex-row gap-4 items-start justify-start w-auto">
                    <DashboardAdminFourNavbarslink className="flex flex-col h-16 md:h-auto items-center justify-start w-auto" />
                    <div className="flex flex-col h-16 md:h-auto items-center justify-start w-auto">
                      <div className="flex flex-col h-[62px] md:h-auto items-center justify-center pt-1 px-1 w-auto">
                        <Text
                          className="text-center text-gray-600 text-sm w-auto"
                          size="txtInterMedium14Gray600"
                        >
                          Statistics
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-16 md:h-auto items-center justify-start w-auto">
                      <div className="flex flex-col h-[62px] md:h-auto items-center justify-center pt-1 px-1 w-auto">
                        <Text
                          className="text-center text-gray-600 text-sm w-auto"
                          size="txtInterMedium14Gray600"
                        >
                          Grammar
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-[62px] md:h-auto items-center justify-center pt-1 px-1 w-[54px]">
                  <Text
                    className="text-center text-gray-600 text-sm w-auto"
                    size="txtInterMedium14Gray600"
                  >
                    Mondai
                  </Text>
                </div>
                <div className="flex flex-col md:gap-10 gap-[106px] items-center justify-start md:ml-[0] ml-[17px] w-[44%] md:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                      size="txtInterBold30"
                    >
                      My profile
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 text-center"
                      size="txtInterBold30"
                    >
                      Acount Information
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] h-[1050px] md:h-auto items-start justify-start max-w-[721px] md:ml-[0] ml-[134px] w-full">
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Frist Name:
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
                    Last Name
                  </Text>
                  <div className="flex flex-col items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Input
                      name="language"
                      placeholder="Last  Name"
                      className="!placeholder:text-blue_gray-300_01 !text-blue_gray-300_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-300_01 border-solid w-full"
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
                    Fathers Name
                  </Text>
                  <div className="flex flex-col items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Input
                      name="content_One"
                      placeholder="Father’s Name"
                      className="!placeholder:text-blue_gray-300_01 !text-blue_gray-300_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-300_01 border-solid w-full"
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
                    Mother’s Name
                  </Text>
                  <div className="flex flex-col items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Input
                      name="content_Two"
                      placeholder="Father’s Name"
                      className="!placeholder:text-blue_gray-300_01 !text-blue_gray-300_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-300_01 border-solid w-full"
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
                    Present Adress
                  </Text>
                  <div className="flex flex-col items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Input
                      name="content_Three"
                      placeholder="Father’s Name"
                      className="!placeholder:text-blue_gray-300_01 !text-blue_gray-300_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-300_01 border-solid w-full"
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
                    Permanent Adress
                  </Text>
                  <div className="flex flex-col items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Input
                      name="content_Four"
                      placeholder="Father’s Name"
                      className="!placeholder:text-blue_gray-300_01 !text-blue_gray-300_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-300_01 border-solid w-full"
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
                    Profile pic
                  </Text>
                  <div className="flex flex-col items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Input
                      name="content_Five"
                      placeholder="Father’s Name"
                      className="!placeholder:text-blue_gray-300_01 !text-blue_gray-300_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-300_01 border-solid w-full"
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
                    Contact Number
                  </Text>
                  <div className="flex flex-col items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Input
                      name="content_Six"
                      placeholder="Father’s Name"
                      className="!placeholder:text-blue_gray-300_01 !text-blue_gray-300_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-300_01 border-solid w-full"
                      type="text"
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-blue_gray-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Email{" "}
                  </Text>
                  <div className="flex flex-col items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Input
                      name="content_Seven"
                      placeholder="Father’s Name"
                      className="!placeholder:text-blue_gray-300_01 !text-blue_gray-300_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-300_01 border-solid w-full"
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
                    Last Education
                  </Text>
                  <div className="flex flex-col items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Input
                      name="content_Eight"
                      placeholder="Father’s Name"
                      className="!placeholder:text-blue_gray-300_01 !text-blue_gray-300_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-300_01 border-solid w-full"
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
                    className="leading-[24.00px] max-w-[178px] md:max-w-full text-blue_gray-900 text-sm"
                    size="txtInterRegular14"
                  >
                    Student Passport Copy:
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start shadow-bs w-[528px] sm:w-full">
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium min-w-[117px] rounded-bl-md rounded-tl-md text-center text-sm"
                      color="blue_gray_400"
                      size="sm"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdminFourPage;

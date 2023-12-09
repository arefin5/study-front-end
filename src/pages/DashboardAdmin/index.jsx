import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

import { CloseSVG } from "../../assets/images";

const DashboardAdminPage = () => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");
  const [formfieldstextonevalue, setFormfieldstextonevalue] =
    React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-segoeui md:gap-5 items-start justify-evenly w-full">
            <div className="bg-gray-100 flex md:flex-1 flex-col gap-[37px] items-center justify-start md:px-5 py-[22px] w-[23%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                <Img
                  className="h-[123px] md:h-auto object-cover rounded-[61px] w-[68%] sm:w-full"
                  src="images/img_ellipse124.png"
                  alt="ellipse124"
                />
                <Text
                  className="mt-5 text-blue_gray-900 text-xl"
                  size="txtSegoeUI20"
                >
                  Md Rafiqul Islam
                </Text>
                <Text
                  className="mt-2.5 text-gray-800 text-sm"
                  size="txtSegoeUI14Gray800"
                >
                  Dhaka, Bangladesh
                </Text>
              </div>
              <div className="h-[436px] md:h-[630px] mb-[226px] relative w-full">
                <div className="absolute bg-blue_gray-100_03 h-[42px] inset-x-[0] mx-auto top-[8%] w-full"></div>
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
            <div className="flex md:flex-1 flex-col font-inter items-center justify-start md:mt-0 mt-[136px] md:px-5 w-[78%] md:w-full">
              <div className="flex flex-col justify-start w-full">
                <Input
                  name="formfieldstext_One"
                  placeholder="Search..."
                  value={formfieldstextonevalue}
                  onChange={(e) => setFormfieldstextonevalue(e)}
                  className="p-0 placeholder:text-gray-600 text-left text-sm w-full"
                  wrapClassName="border border-blue_gray-100_01 border-solid flex md:ml-[0] ml-[821px] mr-[13px] shadow-bs w-[282px]"
                  suffix={
                    formfieldstextonevalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer h-5 ml-[35px] my-auto"
                        onClick={() => setFormfieldstextonevalue("")}
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
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-4 md:ml-[0] mt-[35px] w-[88%] md:w-full">
                  <Text
                    className="text-gray-600_01 text-xs"
                    size="txtInterMedium12"
                  >
                    No.
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[46px] text-gray-600_01 text-xs"
                    size="txtInterMedium12"
                  >
                    Name
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[135px] text-gray-600_01 text-xs"
                    size="txtInterMedium12"
                  >
                    Address
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[206px] text-gray-600_01 text-xs"
                    size="txtInterMedium12"
                  >
                    Class
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[88px] text-gray-600_01 text-xs"
                    size="txtInterMedium12"
                  >
                    Branch
                  </Text>
                  <Text
                    className="ml-14 md:ml-[0] text-gray-600_01 text-xs"
                    size="txtInterMedium12"
                  >
                    Student ID
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[168px] text-gray-600_01 text-xs"
                    size="txtInterMedium12"
                  >
                    Action
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-end mt-[18px] pt-5 px-5 w-full">
                  <List
                    className="flex flex-col gap-[23.5px] items-center w-[98%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                        <Text
                          className="text-blue_gray-900 text-center text-sm"
                          size="txtInterRegular14"
                        >
                          1
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[55px] md:mt-0 mt-0.5 text-blue_gray-900 text-sm"
                          size="txtInterMedium14"
                        >
                          Hart Hagerty
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[81px] md:mt-0 mt-0.5 text-[13px] text-blue_gray-900"
                          size="txtInterRegular13"
                        >
                          3018 Skinner Hollow Road
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[93px] md:mt-0 mt-[3px] text-[11px] text-blue_gray-900"
                          size="txtInterMedium11"
                        >
                          HSC
                        </Text>
                        <Text
                          className="ml-24 md:ml-[0] md:mt-0 mt-[3px] text-[11px] text-blue_gray-900"
                          size="txtInterMedium11"
                        >
                          A
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[89px] md:mt-0 mt-0.5 text-[13px] text-blue_gray-900"
                          size="txtInterRegular13"
                        >
                          574893
                        </Text>
                        <div className="bg-light_green-700 md:h-3.5 h-5 md:ml-[0] ml-[181px] px-2.5 relative rounded-[10px] w-[41px]">
                          <Text
                            className="m-auto text-[11px] text-white-A700 w-auto"
                            size="txtInterMedium11WhiteA700"
                          >
                            Edit
                          </Text>
                          <div className="absolute bg-light_green-700 flex flex-col h-full inset-[0] items-center justify-end m-auto px-2.5 rounded-[10px] w-auto">
                            <Text
                              className="text-[11px] text-white-A700 w-auto"
                              size="txtInterMedium11WhiteA700"
                            >
                              Edit
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="bg-blue_gray-900 justify-center px-2.5 py-0.5 rounded-[10px] text-[11px] text-white-A700 w-auto"
                        size="txtInterMedium11WhiteA700"
                      >
                        Delete
                      </Text>
                    </div>
                    <Line className="self-center h-px bg-gray-100 w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[93%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtInterRegular14"
                      >
                        2
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[53px] text-blue_gray-900 text-sm"
                        size="txtInterMedium14"
                      >
                        Abraham Hator
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[67px] md:mt-0 mt-[3px] text-[13px] text-blue_gray-900"
                        size="txtInterRegular13"
                      >
                        2170 Elk City Road
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[140px] md:mt-0 mt-[3px] text-[11px] text-blue_gray-900"
                        size="txtInterMedium11"
                      >
                        HSC
                      </Text>
                      <Text
                        className="ml-24 md:ml-[0] md:mt-0 mt-[3px] text-[11px] text-blue_gray-900"
                        size="txtInterMedium11"
                      >
                        A
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[89px] md:mt-0 mt-0.5 text-[13px] text-blue_gray-900"
                        size="txtInterRegular13"
                      >
                        574894
                      </Text>
                      <Text
                        className="bg-blue_gray-900 justify-center md:ml-[0] ml-[181px] pt-1 px-2.5 rounded-[10px] text-[11px] text-white-A700 w-auto"
                        size="txtInterMedium11WhiteA700"
                      >
                        Buy
                      </Text>
                    </div>
                    <Line className="self-center h-px bg-gray-100 w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[93%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtInterRegular14"
                      >
                        3
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[53px] text-blue_gray-900 text-sm"
                        size="txtInterMedium14"
                      >
                        Smit Jhon
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[102px] text-[13px] text-blue_gray-900"
                        size="txtInterRegular13"
                      >
                        1952 Crummit Lane
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[134px] text-[11px] text-blue_gray-900"
                        size="txtInterMedium11"
                      >
                        Hns
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[99px] text-[11px] text-blue_gray-900"
                        size="txtInterMedium11"
                      >
                        B
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[89px] text-[13px] text-blue_gray-900"
                        size="txtInterRegular13"
                      >
                        574895
                      </Text>
                      <Text
                        className="bg-light_green-700 justify-center md:ml-[0] ml-[182px] px-2.5 py-0.5 rounded-[10px] text-[11px] text-white-A700 w-auto"
                        size="txtInterMedium11WhiteA700"
                      >
                        Paid
                      </Text>
                    </div>
                    <Line className="self-center h-px bg-gray-100 w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[93%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtInterRegular14"
                      >
                        4
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[53px] md:mt-0 mt-0.5 text-blue_gray-900 text-sm"
                        size="txtInterMedium14"
                      >
                        Hartly Hon
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[97px] md:mt-0 mt-0.5 text-[13px] text-blue_gray-900"
                        size="txtInterRegular13"
                      >
                        1952 Crummit Lane
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[134px] md:mt-0 mt-[3px] text-[11px] text-blue_gray-900"
                        size="txtInterMedium11"
                      >
                        SSC
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[97px] md:mt-0 mt-[3px] text-[11px] text-blue_gray-900"
                        size="txtInterMedium11"
                      >
                        A
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[89px] md:mt-0 mt-0.5 text-[13px] text-blue_gray-900"
                        size="txtInterRegular13"
                      >
                        574896
                      </Text>
                      <Text
                        className="bg-light_green-700 justify-center md:ml-[0] ml-[181px] px-2.5 py-0.5 rounded-[10px] text-[11px] text-white-A700 w-auto"
                        size="txtInterMedium11WhiteA700"
                      >
                        Paid
                      </Text>
                    </div>
                    <Line className="self-center h-px bg-gray-100 w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtInterRegular14"
                      >
                        5
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[53px] text-blue_gray-900 text-sm"
                        size="txtInterMedium14"
                      >
                        Jhohan lin
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[100px] text-[13px] text-blue_gray-900"
                        size="txtInterRegular13"
                      >
                        3018 Skinner Hollow Road
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[93px] text-[11px] text-blue_gray-900"
                        size="txtInterMedium11"
                      >
                        SSC
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[97px] text-[11px] text-blue_gray-900"
                        size="txtInterMedium11"
                      >
                        C
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[88px] text-[13px] text-blue_gray-900"
                        size="txtInterRegular13"
                      >
                        574897
                      </Text>
                      <Text
                        className="bg-blue_gray-400 justify-center md:ml-[0] ml-[182px] px-2.5 py-0.5 rounded-[10px] text-[11px] text-white-A700 w-auto"
                        size="txtInterMedium11WhiteA700"
                      >
                        Income
                      </Text>
                    </div>
                  </List>
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

export default DashboardAdminPage;

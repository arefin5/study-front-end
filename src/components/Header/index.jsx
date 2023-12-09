import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const Header = (props) => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <div
          className="bg-cover bg-no-repeat h-[257px] sm:h-[420px] relative w-full"
          style={{ backgroundImage: "url('images/img_frame6.png')" }}
        >
          <Img
            className="h-[257px] m-auto object-cover w-full"
            src="images/img_rectangle.png"
            alt="rectangle"
          />
          <div className="absolute bg-blue_gray-900_90 flex flex-col gap-[43px] h-max inset-[0] items-center justify-center m-auto pb-14 w-full">
            <div className="bg-blue_gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-3.5 w-full">
              <Img
                className="h-[50px] md:h-auto sm:mt-0 my-[3px] rounded-[50%] w-[50px]"
                src="images/img_logo.png"
                alt="logo"
              />
              <ul className="flex md:flex-1 md:flex-col flex-row gap-[15px] md:hidden items-center justify-end sm:ml-[0] ml-[190px] w-auto md:w-full common-row-list">
                <li>
                  <Text
                    className="text-[11px] text-blue_gray-900"
                    size="txtInterMedium11"
                  >
                    HOME
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-[11px] text-blue_gray-900"
                    size="txtInterMedium11"
                  >
                    STUDY-SETTLE-JAPAN
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-[11px] text-blue_gray-900"
                    size="txtInterMedium11"
                  >
                    BLOG
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-[11px] text-blue_gray-900"
                    size="txtInterMedium11"
                  >
                    CONTACT US
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-[11px] text-blue_gray-900"
                    size="txtInterMedium11"
                  >
                    DASHBOARD
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-[11px] text-blue_gray-900"
                    size="txtInterMedium11"
                  >
                    REGISTER
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-[11px] text-blue_gray-900 uppercase"
                    size="txtInterMedium11"
                  >
                    guest registration
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-[11px] text-blue_gray-900"
                    size="txtInterMedium11"
                  >
                    LOGIN
                  </Text>
                </li>
              </ul>
              <Button
                className="cursor-pointer font-inter font-medium min-w-[96px] sm:ml-[0] ml-[120px] sm:mt-0 my-[9px] text-center text-sm"
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
                className="font-inter p-0 placeholder:text-gray-600 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-100_01 border-solid flex sm:flex-1 ml-3.5 sm:ml-[0] sm:mt-0 my-[9px] shadow-bs w-[267px] sm:w-full"
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
            </div>
            <Text
              className="sm:text-[40px] md:text-[46px] text-[54px] text-center text-gray-300_02"
              size="txtSegoeUIBold54"
            >
              Contact
            </Text>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

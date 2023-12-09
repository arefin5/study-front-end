import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-5 ml-10 mr-[236px] mt-[37px] w-[81%]">
          <div className="flex flex-col items-center justify-center w-full">
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
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtSegoeUI14"
                        >
                          Branding
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="mt-[9px] text-blue_gray-900 text-sm"
                          size="txtSegoeUI14"
                        >
                          Design
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="mt-2.5 text-blue_gray-900 text-sm"
                          size="txtSegoeUI14"
                        >
                          Marketing
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="mt-1.5 text-blue_gray-900 text-sm"
                          size="txtSegoeUI14"
                        >
                          Advertisement
                        </Text>
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
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtSegoeUI14"
                        >
                          About us
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="mt-[9px] text-blue_gray-900 text-sm"
                          size="txtSegoeUI14"
                        >
                          Contact
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="mt-2.5 text-blue_gray-900 text-sm"
                          size="txtSegoeUI14"
                        >
                          Jobs
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="mt-2 text-blue_gray-900 text-sm"
                          size="txtSegoeUI14"
                        >
                          Press kit
                        </Text>
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
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtSegoeUI14"
                        >
                          Terms of use
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtSegoeUI14"
                        >
                          Privacy policy
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtSegoeUI14"
                        >
                          Cookie policy
                        </Text>
                      </li>
                    </ul>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[54px] text-blue_gray-900 text-sm"
                  size="txtSegoeUI14"
                >
                  Copyright © 2023 - All right reserved by ACME Industries Ltd
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;

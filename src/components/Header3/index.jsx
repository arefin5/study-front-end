import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const Header3 = (props) => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[50px] md:h-auto ml-12 md:ml-[0] md:mt-0 my-[17px] rounded-[50%] w-[50px]"
          src="images/img_logo.png"
          alt="logo"
        />
        <ul className="flex md:flex-col flex-row gap-[15px] md:hidden items-center justify-end mb-[33px] md:ml-[0] ml-[190px] md:mt-0 mt-9 w-auto md:w-full common-row-list">
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
        <div className="bg-indigo-A400 md:h-10 h-[38px] md:ml-[0] ml-[120px] md:mt-0 my-[23px] px-[17px] py-[9px] relative rounded-md shadow-bs w-24">
          <Text
            className="m-auto text-sm text-white-A700 w-auto"
            size="txtInterMedium14WhiteA700"
          >
            Join Free
          </Text>
          <div className="absolute bg-indigo-A400 md:h-[17px] h-[38px] inset-[0] m-auto px-[17px] py-[9px] rounded-md shadow-bs w-24">
            <Text
              className="m-auto text-sm text-white-A700 w-auto"
              size="txtInterMedium14WhiteA700"
            >
              Join Free
            </Text>
            <Text
              className="absolute h-max inset-[0] justify-center m-auto text-sm text-white-A700 w-max"
              size="txtInterMedium14WhiteA700"
            >
              Join Free
            </Text>
          </div>
        </div>
        <Input
          name="formfieldstext"
          placeholder="Search..."
          value={formfieldstextvalue}
          onChange={(e) => setFormfieldstextvalue(e)}
          className="font-inter p-0 placeholder:text-gray-600 text-left text-sm w-full"
          wrapClassName="border border-blue_gray-100_01 border-solid flex md:ml-[0] md:mt-0 mx-3.5 my-[23px] shadow-bs w-[267px] md:w-full"
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
    </>
  );
};

Header3.defaultProps = {};

export default Header3;

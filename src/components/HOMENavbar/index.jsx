import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const HOMENavbar = (props) => {
  const [formfieldstextvalue, setFormfieldstextvalue] = React.useState("");

  return (
    <>
      <div className={props.className}>
        {!!props?.logoimage ? (
          <Img
            className="h-[50px] md:h-auto md:mt-0 my-[3px] rounded-[50%] w-[50px]"
            alt="logo"
            src={props?.logoimage}
          />
        ) : null}
        <ul className="flex md:flex-col flex-row gap-[15px] items-center justify-end md:ml-[0] ml-[190px] w-auto md:w-full">
          <li>
            <Text
              className="text-[11px] text-blue_gray-900"
              size="txtInterMedium11"
            >
              {props?.hometext}
            </Text>
          </li>
          <li>
            <Text
              className="text-[11px] text-blue_gray-900"
              size="txtInterMedium11"
            >
              {props?.studysettext}
            </Text>
          </li>
          {!!props?.blogtext ? (
            <Text
              className="text-[11px] text-blue_gray-900"
              size="txtInterMedium11"
            >
              {props?.blogtext}
            </Text>
          ) : null}
          <li>
            <Text
              className="text-[11px] text-blue_gray-900"
              size="txtInterMedium11"
            >
              {props?.contactustext}
            </Text>
          </li>
          {!!props?.dashboardtext ? (
            <Text
              className="text-[11px] text-blue_gray-900"
              size="txtInterMedium11"
            >
              {props?.dashboardtext}
            </Text>
          ) : null}
          {!!props?.registertext ? (
            <Text
              className="text-[11px] text-blue_gray-900"
              size="txtInterMedium11"
            >
              {props?.registertext}
            </Text>
          ) : null}
          {!!props?.guestregistrationtext ? (
            <Text
              className="text-[11px] text-blue_gray-900 uppercase"
              size="txtInterMedium11"
            >
              {props?.guestregistrationtext}
            </Text>
          ) : null}
          {!!props?.logintext ? (
            <Text
              className="text-[11px] text-blue_gray-900"
              size="txtInterMedium11"
            >
              {props?.logintext}
            </Text>
          ) : null}
        </ul>
        {!!props?.joinfreebutton ? (
          <Button
            className="cursor-pointer font-inter font-medium min-w-[96px] md:ml-[0] ml-[120px] md:mt-0 my-[9px] text-center text-sm"
            shape="round"
            color="indigo_A400"
            size="sm"
            variant="fill"
          >
            {props?.joinfreebutton}
          </Button>
        ) : null}
        {!!props?.searchview ? (
          <Input
            name="formfieldstext"
            placeholder="Search..."
            value={formfieldstextvalue}
            onChange={(e) => setFormfieldstextvalue(e)}
            className="font-inter p-0 placeholder:text-gray-600 text-left text-sm w-full"
            wrapClassName="border border-blue_gray-100_01 border-solid flex ml-3.5 md:ml-[0] md:mt-0 my-[9px] shadow-bs w-[267px] md:w-full"
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
        ) : null}
      </div>
    </>
  );
};

HOMENavbar.defaultProps = {
  hometext: "HOME",
  studysettext: "STUDY-SETTLE-JAPAN",
  contactustext: "CONTACT US",
};

export default HOMENavbar;

import React from "react";

import { Line, Text } from "components";

const DashboardAdminFourNavbarslink = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[62px] md:h-auto items-center justify-center pt-1 px-1 w-auto md:w-full">
          <Text
            className="text-center text-gray-900_01 text-sm w-auto"
            size="txtInterMedium14Gray90001"
          >
            {props?.accountsettingstext}
          </Text>
        </div>
        <Line className="bg-indigo-A200 h-0.5 w-full" />
      </div>
    </>
  );
};

DashboardAdminFourNavbarslink.defaultProps = {
  accountsettingstext: "Account settings",
};

export default DashboardAdminFourNavbarslink;

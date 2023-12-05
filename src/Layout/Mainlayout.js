import React from "react";
import Header from "../Component/Header";
import SideNavLayout from "./SideNavLayout";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col  h-full  z-0 overflow-hidden ">
      {/* <div className="flex-col w-full h-full overflow-hidden"> */}
      <Header />

      {/* </div> */}
      <div className=" top-0 h-full xs:absolute z-50 md:static flex  ">
        <SideNavLayout className="h-full" />

        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;

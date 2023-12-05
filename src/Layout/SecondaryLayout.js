import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function SecondaryLayout({ children }) {
  return (
    <div className="flex flex-col  h-full  z-0 overflow-hidden ">
      <Header />


        <div className="">{children}</div>
      <Footer />

    </div>
  );
}


export default SecondaryLayout
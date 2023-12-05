import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 w-full py-8 px-16 ">
        <div className="flex items-center justify-between  border-b border-gray-600 pb-6 w-full">
          <div className="flex flex-col justify-between gap-32">
            <p className="text-white">UiXSHUVO</p>
            <div className="flex items-center justify-between text-white">
              <FaFacebook />
              <FaTwitter />
              <FaInstagramSquare />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 ">
            <p className="text-white  py-3">Welcome</p>
            <p className="text-gray-500 text-xs">Get Started</p>
            <p className="text-gray-500 text-xs">Login</p>
            <p className="text-gray-500 text-xs">Become a Coach</p>
            <p className="text-gray-500 text-xs">Community</p>
            <p className="text-gray-500 text-xs">FAQ</p>
          </div>
          <div className="flex flex-col justify-between gap-3 ">
          <p className="text-white py-3">Library</p>
            <p className="text-gray-500 text-xs">MBA Hub</p>
            <p className="text-gray-500 text-xs">Defend MBA Hub</p>
            <p className="text-gray-500 text-xs">Corner Hub</p>
            <p className="text-gray-500 text-xs">UnderGraduate Hub</p>
            <p className="text-gray-500 text-xs">Stores</p>
          </div>
          <div className="flex flex-col justify-between gap-3  ">
            <p className="text-white py-3">Company</p>
            <p className="text-gray-500 text-xs">MBA Hub</p>
            <p className="text-gray-500 text-xs">Defend MBA Hub</p>
            <p className="text-gray-500 text-xs">Corner Hub</p>
            <p className="text-gray-500 text-xs">UnderGraduate Hub</p>
            <p className="text-gray-500 text-xs">Stores</p>
          </div>
   
        </div>
        <div className="text-center text-gray-500 font-medium py-2">
          <h4> Copyright @AllRightsReserved</h4>
        </div>
      </div>
    </>
  );
};

export default Footer;

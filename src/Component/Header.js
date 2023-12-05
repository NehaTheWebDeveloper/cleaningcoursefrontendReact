import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const linkss = ["Home", "Course", "Monitor", "Pricing", "Blog"];
const links = [
  { name: "Home", linkto: "" },
  { name: "Course", linkto: "course" },
  { name: "Monitor", linkto: "monitor" },
  { name: "Pricing", linkto: "pricing" },
  { name: "Blog", linkto: "blog" },
];

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-900 sticky top-0 h-14 px-16 py-10 w-full flex items-center justify-between border-b border-gray-700">
        <div className="grid grid-cols-12 items-center  justify-between gap-8 ">
          <div className="col-span-3">
            <span className="font-bold text-gray-300 pr-6">UiXSHUVO</span>
          </div>
          <div className="col-span-5 ">
            <div className="flex justify-between items-center ">
              {links.map((link) => {
                return (
                  <div className="text-gray-300" key={link.name}>
                  <Link to={`/${link.linkto}`}>{link.name}</Link>
                </div>
                )
              })}
            </div>
          </div>
          <div className="col-span-3 ">
            <input
              className="py-1 px-4 rounded-2xl bg-gray-800"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <button
            className="text-gray-300 w-full  px-5 rounded-2xl py-2 bg-transparent hover:bg-btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            className="text-gray-300 w-full px-5 rounded-2xl py-2 bg-btn hover:bg-transparent    "
            onClick={() => {
              navigate("/signup");
            }}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

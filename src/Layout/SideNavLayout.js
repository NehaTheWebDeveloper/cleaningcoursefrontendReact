import React, { useState } from "react";
import { SideNavLayoutData as sideLinks } from "../Component/Utils/SideNavLayoutData";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../src/Assets/logo.jpg";
import { MdOutlineSubject } from "react-icons/md";

const SideNavLayout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  // const { logOut } = useUserAuth();

  const handleLogout = () => {};
  const handleOpenSideBar = () => {};
  return (
    <>
      {/* <MdOutlineSubject
        className="text-7xl lg:hidden "
        onClick={handleOpenSideBar}
      />
      {open && (
        <div
          className={`bg-gray-900 h-screen lg:w-[240px]  lg:hidden text-white p-4 sticky top-0`}
        >
          <div className="flex items-center gap-2 py-2">
            <div className="flex flex-col items-center w-full ">
              <img
                src={logo}
                alt="?"
                width={60}
                className="w-[130px]  lg:block hidden "
              /> 
               <h1 className="text-[20px]">Admin</h1> 
            </div>
          </div>
          {sideLinks.map((sideLink, i) => {
            if (sideLink.title === "Logout") {
              return (
                <div
                  key={i}
                  className="flex items-center gap-7 py-4 px-2 border-yellow-100 border-b-double shadow-lg hover:bg-slate-800"
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  <div className="text-white">{sideLink.icons}</div>
                  <span>{sideLink.title}</span>
                </div>
              );
            } else {
              return (
                <div
                  key={i}
                  className="flex items-center gap-7 py-4 px-2 border-yellow-100 border-b-double shadow-lg hover:bg-slate-800"
                >
                  <div className="text-white">{sideLink.icons}</div>
                  <Link to={sideLink.link}>{sideLink.title}</Link>
                </div>
              );
            }
          })}
        </div>
      )} */}
      <div
        className={`bg-gray-900 h-full lg:w-[270px] xs:hidden lg:block 
            
             text-white p-4 sticky top-0`}
      >
        <div className="flex items-center gap-2 py-2">
          <div className="flex flex-col items-center w-full ">
            {/* <img
              src={logo}
              alt="?"
              width={40}
              className="w-[70px]  lg:block hidden rounded-full "
            /> */}
          </div>
        </div>
        {sideLinks.map((sideLink, i) => {
          if (sideLink.title === "Logout") {
            return (
              <div
                key={i}
                className="flex items-center gap-7 py-4 px-2 border-yellow-100 border-b-double shadow-lg hover:bg-slate-800"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                <div className="text-white">{sideLink.icons}</div>
                <span>{sideLink.title}</span>
              </div>
            );
          } else {
            return (
              <div
                key={i}
                className="flex items-center gap-7 py-4 px-2 border-yellow-100 border-b-double shadow-lg hover:bg-slate-800"
              >
                <div className="text-white">{sideLink.icons}</div>
                <Link to={sideLink.link}>{sideLink.title}</Link>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default SideNavLayout;

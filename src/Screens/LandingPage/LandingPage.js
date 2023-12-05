import React from "react";
import Header from "../../Component/Header";
import image1 from "../../../src/Assets/banner.png";
import { useNavigate } from "react-router-dom";
import { AiFillFire } from "react-icons/ai";
import Courses from "../../Component/Courses/Courses";
import Explore from "../../Component/Explore/Explore";
import ExclusivePlans from "../../Component/ExclusivePlans/ExclusivePlans";
import Footer from "../../Component/Footer";
import Slider from "../../Component/Slider/Slider";
import SafetyTraining from "../../Component/SafetyTraining/SafetyTraining";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Header/>
      <Slider />
      <SafetyTraining/>
      {/* <div className="bg-gray-900 h-full text-white ">
        <div className="grid grid-cols-12 items-center justify-between px-16 ">
          <div className="col-span-6">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-[60px]">
                Let's Learn New Courses & Gain More Skills!
              </h1>
              <p className="text-gray-300 w-96 border-l-2 border-slate-500 px-2">
                Knowledege is the best skills to uplift urself and here you can
                uplift yourself by learning and doing
              </p>
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-2">
                  <button
                    className="text-gray-300  px-6 rounded-3xl py-2 bg-btn hover:bg-transparent    "
                    // onClick={() => {
                    //   navigate("/signup");
                    // }}
                  >
                    Expand Now
                  </button>
                  <button
                    className="text-gray-300 s  px-6 rounded-3xl py-2 bg-transparent hover:bg-btn"
                    // onClick={() => {
                    //   navigate("/login");
                    // }}
                  >
                    Our Story
                  </button>
                </div>
                <button className="text-gray-300 border px-4 rounded-3xl py-1 bg-gradient-to-r from-gray-700 border-gray-700 to-transparent hover:bg-btn">
                  <div>
                    <div className="flex  items-center justify-between gap-2">
                      <div className="p-2 rounded-full border border-gray-700">
                        <AiFillFire size={30} />
                      </div>
                      <div className="flex flex-col items-start">
                        <p>100+</p>
                        <span className="text-xs">Expert Teachers</span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex items-center justify-center">
            <img src={image1} alt="hello" className="rounded h-[600px] "  />
            <div className="flex items-center justify-end absolute -bottom-10    right-16 ">
              <button className="text-gray-300 border px-4 rounded-3xl py-1 bg-gradient-to-r from-gray-700 border-gray-700 to-transparent hover:bg-btn">
                  <div className="flex  items-center justify-between gap-2">
                    <div className="p-2 rounded-full border border-gray-700">
                      <AiFillFire size={30} />
                    </div>
                    <div className="flex flex-col items-start">
                      <p>100+</p>
                      <span className="text-xs">Happy Students</span>
                    </div>
                  </div>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="px-20">
          
        </div> */}
      {/* </div>  */}

      {/* <Courses /> */}
      {/* <Explore /> */}
      {/* <ExclusivePlans /> */}
      <Footer />
    </>
  );
};

export default LandingPage;
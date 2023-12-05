import React, {  useState } from "react";
import { content } from "../../Component/Utils/SafetyTrainingData";
import { OtherFeature } from "../../Component/Utils/OtherFeaturesData";

import { checkData } from "../../Component/Utils/checkData";
import img from "../../Assets/artistic-blurry-colorful-wallpaper-background.jpg";
const SafetyTraining = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;

  const totalSlides = Math.ceil(content.length / itemsPerSlide);
  const startIndex = currentSlide * itemsPerSlide;
  const visibleItems = content.slice(
    startIndex,
    Math.min(startIndex + itemsPerSlide, content.length)
  );

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <div className="bg-lightpurple w-full px-16 pt-9">
        <div className="w-full flex gap-5">
          {visibleItems.map((div, index) => (
            <div key={index} className="flex flex-col w-full gap-3">
              <div className=" ">
                <h2 className="text-center text-gray-700 font-semibold text-xl mb-3">
                  {div.heading}
                </h2>
                <div className="bg-white flex flex-col gap-3 h-full">
                  <img
                    src={div.img}
                    alt={`slide-${index}`}
                    className="object-cover h-40 w-full"
                  />
                  <h2 className="text-center text-gray-600 h-10 px-2">
                    {div.subheading}
                  </h2>
                  <div className="flex items-center justify-center">
                    <button className="bg-gray-900 rounded-md text-white mt-3 px-5 py-1">
                      {div.btn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={prevSlide}
            className="bg-gray-900 rounded-full text-white px-3 py-1"
          >
            &lt; Prev
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-900 rounded-full text-white px-3 py-1"
          >
            Next &gt;
          </button>
        </div>
        <div className="px-16">
          <h1 className="text-blue-900 font-medium text-center text-[30px] pt-10">
            100% SATISFACTION GUARANTEE!
          </h1>
          <div className="grid grid-cols-12 py-8">
            {checkData.map((check) => {
              return (
                <>
                  <div className="col-span-4  ">
                    <div className="flex items-center text-blue-900 gap-3 font-medium">
                      <div className="font-medium"> {check.check}</div>
                      {check.title}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <h1 className="text-blue-900 font-medium text-center text-[25px] pt-10">
            OVER 2 MILLION CERTIFIED LEARNERS!
          </h1>
          <div className="flex justify-center pt-5">
            <button className="bg-blue-900 text-white rounded-sm text-xs px-3 py-2">
              View List Of All Courses
            </button>
          </div>
        </div>
        
      </div>
      <div className="py-14 w-full bg-lightpurple ">
          <div
          className="px-16  py-4"
            style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
          >
            <h1 className="text-white font-medium text-center text-[25px] pt-10">
              Other Features!
            </h1>
            <div className="grid grid-cols-12 ">
              {OtherFeature.map((feature) => {
                return (
                  <>
                    <div className="col-span-3 py-8 ">
                      <div className="flex flex-col ">
                        <div className="flex justify-center">
                          <div className="text-center text-white  text-[40px]">
                            {feature.img}
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="text-white text-xs font-medium text-center">
                            {feature.heading}
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
    </>
  );
};

export default SafetyTraining;

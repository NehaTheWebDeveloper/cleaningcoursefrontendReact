import { useState, useEffect } from "react";
import { sliderData } from "../../Component/Utils/SliderData";
import { AiFillFire } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="">
      <MdArrowBackIos
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-4xl text-white hover:text-gray-300 z-10"
        onClick={prevSlide}
      />
      <MdArrowForwardIos
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-4xl text-white hover:text-gray-300 z-10"
        onClick={nextSlide}
      />
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={` w-full bg-gray-900 h-full  transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {index === currentSlide && (
            <>
              <div className=" h-full text-white ">
                <div className="grid grid-cols-12 items-center justify-between px-16 ">
                  <div className="col-span-6">
                    <div className="flex flex-col gap-5">
                      <h1 className="font-bold text-[60px]">{slide.heading}</h1>
                      <p className="text-gray-300 w-96 border-l-2 border-slate-500 px-2">
                        {slide.content}
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
                    <img
                      src={slide.image}
                      alt="hello"
                      className="rounded h-[570px] "
                    />
                    <div className="flex items-center justify-end absolute bottom-20    right-16 ">
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
              </div>
              {/* <div className="h-full relative">
            <img src={slide.image} alt="slide" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-3xl font-bold z-20">{slide.heading}</h2>
              <p className="z-20">{slide.desc}</p>
              <hr className="my-4 w-16 border border-white z-20" />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white z-20">
                Get Started
              </button>
            </div>
          </div> */}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;

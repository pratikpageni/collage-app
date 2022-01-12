import React from "react";
import { useState } from "react";
import Header from "./Component/Header";
import Carousel from "react-carousel-minimal/dist/components/Carousel";

const App = () => {
  return (
    <div>
      <Header />
      <Section1 />
    </div>
  );
};

export default App;

const Section1 = () => {
  const [active, setActive] = useState(true);
  const tabName = ["Notice", "Apply"];
  const changeTab = (tab) => {};

  return (
    <div className="mx-3 my-6 ">
      <div className="flex ">
        <div className="w-1/5">
          <div className="border bg-gray-400 rounded-lg">
            <div className="">
              <div className="w-full flex justify-between">
                <a
                  onClick={changeTab(tabName[0])}
                  className={`py-3 cursor-pointer text-black bg-gray-400  hover:bg-gray-300  text-center w-1/2 border-r-2 border-b-2 border-r-slate-300`}
                >
                  Notice
                </a>
                <a
                  onClick={changeTab(tabName[1])}
                  className={`py-3 bg-white hover:bg-gray-300 hover:text-black border-b-2  cursor-pointer text-center w-1/2`}
                >
                  Apply
                </a>
              </div>
              <div className="hidden">
                {[0, 0, 0, 0].map((data, index) => {
                  return (
                    <p
                      key={index}
                      className="border-2  rounded-lg m-2 border-slate-300 px-2 "
                    >
                      This is inform all that ads tommarwo is holiday
                    </p>
                  );
                })}
              </div>
              <div className="mx-2">
                <div className="flex flex-col">
                  <label>Name</label>
                  <input
                    type="text"
                    className="my-1 focus:outline-none border rounded-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Address</label>
                  <input
                    type="text"
                    className="my-1 focus:outline-none border rounded-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="my-1 focus:outline-none border rounded-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Email</label>
                  <input
                    type="text"
                    className="my-1 focus:outline-none border rounded-sm"
                  />
                </div>
                <div className="text-center py-2">
                  <button className="px-2 py-1 w-full rounded-md text-white bg-sky-400">
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5">{/* <CarouselMain /> */}</div>
      </div>
    </div>
  );
};

const CarouselMain = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      slidesToSlide={1}
      swipeable={true}
      draggable={true}
      showDots={true}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="mx-auto border-2 container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px lg:h-80  "
    >
      {[0, 0, 0, 0].map((data, index) => {
        return (
          <div className="relative custom-carousal">
            <img className="lg:h-80 h-40 w-full object-scale-fill" src="" />
            <div className="absolute inset-0 z-50 bg-gray">lore</div>
          </div>
        );
      })}
    </Carousel>
  );
};

import { useState } from "react";
import Carousel from "flat-carousel";
function Home() {
  return (
    <div>
      <Section1 />
    </div>
  );
}
export default Home;

const Section1 = () => {
  const [active, setActive] = useState(true);
  const tabName = ["Notice", "Apply"];

  return (
    <div className="mx-3 my-6 ">
      <div className="flex ">
        <div className="w-1/5">
          <div className="border bg-gray-400 rounded-lg">
            <div className="">
              <div className="w-full flex justify-between">
                <a
                  onClick={() => {
                    setActive(true);
                  }}
                  className={`py-3 cursor-pointer text-black ${
                    active ? "" : "bg-white"
                  }   hover:bg-gray-300  text-center w-1/2 border-r-2 border-b-2 border-r-slate-300`}
                >
                  Notice
                </a>
                <a
                  onClick={() => setActive(false)}
                  className={`py-3  ${
                    active ? "bg-white" : ""
                  } hover:bg-gray-300 hover:text-black border-b-2 text-black cursor-pointer text-center w-1/2`}
                >
                  Apply
                </a>
              </div>
              <div className={`${active ? "" : "hidden"}`}>
                {[0, 0, 0, 0].map((data, index) => {
                  return (
                    <p
                      key={index}
                      className="border-2 bg-sky-400 rounded-lg my-2 mx-1 border-slate-300 px-2 "
                    >
                      sdsd ds This is infory m all that ads tommarwo is holiday
                    </p>
                  );
                })}
              </div>
              <div className={`${active ? "hidden" : ""} mx-2`}>
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
        <div className="w-4/5">
          <CarouselMain />
        </div>
      </div>
    </div>
  );
};

const CarouselMain = () => {
  return <div className=""></div>;
};

import React from "react";
const Header = () => {
  return (
    <>
      <top className=" flex justify-between bg-sky-300 ">
        <div className="flex mx-auto py-2 px-3 space-x-10 font-mono text-white">
          <div># Engage</div>
          <div># learn</div>
          <div># Inovate</div>
          <div># Succeed</div>
          <div># Connect</div>
        </div>
      </top>
      <nav className="bg-gray-100">
        <div className="xl:max-w-5xl mx-auto ">
          <div className="flex justify-between">
            {/* logo */}
            <div className="flex space-x-4">
              <div className="mr-4 px-4 py-3">
                <a href="#" className="flex items-center  w-2/5">
                  <img
                    src="https://thearyanschool.edu.np/media-files/images/engineering-logo.png?fbclid=IwAR3P8NFPd347ODw-ImVBrCvmW8CsK2HKsVl4GcSfr_c6PqKiyEiizohrQaM"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
            {/* primary nav */}
            <div className="text-xl space-x-4 px-4 py-4 justify-between font-serif mr-16">
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Blog</a>
              <a href="">Gallery</a>
              <a href="">Contact </a>
            </div>

            {/* secondary nav */}
            <div className="mt-3 mr-12 ">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-8 border border-blue-700 rounded">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

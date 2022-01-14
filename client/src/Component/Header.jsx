import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <top className=" flex justify-between bg-sky-300 ">
        <div className=" flex mx-auto py-2 px-3 space-x-10 font-mono text-white">
          <div># Engage</div>
          <div># learn</div>
          <div># Inovate</div>
          <div># Succeed</div>
          <div># Connect</div>
        </div>
      </top>
      <nav className="bg-gray-100">
        <div className="xl:max-w-5xl mx-auto ">
          <div className="mx-2 ">
            {/* logo */}
            <div className="flex justify-between space-x-4">
              <div className="mr-4 px-4 py-3 w-5/12">
                <a href="#" className="flex items-center  w-3/5">
                  <Link to="/">
                  <img
                    src="https://thearyanschool.edu.np/media-files/images/engineering-logo.png?fbclid=IwAR3P8NFPd347ODw-ImVBrCvmW8CsK2HKsVl4GcSfr_c6PqKiyEiizohrQaM"
                    alt="logo"
                  />
                  </Link>
                </a>
              </div>
           
          
            <div className="text-xl space-x-4 w-6/12 py-5 justify-between font-serif mr-16">
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Blog</a>
              <a href="">Gallery</a>
              <a href="">Contact </a>
            </div>
               
          
            <div className="py-2 w-3/12 my-2  flex justify-between ">
            <Link to="/login" >
              <button className="bg-blue-500 hover:bg-blue-700 py-2 text-white font-bold  px-9 border border-blue-700 rounded">
              login
              </button>
            </Link>
             <Link to="/register" >
              <button class="bg-blue-500 py-2  hover:bg-blue-700 px-15 text-white font-bold px-9 border border-blue-700 rounded">
              Register
              </button>
              </Link>
            </div>
            </div>
        
          </div>
        </div>
      </nav>
  
    </>
  );
};

export default Header;

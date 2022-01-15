import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="mt-10 sm:mt-0 pb-5">
        <div className="md:grid md:grid-cols-1 w-1/3 mx-auto md:gap-6">
          <div className="md:col-span-1"></div>
          <div className="mt-3 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-3 bg-white sm:p-">
                  <h1 className="text-xl font-bold text-black text-center">
                    Login
                  </h1>
                  <div className="grid grid-cols-1 gap-6">
                    <div className=" sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full py-2 px-3 border-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className=" sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full py-2 px-3 border-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <Link to="/forgetPassword">
                      <p className="text-blue-400">Forget Password</p>
                    </Link>
                  </div>
                </div>
                <div className="px-4 py-3 flex justify-center bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm w-1/3"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const ForgetPassword = () => {
  return (
    <div className="mt-10 sm:mt-0 pb-5">
      <div className="md:grid md:grid-cols-1 w-1/3 mx-auto md:gap-6">
        <div className="md:col-span-1"></div>
        <div className="mt-3 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-3 bg-white sm:p-">
                <h1 className="text-xl font-bold text-black text-center">
                  Forget Password
                </h1>
                <div className="grid grid-cols-1 gap-6">
                  <div className=" sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full py-2 px-3 border-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 flex justify-center bg-gray-50 text-right sm:px-6">
                <button type="submit" className="btn btn-primary btn-sm w-1/3">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Login, ForgetPassword };

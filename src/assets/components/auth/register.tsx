import React from "react";
import logo from "./logo.png";

const register = () => {
  return (
    <>
      <div className="min-h-screen font-kanit flex items-center justify-center w-full dark:bg-teal-200">
        <div className="bg-white  border-green-700 dark:bg-white-900 shadow-md rounded-lg px-8 py-6 max-w-md">
          <img src={logo} alt="logo" />
          <br />
          <h1 className="text-2xl font-kanit bg-green-700 rounded-md font-bold text-center mb-4 dark:text-white">
            Register for an account
          </h1>
          <form action="#">
            <div className="mb-4">
              <label
                htmlFor="Name"
                className="font-kanit block text-sm font-medium text-green-700 dark:text-green-700-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className=" font-kanit shadow-sm rounded-md w-full px-3 py-2 border border-green-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4 justify-items-start">
              <label
                htmlFor="section"
                className="font-kanit block text-ml font-medium text-green-700 dark:green-700 mb-2"
              >
                Section
                <input
                  type="Radio"
                  id="section"
                  name="section"
                  value=""
                  className="font-kanit my-auto w-10 transform scale-125 shadow-sm rounded-md  border border-green-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                <label>CED</label>
                <input
                  type="Radio"
                  id="section"
                  name="section"
                  className="font-kanit my-auto w-10 transform scale-125 shadow-sm rounded-md  border border-green-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                <label>TCT</label>
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor="Name"
                className="font-kanit block text-sm font-medium text-green-700 dark:text-green-700-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="text"
                id="name"
                className="font-kanit shadow-sm rounded-md w-full px-3 py-2 border border-green-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="font-kanit block text-sm font-medium text-green-700 dark:green-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="font-kanit shadow-sm rounded-md w-full px-3 py-2 border border-green-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Name"
                className="font-kanit block text-sm font-medium text-green-700 dark:text-green-700-300 mb-2"
              >
                Confirm Password
              </label>
              <input
                type="text"
                id="name"
                className="font-kanit shadow-sm rounded-md w-full px-3 py-2 border border-green-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="font-kanit flex items-center justify-between mb-4"></div>

            <button
              type="submit"
              className="font-kanit w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-400 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default register;

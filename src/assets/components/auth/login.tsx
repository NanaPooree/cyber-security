import React from "react";
import logo from "./logo.png"
import Register from "./register";
const Login = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full dark:bg-teal-200">
        <div className="bg-white  border-green-700 dark:bg-white-900 shadow-md rounded-lg px-8 py-6 max-w-md">
          <img  src={logo} alt="logo" />
          <br />
          <h1 className="text-2xl bg-green-700 rounded-md font-bold text-center mb-4 dark:text-white">
            Login To Booking Classroom 
          </h1>
          <form action="#">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-green-700 dark:text-green-700-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-green-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-green-700 dark:green-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm rounded-md w-full px-3 py-2 border border-green-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
              <br />
              <a
                href="#"
                className="text-xs text-green-700 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                  
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-green-700 dark:green-700"
                >
                  Remember me
                </label>
              </div>
              <a
                href="register"
                className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Account
              </a>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-400 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
              
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;

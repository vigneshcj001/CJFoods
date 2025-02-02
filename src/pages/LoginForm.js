import React from "react";
import { Google_SVG, Github_SVG } from "../Utils/const";

function LoginForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign in to your account
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign in
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-3 text-sm text-gray-500">Or continue with</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-blue-600 hover:text-white transition duration-200 "
          > 
            <img src={Google_SVG} alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>
          <button
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-200"
          >
            <img src={Github_SVG}  alt="GitHub" className="w-5 h-5 mr-2" />
            GitHub
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Not a member?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;

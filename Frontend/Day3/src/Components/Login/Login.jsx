import React from "react";


const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center dark:text-blueColor">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600 dark:text-slate-300"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              // Add any additional necessary attributes or event handlers
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 dark:text-slate-300"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              // Add any additional necessary attributes or event handlers
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 dark:bg-blueColor dark:hover:bg-white dark:text-blueColor dark:hover:text-blueColor"
          >
            Login
          </button>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 dark:bg-blueColor dark:hover:bg-white dark:text-blueColor dark:hover:text-blueColor custom-btn mt-4"
          >
            Back
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

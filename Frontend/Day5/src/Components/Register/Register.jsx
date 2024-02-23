import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Navbar from "../NavBar/NavBar";

const Register = () => {
  return (
    <div>
      <Navbar/>
      <div className="blo">
        <div className="bg">
          <h2 className="text-2xl font-bold mb-4 text-center dark:text-blueColor">
            Register
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600 dark:text-slate-300">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
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
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 dark:text-slate-300"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="qualification"
                className="block text-sm font-medium text-gray-600 dark:text-slate-300"
              >
                Qualification:
              </label>
              <select
                id="qualification"
                name="qualification"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              >
                <option value="" disabled defaultValue>
                  Select your qualification
                </option>
                <option value="high-school">High School</option>
                <option value="associate-degree">Associate Degree</option>
                <option value="bachelor-degree">Bachelor's Degree</option>
                <option value="master-degree">Master's Degree</option>
              </select>
            </div>

            <center>
              <button type="submit" className="bu1">
                Register
              </button>
            </center>

            <center>
              <Link to={"/"}>
                <button className="bu1">Back</button>
              </Link>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

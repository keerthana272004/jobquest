import React from "react";
import { Footer, Header, Jobs, Search, Value, Login } from "./Components";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Components/Register/Register";

const Log = () => {
  return (
    <div className="w-full dark:bg-slate-800">
      <div className="w-[90%] m-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <Login/>
      </div>
    </div>
  );
};

export default Log;

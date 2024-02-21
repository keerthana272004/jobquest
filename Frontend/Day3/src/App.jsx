import React from "react";
import { Footer, Header, Jobs, Search, Value, Login } from "./Components";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Components/Register/Register";

const App = () => {
  return (
    <div className="w-full dark:bg-slate-800">
      <div className="w-[90%] m-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/homepage" element={<LandingPage/>} /> */}
            <Route path="/register" element={<Register />} />

            {/* Add a new route with the Navigate component to open a route as a new page */}
            <Route
              path="/register-new-page"
              element={<Navigate to="/register" replace />}
            />
          </Routes>
        </Router>
        <Header />
        <main>
          <Search />
          <Jobs />
          <Value />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;

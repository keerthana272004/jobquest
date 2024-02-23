import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/JobLogin";
import Register from "./Components/Register/Register";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

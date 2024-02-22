import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" exact element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

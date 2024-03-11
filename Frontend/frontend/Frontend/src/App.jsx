import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/JobLogin";
import Register from "./Components/Register/Register";
import Jobs from "./Components/JobDiv/Jobs";
import RegistrationForm from "./Components/Details/AdForm";
import Userdetails from "./Components/Profile/Profile";
import ButtonComponent from "./Components/UserorAdmin.jsx/ButtonComponent";
import AdminProfilePage from "./Components/Admin/AdminProfilePage";
import { BiLogoDailymotion } from "react-icons/bi";
import LogAdmin from "./Components/logadmin/logadmin";
import ALNav from "./Components/ALNav/ALNav";
import AdminPro from "./Components/AdminProfile/AdminPro";
import AdminCompany from "./Components/Company/AdminCompany";
import ApplicantDetails from "./Components/ApplicantDetails/ApplicantDetails";
import AboutUsPage from "./Components/Aboutus/Aboutus";
import UserNav from "./Components/UserNav/UserNav";
import FAQComponent from "./Components/FAQComponent/FAQComponent";
import FeedForm from "./Components/Feedback/FeedBack";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import OtherNav from "./Components/otherNav/otherNav";
// import ResumePage from "./Components/Resume/Resume";


const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/home" exact element={<Home/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/job" exact element={<Jobs/>} />
          <Route path="/details" exact element={<RegistrationForm/>}/>
          <Route path="/profile" exact element={<Userdetails/>}/>
          <Route path="/" exact element={<ButtonComponent/>}/>
          <Route path="/Admin" exact element={<AdminProfilePage/>}/>
          <Route path="/logadmin" exact element={<LogAdmin/>}/>
          <Route path="/ALNav" exact element={<ALNav/>}/>
          <Route path="/AdminPro" exact element={<AdminPro/>}/>
          <Route path="/AdminCompany" exact element={<AdminCompany/>}/>
          <Route path="/ApplicantDetails" exact element={<ApplicantDetails/>}/>
          <Route path="/Aboutus" exact element={<AboutUsPage/>} />
          <Route path="/UserNav" exact element={<UserNav/>} />
          <Route path="/FAQComponent" exact element={<FAQComponent/>} />
          <Route path="/Feedback" exact element={<FeedForm/>} />
          <Route path="/PrivacyPolicy" exact element={<PrivacyPolicy/>} />
          <Route path="/otherNav" exact element={<OtherNav/>} />
          {/* <Route path="/Resume" exact element={<ResumePage/>} /> */}

        </Routes>
      </Router>
    </div>
  );
};

export default App;

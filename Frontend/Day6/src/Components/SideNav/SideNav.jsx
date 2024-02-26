import  { useState } from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import "./SideNav.css";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { RiMenuFoldLine } from "react-icons/ri";

const SideNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <nav className="sidebar1">
      <div className="sidebar-left" onClick={toggleSidebar}>
        <MdOutlineMenuOpen className="side-menu1" />
        
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="loo">
      <strong>Job</strong>Search <i className="fab fa-typo3"></i>
              <img src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1708685407/online-recruitment_9631356_nyc0ep.png" alt="img" className="logoimg"/>
            </div>
        <button className="close-sidebar" onClick={toggleSidebar}>
          <RiMenuFoldLine className="side-menu1" />
        </button>
       
        <div className="sidebar-content">
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/">Home</Link>
          </div>
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/AdminPro">Profile</Link>
          </div>
          <div className="sidebar-items">
            <MdDashboard />
            <a href="/AdminCompany">Add Job</a>
          </div>
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/Admin">User Details</Link>
          </div>
          <div className="sidebar-items">
            <IoMdHome />
            <Link to="/ApplicantDetails">Applicant Details</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default SideNav;
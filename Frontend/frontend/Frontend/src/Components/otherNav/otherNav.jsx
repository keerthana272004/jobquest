import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./otherNav.css";

function OtherNav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
  const handleProfile = () => {
    navigate('/profile');
  };
  
  // Create a ref for the Companies section
  const companiesRef = useRef(null);
  const contactRef = useRef(null);
  

  const handleCompany = () => {
    // Assuming you have an element with id="job-section"
    const jobSection = document.getElementById("job-section");

    if (jobSection) {
      jobSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleContact = () => {
    // Assuming you have an element with id="job-section"
    const jobSection1 = document.getElementById("job-section1");

    if (jobSection1) {
      jobSection1.scrollIntoView({ behavior: "smooth" });
    }
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <div>
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <strong>Job</strong>Search <i className="fab fa-typo3"></i>
              <img src="https://res.cloudinary.com/dqitu9wyl/image/upload/v1708685407/online-recruitment_9631356_nyc0ep.png" alt="img" className="logoimg"/>
            </div>

            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-links" onClick={handleContact} ref={contactRef}>
                  Contact
                </div>
              </li>
              <li className="nav-item">
                {/* Attach the ref to the Companies section */}
                <div className="nav-links" onClick={handleCompany} ref={companiesRef}>
                  Companies
                </div>
              </li>
              <li className="nav-item">
                {/* Attach the ref to the Companies section */}
                <div className="nav-links" onClick={handleProfile} ref={companiesRef}>
                  Profile
                </div>
              </li>
              <li className="nav-item">
                <div  className="nav-links" onClick={handleLogin}>
                  Log out
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </div>
  );
}

export default OtherNav;

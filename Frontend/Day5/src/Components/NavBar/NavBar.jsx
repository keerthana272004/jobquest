import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
  const handleHome = () => {
    navigate('/');
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
                <div className="nav-links" >
                  <a href="/">Home</a>
                </div>
              </li>
              <li className="nav-item">
                <div to="/" className="nav-links" onClick={closeMobileMenu}>
                Contact
                </div>
              </li>
              <li className="nav-item">
                <div
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Companies
                </div>
              </li>
              <li className="nav-item">
                <div
                  to="/products"
                  className="nav-links"
                  onClick={handleLogin}
                >
                  Sign In
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Navbar;

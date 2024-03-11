import React from "react";
import "./Footer.css";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer-logo">
          <strong>Job</strong>Search <i className="fab fa-typo3"></i>
        </div>
       
      </div>
      <div className="left-side">
        <span className="span-div1">Company</span>
        <div className="left-side2">
          <a href="/Aboutus"><li className="li-div">About us</li></a>
          <a href="/FAQComponent"><li className="li-div">FAQ</li></a>
        </div>
      </div>
      <div className="left-side">
        <span className="span-div1">Resources</span>
        <div className="left-side2">
          <a href="/Feedback"><li className="li-div">Feedback</li></a>
          <a href="/PrivacyPolicy"><li className="li-div">Privacy policy</li></a>
        </div>
      </div>
      {/* <div className="left-side">
        <span className="span-div1">Support</span>
        <div className="left-side2">
          <li className="li-div">Events</li>
          <li className="li-div">Promo</li>
          <li className="li-div">Req Demo</li>
          <li className="li-div">Careers</li>
        </div>
      </div> */}
      <div className="left-side">
        <span className="span-div1">Contact info</span>
        <div className="infos">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwElEQVR4nGNgGHDQXbrwPyWYAUTcufqJLAw34MCWa//vXCFN89GdtxEGzGrb8H9O56b/J/feI6jx/NGn/xdP2vl/Rss6hAG3r3z8f3Dr9f9TG1b9XzJx5/+LJ55jaLxy+uX/1bMP/Z/SsPr/nvUX/9++/BEzDG5efP9/89KT/ydWL/u/bv6R/2cPP/p/7siT/5uWnPg/qXYFWA6kBiMM7mDY9ur/mrmHwZpAGMQGieEMxDuUxsKdoW9ANyVJecABAE8edT8ZpzcfAAAAAElFTkSuQmCC" alt="im" className="immm"/>
          <small className="email">keerthanas@gmail.com</small>
        </div>
        {/* <div className="left-side">
        <div className="icons">
            <AiFillInstagram className="icon"  />
            <BsFacebook className="icon"  />
            <AiOutlineTwitter className="icon" />
          </div>
          </div> */}
      </div>
      <div className="left-side">
      <span className="span-div1">Social Networks</span>
        <div className="iconss">
            <AiFillInstagram className="icon"  />
            <BsFacebook className="icon"  />
            <AiOutlineTwitter className="icon" />
          </div>
          </div>
    </div>
  );
};

export default Footer;

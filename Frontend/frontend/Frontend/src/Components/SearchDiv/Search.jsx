import React from "react";
import "./Search.css";
import { AiOutlineSearch , AiOutlineCloseCircle} from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";


const Search = ({ onSearch }) => {
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ job, company, location });
  };
  const handleClear = () => {
    setJob("");
  }; 
  const handleClear1 = () => {
    setCompany("");
  };
  const handleClear2 = () => {
    setLocation("");
  };
  return (
    <div className="search">
      <form action="" onSubmit={handleSubmit}>
        <div className="firstDiv">
          <div className="icons">
            <AiOutlineSearch className="icon"  />
            <input type='text' className="search-input" value={job} onChange={(e) => setJob(e.target.value)} placeholder="  Search Job here ..."/>
            <AiOutlineCloseCircle className="icon1" onClick={handleClear} />
          </div>
          <div className="icons">
            <BsHouseDoor className="icon"  />
            <input type='text' className="search-input" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="  company ..."/>
            <AiOutlineCloseCircle className="icon1" onClick={handleClear1} />
          </div>
          <div className="icons">
            <CiLocationOn className="icon"  />
            <input type='text' className="search-input" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="  location ..."/>
            <AiOutlineCloseCircle className="icon1" onClick={handleClear2} />
          </div>
          <button className='btn'>Search</button>
        </div>
      </form>
       <center><p>Find your jobs here......</p></center>
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from "react";
import "./Jobs.css";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "../SearchDiv/Search";

const Jobs = () => {
  const [searchCriteria, setSearchCriteria] = useState({ job: "", company: "", location: "" });
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/AddJob"); // Replace with your actual API endpoint
        setJobs(response.data); // Assuming the API response is an array of jobs
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchData();
  }, []); // Run this effect only once when the component mounts

  const handleSearch = ({ job, company, location }) => {
    setSearchCriteria({ job, company, location });
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchCriteria.job.toLowerCase()) &&
      job.company.toLowerCase().includes(searchCriteria.company.toLowerCase()) &&
      job.location.toLowerCase().includes(searchCriteria.location.toLowerCase())
    );
  });

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="job">
        {filteredJobs.map(({ id, image, title, location, description, company, time }) => {
          return (
            <div className="groupDiv" id="groupDiv" key={id}>
              <span className="groupSpan">
                <h1 className="textH1">{title}</h1>
                <span className="SpanDiv">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="textH6">{location}</h6>
              <hr className="line" />
              <p className="textP">{description}</p>
              <div className="company">
                <img src={image} alt="" className="logo" />
                <span className="SpanDiv1">{company}</span>
              </div>
              <Link to={{
  pathname: "/details",
  state: { job: { id, title, company } } 
  
}}>
  
  <button className="btn1">Apply Now</button>
</Link>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;

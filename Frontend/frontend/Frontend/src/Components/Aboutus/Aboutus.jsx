
import React from 'react';
import './Aboutus.css';
import UserNav from '../UserNav/UserNav';
import Footer from '../FooterDiv/Footer';



const AboutUsPage = () => {
  return (
    <div>
    <UserNav/>
    
    <div className="about-us-container">
        
      <h1 className='abt'>About Us</h1>
      <br/>

      <p className="para">
        Welcome to our job search platform! We understand the challenges
        of finding the perfect job, and our mission is to make the process
        easier for both job seekers and employers.
      </p>
      <br/>
      <p className="para">
        Our platform connects talented individuals with exciting
        opportunities, helping companies find the right candidates and
        individuals land their dream jobs.
      </p><br/>
      <p className="para">
        Whether you're a job seeker or an employer, we're here to
        streamline the hiring process and make it a positive experience for
        everyone involved.
      </p><br/>
      <p className="para">
        Thank you for choosing our job search website. We look forward to
        being a part of your career journey!
      </p>
    </div>
    <br/>
    <div><Footer/>
        </div>
    </div>
  );
};

export default AboutUsPage;

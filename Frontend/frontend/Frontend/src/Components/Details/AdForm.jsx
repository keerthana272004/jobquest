// import React from 'react';
import Footer from '../FooterDiv/Footer';

import './form.css'; 
import { useState ,useEffect} from 'react';
import axios from 'axios';
import OtherNav from '../otherNav/otherNav';
import { Navigate, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [collegename, setCollegename] = useState('');
  const [qualification, setQualification] = useState('');
  const [location, setLocation] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [state, setState] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [jobName, setJobName] = useState('');
  const [compayName, setCompanyName] = useState('');


  // New fields for job application details
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  // New field for languages known
  const [languages, setLanguages] = useState('');

  const navigate = useNavigate();
  const { job } = location.state || {}; // Access job details from location state

  useEffect(() => {
    if (job) {
      
      setJobName(job.title);
      setCompanyName(job.company);
    }
  }, [job]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/forms/addd", {
        name: name,
        dob: dob,
        email: email,
        mobile: mobile,
        gender: gender,
        qualification: qualification,
        collegename: collegename,
        location: location,
        cgpa: cgpa,
        state: state,
        jobName: jobName,
        companyName: compayName,
        experience: experience,
        skills: skills,
        coverLetter: coverLetter,
        languages: languages,
      });
      console.log("Applied successful:", response.data);
      // navigate("/Resume");
      alert("Application Submitted Successfully!");

      const amountx= 100
      var options = {
      key: "rzp_test_i1tLowNKXmrrLX",
      key_secret: "AC5ZHrWpt0uurpR7eXt9yUEQ",
      amount: amountx*100,
      currency: "INR",
      name: "D-Portal",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id)
      },
      prefill: {
        name: "DEEPAK",
        email: "deepakprabu1234@gmail.com",
        contact: "8754988838"
      },
      notes: {
        address: "Sri krishna college of Engineering and Technology"
      },
      theme: {
        color: "#3399cc"
      }
    }

    var pay = new window.Razorpay(options)
    pay.open()
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <OtherNav />
      <form className="registration-form" onSubmit={handleSubmit}>
        <center><b className='for'>FILL YOUR DETAILS HERE...</b></center>
        <div className='get-done'>
          <div className="form-container">
            <div className="personal-details">
              <b className='perd'>Personal Details</b>
            
              <div className="form-group">
                <label className='in2' htmlFor="fullName">Full Name</label>
                <input className='in1' required id="fullName" type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="dob" className='in2'>Date of Birth</label>
                <input className='in1' required id="dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)}/>
                <label htmlFor="email" className='in2'>Email</label>
                <input className='in1' required id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="mobile" className='in2'>Mobile Number</label>
                <input required id="mobile"className='in1' type="tel" placeholder="Enter mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                <label htmlFor="gender" className='in2'>Gender</label>
                <input required id="gender" type="text"className='in1' placeholder="Enter your gender" value={gender} onChange={(e) => setGender(e.target.value)}/>
                <label htmlFor="occupation" className='in2'>Qualification</label>
                <input required id="occupation" type="text"className='in1' placeholder="Enter your Qualification" value={qualification} onChange={(e) => setQualification(e.target.value)}/>
              </div>
            </div>
            <div className="identity-details">
              <b>Identity Details</b>
             
              <div className="form-group">
                <label htmlFor="idType" className='in2'>College name</label>
                <input required className='in1' id="idType" type="text" placeholder="Enter College name" value={collegename} onChange={(e) => setCollegename(e.target.value)}/>
                <label htmlFor="idNumber" className='in2'>Location</label>
                <input required className='in1' id="idNumber" type="text" placeholder="Enter College Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                <label htmlFor="issueAuthority" className='in2'>CGPA</label>
                <input required className='in1' id="issueAuthority" type="text" placeholder="Enter your CGPA" value={cgpa} onChange={(e) => setCgpa(e.target.value)}/>
                <label htmlFor="issuedState" className='in2'>State</label>
                <input required className='in1' id="issuedState" type="text" placeholder="Enter your state" value={state} onChange={(e) => setState(e.target.value)}/>
              </div>
            </div>
          </div>
          <div className="job-application-details">
            <b>Resume</b>
           
            <div className="form-group">
              <label htmlFor="experience" className='in2'>Work Experience</label>
              <input required className='in1' id="experience" type="text" placeholder="Enter your work experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
              <label htmlFor="skills" className='in2'>Skills</label>
              <input required className='in1' id="skills" type="text" placeholder="Enter your skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
              <label htmlFor="coverLetter" className='in2'>Cover Letter</label>
              <textarea required className='in1' id="coverLetter" placeholder="Write your cover letter" value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
              <label htmlFor="languages" className='in2'>Languages Known</label>
              <input required className='in1' id="languages" type="text" placeholder="Enter languages known" value={languages} onChange={(e) => setLanguages(e.target.value)} />
            </div>
          </div>
        </div>
        <button className='btn-frm' type="submit" >Next</button>
      </form>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RegistrationForm;

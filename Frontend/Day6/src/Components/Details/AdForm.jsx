// import React from 'react';
import Footer from '../FooterDiv/Footer';
import Navbar from '../NavBar/NavBar';
import './form.css'; 


const RegistrationForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Applied Successfully");
  }

  return (
    <div>
      <nav>
        <Navbar/>
      </nav>
      <form className="registration-form" onSubmit={handleSubmit}>
        <center><b className='for'>FILL YOUR DETAILS HERE...</b></center>
        <div className='get-done'>
          <div className="form-container">
            <div className="personal-details">
              <b>Personal Details</b>
              <div className="form-group">
                <label className='in2' htmlFor="fullName">Full Name</label>
                <input className='in1' required id="fullName" type="text" placeholder="Enter your full name" />
                <label htmlFor="dob" className='in2'>Date of Birth</label>
                <input className='in1' required id="dob" type="date" />
                <label htmlFor="email" className='in2'>Email</label>
                <input className='in1' required id="email" type="email" placeholder="Enter your email" />
                <label htmlFor="mobile" className='in2'>Mobile Number</label>
                <input required id="mobile"className='in1' type="tel" placeholder="Enter mobile number" />
                <label htmlFor="gender" className='in2'>Gender</label>
                <input required id="gender" type="text"className='in1' placeholder="Enter your gender" />
                <label htmlFor="occupation" className='in2'>Qualification</label>
                <input required id="occupation" type="text"className='in1' placeholder="Enter your occupation" />
              </div>
            </div>
            <div className="identity-details">
              <b>Identity Details</b>
              <div className="form-group">
                <label htmlFor="idType" className='in2'>College name</label>
                <input required className='in1' id="idType" type="text" placeholder="Enter College name" />
                <label htmlFor="idNumber" className='in2'>Location</label>
                <input required className='in1' id="idNumber" type="text" placeholder="Enter College Location" />
                <label htmlFor="issueAuthority" className='in2'>CGPA</label>
                <input required className='in1' id="issueAuthority" type="text" placeholder="Enter your CGPA" />
                <label htmlFor="issuedState" className='in2'>State</label>
                <input required className='in1' id="issuedState" type="text" placeholder="Enter your state" />
              </div>
            </div>
          </div>  
        </div>
        <button className='btn-form' type="submit" >Apply</button>
      </form>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default RegistrationForm;

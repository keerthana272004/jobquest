// PrivacyPolicyComponent.jsx
import React from 'react';
import './PrivacyPolicy.css';
import UserNav from '../UserNav/UserNav';
import Footer from '../FooterDiv/Footer';

const PrivacyPolicy = () => {
  return (
    <div><UserNav/>
    <div className="privacy-policy-container">
      <h2 className='pra'>Privacy Policy</h2>
      <br/>
      <p>
        Welcome to JobSearch.... This Privacy Policy describes how we collect, use, and
        share your personal information when you use our website.
      </p>
      <div className='if'>Information We Collect:</div>
      <div className='inf'>Personal Information:</div>

<div>When you create an account, we may collect personal information such as your name, email address, resume, and contact details.</div>
<div className='inf'>Usage Data:</div>

<div className='i'>We gather information about how you interact with our website, including pages visited, search queries, and job applications.</div>
<div className='if'>How We Use Your Information:</div>
<div className='inf'>Job Matching:</div>

<div className='i'>We use your profile information to match you with relevant job opportunities based on your skills and preferences.</div>
<div className='inf'>Communication:</div>

<div className='i'>We may use your contact information to send you updates about your job applications, new job opportunities, and important announcements.</div>
<div className='inf'>Improvement of Services:</div>

<div className='i'>We analyze user data to enhance and improve our website's functionality, content, and user experience.</div>
<div className='if'>Data Sharing:</div>
<div className='inf'>Employers and Recruiters:</div>

<div className='i'>Your profile information and job applications may be shared with potential employers or recruiters for the purpose of job placement.</div>
<div className='inf'>Service Providers:</div>

<div className='i'>We may engage third-party service providers to assist with various aspects of our services, such as analytics and technical support.</div>
<div className='if'>Security:</div>
<div className='inf'>Data Security:</div>
<div className='i'>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.</div>
<div className='if'>Your Choices:</div>
<div className='inf'>Profile Visibility:</div>

<div className='i'>You have the option to control the visibility of your profile and choose which information is shared with employers.</div>
<div className='inf'>Communication Preferences:</div>

<div className='i'>You can manage your communication preferences and opt-out of certain types of emails.</div>
<div className='if'>Updates to Privacy Policy:</div>
<div className='inf'>Notification of Changes:</div>
<div className='i'>We will notify users of any material changes to this Privacy Policy through email or prominent notices on our website.</div>
<div className='inf'>Contact Us:</div>
<div className='i'>If you have any questions or concerns about this Privacy Policy, please contact us at 'keerthana@gmail.com'.</div>

<div className='i'>By using JobSearch, you agree to the terms outlined in this Privacy Policy.</div>
    </div>
    <br/>
    <div><Footer/></div>
    
    </div>
  );
};

export default PrivacyPolicy;

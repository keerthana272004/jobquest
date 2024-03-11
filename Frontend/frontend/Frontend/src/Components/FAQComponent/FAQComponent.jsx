// FAQComponent.jsx

import React from 'react';
import './FAQComponent.css'; 
import UserNav from '../UserNav/UserNav';
import Footer from '../FooterDiv/Footer';

// Import the CSS file for styling

const FAQComponent = () => {
  const faqData = [
    {
      question: "1. What is JobSearchApp?",
      answer: "JobSearchApp is a powerful and user-friendly application designed to streamline and enhance your job search experience. It provides a comprehensive platform for job seekers to find, apply for, and manage job opportunities effortlessly."
    },
    {
        question: "2. How do I create an account?",
        answer: "To create an account, simply download the [JobSearchApp] from the App Store or Google Play Store. Once installed, follow the on-screen instructions to set up your profile by providing essential information such as your resume, skills, and preferences."
      },
      {
        question: "3. Is JobSearchApp free to use?",
        answer: "Yes, JobSearchApp is free to download and use. However, there may be premium features or subscription plans available for users who want additional benefits and advanced functionalities."
      },
      {
        question: "4. How can I search for jobs using JobSearchApp?",
        answer: "You can search for jobs by using keywords, location, industry, or specific companies. The application employs advanced algorithms to match your skills and preferences with relevant job listings, ensuring a more tailored job search experience."
      },
      {
        question: "5. Can I save jobs for later?",
        answer: "Absolutely! JobSearchApp allows you to save interesting job listings so you can revisit them later. You can create personalized lists and folders to organize your saved jobs efficiently."
      },
      {
        question: "6. How do I apply for jobs through the app?",
        answer: "When you find a job you're interested in, simply click on the 'Apply Now' button. [JobSearchApp] will guide you through the application process, providing you with the necessary steps and ensuring a seamless application submission."
      },
      {
        question: "7. Can I track the status of my job applications?",
        answer: "Yes, JobSearchApp provides a dashboard where you can track the status of all your job applications. Receive updates on whether your application is being reviewed, in progress, or if the employer has made a decision."
      },
      {
        question: "8. Is my personal information secure?",
        answer: "Absolutely. JobSearchApp takes user privacy seriously. Your personal information and data are encrypted and stored securely, following industry-standard security protocols. Be assured that your information will not be shared with third parties without your consent."
      },
      {
        question: "9. How can I set up job alerts?",
        answer: "Stay ahead in your job search by setting up personalized job alerts. Specify your criteria, such as job title, location, and industry, and [JobSearchApp] will notify you when relevant positions become available."
      },
      {
        question: "10. How do I get technical support?",
        answer: "If you encounter any issues or have questions about [JobSearchApp], visit our contact us section within the app. You can also reach out to our customer support team via email at support@jobsearchapp.com for prompt assistance."
      },
    
  ];

  return (
    <div><UserNav/>
       <div className="faq-container">
      <h2 className='aaa'>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faqItem, index) => (
          <div key={index} className="faq-item">
            <h3>{faqItem.question}</h3>
            <p>{faqItem.answer}</p>
          </div>
        ))}
      </div>
    </div>
    <br/>
    <div><Footer/>
        </div>
    </div>
 
  );
};

export default FAQComponent;

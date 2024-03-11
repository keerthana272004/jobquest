import { useState } from 'react';
import './Feedback.css';
import axios from 'axios';
import UserNav from '../UserNav/UserNav';
import Footer from '../FooterDiv/Footer';

const FeedForm = () => {
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  };


  const handleFeedback = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/feed/addfeed", {
        name: name,
        email: email,
        msg: msg
      
      });
      console.log("Feedback successful:", response.data);
      alert( "Your feedback has been submitted successfully!");
      
    } catch (error) {
      console.error("Feedback failed:", error);

    }
  };

    return (
      <div><UserNav/>
        <div className="down-container">
            <div className="feedy">
                <center><h2 className='fff'>FEEDBACK</h2></center>
                <form className='fd' onSubmit={handleFeedback} >
                    <label className="lab" htmlFor="name">Email</label>
                    <input type="email" value={email} placeholder="Enter your Email"  onChange={handleEmailChange} required />
                    <label className="lab" htmlFor="name">Username</label>
                    <input type="name" value={name} placeholder="Enter your Name" onChange={handleNameChange} required />
                    <label className="lab" htmlFor="name">Message</label>
                    <textarea type="name" value={msg} placeholder="Enter Message" onChange={handleMsgChange} required />
                    <center><button type='submit' className="btg-fd">Submit</button></center>
                </form>
            </div>
        </div>
        <div><Footer/></div>
        </div>
    );
};

export default FeedForm;
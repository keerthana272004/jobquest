import Footer from '../FooterDiv/Footer';
import Navbar from '../NavBar/NavBar';
import './Profile.css';
// import '../assets/css/profile.css';
import { useState, useEffect } from 'react';
// import Navbar from './NavBar';
// import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux

const Userdetails = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phonenumber: '',
    qualification: '',
  });
  const photo = "https://res.cloudinary.com/dx3051zza/image/upload/v1708583952/sk6dtxkwwrjwaysqdsco.webp";

  const [editedUser, setEditedUser] = useState({ ...user });
  const [isUserEditing, setIsUserEditing] = useState(false);
  const userEmail = useSelector(state => state.auth.sub); // Get user email from Redux state

  useEffect(() => {
    if (userEmail) {
      fetchUserData();
    }
  }, [userEmail]); // Fetch user data when userEmail changes

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/job_application/email/${userEmail}`); // Adjust the URL to your backend endpoint
      setUser(response.data);
      setEditedUser(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:8080/api/job_application/update/${user.id}`, editedUser); // Adjust the URL to your backend endpoint
      setUser({ ...editedUser });
      setIsUserEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleUserEdit = () => {
    setIsUserEditing(true);
  };

  const handleUserSave = () => {
    updateUser();
  };

  const handleUserCancel = () => {
    setEditedUser({ ...user });
    setIsUserEditing(false);
  };

  const navigate = useNavigate();

  // const handleLogout = () => {
  //   navigate('/login');
  //   console.log('Logged out');
  // };

  return (
    <div className='main1'>
      <nav>
        <Navbar/>
      </nav>
      {/* <button className="logout-button1" onClick={handleLogout}>Logout</button> */}
      <div className="profile-container">
        <img src={photo} alt="Profile" className="profile-photo" />
        <div className="profile-header">
          <h1 className="profile-title">{user.username}&apos;s Profile</h1>
        </div>
        <section className="user-details">
          <h2>User Details</h2>
          {isUserEditing ? (
            <>
              <label>Name: </label>
              <input
                className="input-field"
                type="text"
                value={editedUser.username || ''}
                onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
              />
              <br />
              <label>Email: </label>
              <input
                className="input-field"
                type="text"
                value={editedUser.email || ''}
                onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
              />
              <br />
              <label>Phone Number</label>
              <input
                className="input-field"
                type="number"
                value={editedUser.phonenumber || ''}
                onChange={(e) => setEditedUser({ ...editedUser, phonenumber: parseInt(e.target.value, 10) || 0 })}
              />
              <br />
              <label>Qualification: </label>
              <input
                className="input-field"
                type="text"
                value={editedUser.qualification || ''}
                onChange={(e) => setEditedUser({ ...editedUser, qualification: e.target.value })}
              />
              <br />
              <button className="btn-save" onClick={handleUserSave}>Save</button>
              <button className="btn-cancel" onClick={handleUserCancel}>Cancel</button>
            </>
          ) : (
            <>
              <p>Name: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Phone Number: {user.phonenumber}</p>
              <p>Qualification: {user.qualification}</p>
              <button className="btn-edit" onClick={handleUserEdit}>Edit</button>
            </>
          )}
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Userdetails;
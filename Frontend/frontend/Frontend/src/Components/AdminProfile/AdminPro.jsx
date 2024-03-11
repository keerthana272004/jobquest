// // import Footer from '../FooterDiv/Footer';
// // import Navbar from '../NavBar/NavBar';
// import SideNav from '../SideNav/SideNav';
// import './AdminPro.css';
// import { useState } from 'react';
// const AdminPro = () => {

//   const [user, setUser] = useState({
//     name: 'vijay c',
//     location: 'pollachi,TamilNadu,India',
//     age: 50,
//     contact: 'vijay@gmail.com | 8668132973',
//   });

//   const [editedUser, setEditedUser] = useState({ ...user });
//   const [isUserEditing, setIsUserEditing] = useState(false);

//   const handleUserEdit = () => {
//     setIsUserEditing(true);
//   };

//   const handleUserSave = () => {
//     setUser({ ...editedUser });
//     setIsUserEditing(false);
//   };

//   const handleUserCancel = () => {
//     setEditedUser({ ...user });
//     setIsUserEditing(false);
//   };

//   return (
//     <div>
//         <nav>
//             <SideNav/>
//         </nav>
//         <div className="admin-profile-header2">
//           <strong>Welcome, Admin</strong>
          
//         </div>
//     <div className="profile-container">
    
//       <div className="profile-header">
        
//         <h1 className="profile-title">{user.name}&apos;s Profile</h1>
//       </div>
//       <section className="user-details">
//         <b>Admin Details</b>
//         {isUserEditing ? (
//           <>
//           <br/>
//             <label>Name:   </label>
//             <input
//               className="input-field"
//               type="text"
//               value={editedUser.name}
//               onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
//             />
//             <br />
//             <label>Location: </label>
//             <input
//               className="input-field"
//               type="text"
//               value={editedUser.location}
//               onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })}
//             />
//             <br />
//             <label>Age: </label>
//             <input
//               className="input-field"
//               type="number"
//               value={editedUser.age}
//               onChange={(e) => setEditedUser({ ...editedUser, age: parseInt(e.target.value, 10) || 0 })}
//             />
//             <br />
//             <label>Contact: </label>
//             <input
//               className="input-field"
//               type="text"
//               value={editedUser.contact}
//               onChange={(e) => setEditedUser({ ...editedUser, contact: e.target.value })}
//             />
//             <br />
//             <center><button className="btn-save" onClick={handleUserSave}>Save</button></center>
//             {/* <br/> */}
//             <center><button className="btn-cancel" onClick={handleUserCancel}>Cancel</button></center>
//           </>
//         ) : (
//           <>
//             <br/>
//             <p>Name: {user.name}</p>
//             <br/>
//             <p>Location: {user.location}</p>
//             <br/>
//             <p>Age: {user.age}</p>
//             <br/>
//             <p>Contact: {user.contact}</p>

//             <center><button className="btn-edit" onClick={handleUserEdit}>Edit</button></center>
//           </>
//         )}
//       </section>
//     </div>
    
//     </div>
//   );
// };

// export default AdminPro;

// import Footer from '../FooterDiv/Footer';
// import Navbar from '../NavBar/NavBar';
// import './Profile.css';
// import '../assets/css/profile.css';
import { useState, useEffect } from 'react';
// import Navbar from './NavBar';
// import Footer from './Footer';
import SideNav from '../SideNav/SideNav';
import './AdminPro.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux

const AdminPro = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phonenumber: '',
    // qualification: '',
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

  return (
    <div className='main1'>
      <nav>
        <SideNav/>
      </nav>
      <div className="admin-profile-header2">
           <strong>Welcome, Admin</strong>
          
         </div>
      <div className="profile-container">
        <img src={photo} alt="Profile" className="profile-photo" />
        <div className="profile-header">
          <h1 className="profile-title">{user.username}&apos;s Profile</h1>
        </div>
        <section className="user-details">
          <h2 className='ad'><b>Admin Details</b></h2>
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
              <button className="btn-save" onClick={handleUserSave}>Save</button>
              <button className="btn-cancel" onClick={handleUserCancel}>Cancel</button>
            </>
          ) : (
            <>
              <p className='pp'><b>Name:</b> {user.username}</p>
              <p className='pp'><b>Email:</b> {user.email}</p>
              <p className='pp'><b>Phone Number:</b> {user.phonenumber}</p>
              <center><button className="btn-edit" onClick={handleUserEdit}>Edit</button></center>
            </>
          )}
        </section>
      </div>
      
    </div>
  );
};

export default AdminPro;
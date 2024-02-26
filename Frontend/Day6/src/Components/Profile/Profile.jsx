import Footer from '../FooterDiv/Footer';
import Navbar from '../NavBar/NavBar';
import './Profile.css';
import { useState } from 'react';
const Userdetails = () => {

  const [user, setUser] = useState({
    name: 'Keerthana',
    location: 'Coimbatore,TamilNadu,India',
    age: 32,
    contact: 'keerthana@gmail.com | 8668132973',
  });

  const [editedUser, setEditedUser] = useState({ ...user });
  const [isUserEditing, setIsUserEditing] = useState(false);

  const handleUserEdit = () => {
    setIsUserEditing(true);
  };

  const handleUserSave = () => {
    setUser({ ...editedUser });
    setIsUserEditing(false);
  };

  const handleUserCancel = () => {
    setEditedUser({ ...user });
    setIsUserEditing(false);
  };

  return (
    <div>
        <nav>
            <Navbar/>
        </nav>
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">{user.name}&apos;s Profile</h1>
      </div>
      <section className="user-details">
        <b>User Details</b>
        {isUserEditing ? (
          <>
          <br/>
            <label>Name:   </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
            />
            <br />
            <label>Location: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.location}
              onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })}
            />
            <br />
            <label>Age: </label>
            <input
              className="input-field"
              type="number"
              value={editedUser.age}
              onChange={(e) => setEditedUser({ ...editedUser, age: parseInt(e.target.value, 10) || 0 })}
            />
            <br />
            <label>Contact: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.contact}
              onChange={(e) => setEditedUser({ ...editedUser, contact: e.target.value })}
            />
            <br />
            <center><button className="btn-save" onClick={handleUserSave}>Save</button></center>
            {/* <br/> */}
            <center><button className="btn-cancel" onClick={handleUserCancel}>Cancel</button></center>
          </>
        ) : (
          <>
            <br/>
            <p>Name: {user.name}</p>
            <br/>
            <p>Location: {user.location}</p>
            <br/>
            <p>Age: {user.age}</p>
            <br/>
            <p>Contact: {user.contact}</p>

            <center><button className="btn-edit" onClick={handleUserEdit}>Edit</button></center>
          </>
        )}
      </section>
    </div>
    <footer>
        <Footer/>
    </footer>
    </div>
  );
};

export default Userdetails;
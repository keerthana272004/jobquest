// import { useState } from 'react';
// import './ApplicantDetails.css';
// import SideNav from '../SideNav/SideNav';
// // import Sidebar from './SideBar';

// const ApplicantDetails = () => {
//   const [users, setUsers] = useState([
//     { id: 1, username: 'Bhoomika', email: 'boo@example.com', role: '9025317201' },
//     { id: 2, username: 'Harini', email: 'hariiinii@example.com', role: '8754988838' },
//     { id: 3, username: 'Keerthana', email: 'keeri@example.com', role: '8668132973' },
//   ]);

//   const deleteUser = (id) => {
//     setUsers(users.filter(user => user.id !== id));
//   };

  
//   return (
//     <div>
//       <SideNav/>
//       <br/>
//       <div className="applicant-details-container">
//         <div className="applicant-details-header">
         
//         </div>
//         <div className="applicant-details-content">
//           <div className="applicant-table">
//             <center><strong>Applied Users</strong></center>
//             <br/>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone Number</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map(user => (
//                   <tr key={user.id}>
//                     <td>{user.username}</td>
//                     <td>{user.email}</td>
//                     <td>{user.role}</td>
//                     <td>
//                       <button className="delete-button2" onClick={() => deleteUser(user.id)}>Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplicantDetails;
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ApplicantDetails.css';
 import SideNav from '../SideNav/SideNav';


const ApplicantDetails = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedCollegename, setEditedCollegename] = useState('');
  const [editedQualification, setEditedQualification] = useState('');
  const [editedCgpa, setEditedCgpa] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/forms/alll');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/forms/deletee/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setEditedName(user.name);
    setEditedEmail(user.email);
    setEditedCollegename(user.collegename);
    setEditedQualification(user.qualification);
    setEditedCgpa(user.cgpa);
  };

  const cancelEdit = () => {
    setEditingUser(null);
    setEditedName('');
    setEditedEmail('');
    setEditedCollegename('');
    setEditedQualification('');
    setEditedCgpa('');
  };

  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:8080/api/forms/updatee/${editingUser.id}`, {
        name: editedName,
        email: editedEmail,
        collegename: editedCollegename,
        qualification: editedQualification,
        cgpa: editedCgpa,
      });
      fetchUsers(); // Refresh the user list after updating
      cancelEdit();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <SideNav/>
      <div className="applicant-details-container">
        <div className="applicant-details-header">
          <strong>Welcome, Admin</strong>
        </div>
        <br/>
        <div className="applicant-details-content">
          <div className="applicant-table">
            <div className='appl'>Applied Users</div>
            <br/>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>College</th>
                  <th>Qualification</th>
                  <th>CGPA</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{editingUser === user ? <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} /> : user.name}</td>
                    <td>{editingUser === user ? <input type="text" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} /> : user.email}</td>
                    <td>{editingUser === user ? <input type="text" value={editedCollegename} onChange={(e) => setEditedCollegename(e.target.value)} /> : user.collegename}</td>
                    <td>{editingUser === user ? <input type="text" value={editedQualification} onChange={(e) => setEditedQualification(e.target.value)} /> : user.qualification}</td>
                    <td>{editingUser === user ? <input type="text" value={editedCgpa} onChange={(e) => setEditedCgpa(e.target.value)} /> : user.cgpa}</td>
                    <td>
                      {editingUser === user ? (
                        <>
                          <button className="update-button" onClick={updateUser}>Update</button>
                          <button className="cancel-button" onClick={cancelEdit}>Cancel</button>
                        </>
                      ) : (
                        <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                      )}
                      <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetails;
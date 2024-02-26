import { useState } from 'react';
import './ApplicantDetails.css';
import SideNav from '../SideNav/SideNav';
// import Sidebar from './SideBar';

const ApplicantDetails = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Bhoomika', email: 'boo@example.com', role: '9025317201' },
    { id: 2, username: 'Harini', email: 'hariiinii@example.com', role: '8754988838' },
    { id: 3, username: 'Keerthana', email: 'keeri@example.com', role: '8668132973' },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  
  return (
    <div>
      <SideNav/>
      <br/>
      <div className="applicant-details-container">
        <div className="applicant-details-header">
         
        </div>
        <div className="applicant-details-content">
          <div className="applicant-table">
            <center><strong>Applied Users</strong></center>
            <br/>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button className="delete-button2" onClick={() => deleteUser(user.id)}>Delete</button>
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
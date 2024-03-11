import { useState, useEffect } from 'react';
import './AdminProfile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SideNav from '../SideNav/SideNav';

const AdminProfilePage = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    email: '',
    qualification: ''
  });
  const [isEdit, setIsEdit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users from the API when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/job_application'); // Replace with your actual API endpoint
        const filteredUsers = response.data.filter(user => user.role.includes('USER' || 'user'));
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/job_application/${id}`); // Replace with your actual API endpoint
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setFormData(user);
    setIsEdit(true);
  };

  const handleSave = async () => {
    if (isEdit) {
      try {
        await axios.put(`http://localhost:8080/api/job_application/update/${formData.id}`, formData); // Replace with your actual API endpoint
        setUsers(users.map(user => (user.id === formData.id ? formData : user)));
      } catch (error) {
        console.error('Error updating user:', error);
      }
    }

    setFormData({ id: '', username: '', email: '', qualification: '' });
    setIsEdit(false);
  };

  return (
    <div>
      <nav>
        <SideNav />
      </nav>
      <div className="admin-profile-container">
        <div className="admin-profile-header">
          <strong>Welcome, Admin</strong>
        </div>
        <br/>
        <div className="admin-profile-content">
          <div className="user-table">
            <h2>Users</h2>
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Qualification</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.qualification}</td>
                    <td>
                      <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button> 
                      <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {isEdit && (
            <div className="user-form">
              <h2>Edit User</h2>
              <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
              <input
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Qualification"
                value={formData.qualification}
                onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
              />
              <button onClick={handleSave} className='save-button'>Save</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;

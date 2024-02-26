import { useState } from 'react';
import './AdminProfile.css';
import { useNavigate } from 'react-router-dom';
// import SideBar from '../SideNav/SideNav';
import SideNav from '../SideNav/SideNav';

const AdminProfilePage = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', email: 'user1@example.com', role: 'Admin' },
    { id: 2, username: 'user2', email: 'user2@example.com', role: 'User' },
    { id: 3, username: 'user3', email: 'user3@example.com', role: 'User' },
  ]);
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    email: '',
    role: ''
  });
  // const [isEdit, setIsEdit] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    console.log('Logged out');
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    setFormData(user);
    setIsEdit(true);
  };

  const handleSave = () => {
    if (isEdit) {
      setUsers(users.map(user => (user.id === formData.id ? formData : user)));
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
    setFormData({ id: '', username: '', email: '', role: '' });
    setIsEdit(false);
  };

  return (
    <div>
      <nav>
      <SideNav /></nav>
      <div className="admin-profile-container">

        <div className="admin-profile-header">
          <strong>Welcome, Admin</strong>
          {/* <button className="logout-button" onClick={handleLogout}>Logout</button> */}
        </div>
        <br/>
        {/* <button className="logout-button" onClick={handleLogout}>Logout</button> */}
        <div className="admin-profile-content">
          <div className="user-table">
            <h2>Users</h2>
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
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
                      {/* <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>  */}
                      <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <div className="user-form">
            <h2>{isEdit ? 'Edit User' : 'Add User'}</h2>
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
              placeholder="Role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
            <button onClick={handleSave} className='save-button'>{isEdit ? 'Save' : 'Add'}</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;
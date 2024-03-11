import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LogAdmin.css";
import ALNav from "../ALNav/ALNav";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/authSlice1";
import axios from "axios";
function LogAdmin() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/job_application/authenticate', credentials)
      .then((res) => {
        console.log('Login successful');
        const details = res.data;
        console.log('Token and Role: ', details);
        const token = details;
        const tokenExpiration = new Date();
        tokenExpiration.setHours(tokenExpiration.getHours() + 1);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('tokenExpiration', tokenExpiration.toString());
        
      })
      .then(() => {
        const token = sessionStorage.getItem('token');
        const tokenExpiration = sessionStorage.getItem('tokenExpiration');
       

        if (token && tokenExpiration && new Date(tokenExpiration) > new Date()) {
          const decodedToken = jwtDecode(token);
        const {exp,iat,role,sub} = decodedToken;
        dispatch(loginSuccess({exp,iat,role,sub})); 
        console.log("Stored Redux:",{role,exp,iat,sub});
          
          if (role === 'ADMIN' || role === 'admin') {
            navigate('/AdminPro');
          } 
        } else {
          console.log('Invalid credentials');
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        alert("Username or Password is incorrect");
      });
  };

  return (
    <div>
        <ALNav/>
      <div className="auth-form-container1">
        <center>
          <div className="l1">Login</div>
        </center>
        <form className="login-form" onSubmit={handleSubmit}>
          <label required className="em" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="i1"
            required
            type="email"
            placeholder="Enter your gmail"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <br />
          <label className="pa" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className="i1"
            required
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <br />
          <button className="button1" type="submit">
            Log In
          </button>
          {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
        </form>
        
      </div>
    </div>
  );
}

export default LogAdmin;

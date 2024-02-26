import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LogAdmin.css";
import ALNav from "../ALNav/ALNav";

function LogAdmin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password match the admin credentials
    if (email === "admin@gmail.com" && password === "admin") {
      navigate("/AdminPro"); // Navigate to admin page
    } else {
      setErrorMessage("Wrong email or password");
    }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="button1" type="submit">
            Log In
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        
      </div>
    </div>
  );
}

export default LogAdmin;

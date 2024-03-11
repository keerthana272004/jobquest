import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Register.css";
import Navbar from "../NavBar/NavBar";
import axios from "axios";

const Register = () => {
    const navigate=useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phonenumber, setPhoneNumber]=useState("");
    const [qualification, setQualification] = useState('');
  
  
    const handleNameChange=(e)=>{
      setUsername(e.target.value);
    }
    const handleEmailChange=(e)=>{
      setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
      setPassword(e.target.value);
    }
    const handleQualificationChange=(e)=>{
      setQualification(e.target.value);
    }
    const handlePhonenumberChange=(e)=>{
      setPhoneNumber(e.target.value);
    }
    const Role = "USER";
    
    const handleRegister = async (event) => {
      event.preventDefault();
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&()_+}{"':;?/>.<,])(?=.*[^\da-zA-Z]).{8,}$/;

    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least 8 characters with at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
      try {
        const response = await axios.post("http://localhost:8080/api/job_application/addUser", {
          username: username,
          email: email,
          password:password,
          qualification:qualification,
          phonenumber:phonenumber,
          role: Role,
        
        });
        alert("Registration Successful!");
        console.log("Registration successful:", response.data);
        navigate("/login");
      }
      catch (error) {
        console.error("Registration failed:", error);
      }
    };
  return (
    <div>
      <Navbar/>
      <div className="blo">
        <div className="bg">
          <h2 className="text-2xl font-bold mb-4 text-center dark:text-blueColor">
            Register
          </h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600 dark:text-slate-300">
                Username:
              </label>
              <input
                type="text"
                required
                id="username"
                name="username"
                value={username}
                onChange={handleNameChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 dark:text-slate-300"
              >
                Email:
              </label>
              <input
                type="email"
                required
                id="email"
                value={email}
                name="email"
                onChange={handleEmailChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-600 dark:text-slate-300">
                Phone Number:
              </label>
              <input
                type="text"
                required
                id="phonenumber"
                name="phone"
                value={phonenumber}
                onChange={handlePhonenumberChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 dark:text-slate-300"
              >
                Password:
              </label>
              <input
                type="password"
                required
                value={password}
                id="password"
                name="password"
                onChange={handlePasswordChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="qualification"
                className="block text-sm font-medium text-gray-600 dark:text-slate-300"
              >
                Qualification:
              </label>
              <input
                type="text"
                required
                id="qualification"
                value={qualification}
                name="qualification"
                onChange={handleQualificationChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              />
              
            </div>

            <center>
              <button type="submit" className="bu1">
                Register
              </button>
            </center>

            <center>
              <Link to={"/login"}>
                <button className="bu1">Back</button>
              </Link>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
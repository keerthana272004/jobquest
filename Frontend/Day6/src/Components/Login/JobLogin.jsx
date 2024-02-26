
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../NavBar/NavBar";
import ALNav from "../ALNav/ALNav";
function Login() {
  const navigate = useNavigate();
  const handleS = () =>{
    navigate("/home");
  }
  return (
    <div>
        <ALNav/>
        <div></div>
    <div className="auth-form-container1">
      <center><div className="l1" >Login</div></center>
      <form className="login-form" onSubmit={handleS}>
        <label required className="em" htmlFor="email">Email</label>
        <br />
        <input className="i1" required type="email" placeholder="Enter your gmail" id="email" name="email" />
        <br />
        <label className="pa" htmlFor="password">Password</label>
        <br />
        <input className="i1" required type="password" placeholder="Enter your password" id="password" name="password" /><br />
        <button className="button1" type="submit" >Log In</button>
      </form>
      <Link to={"/register"}><button className="link-btn1">Do not have an account? Register here.</button></Link>
    </div>
    </div>
  )
}

export default Login;
import {useState} from "react";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import "./login.css";
interface LoginProps {
  onClose: () => void;
}
const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [register, setRegister] = useState(false)
  return (
    <div className="wrapper-login">
      <div className="card-login" >
        <span className="icon-close" onClick={onClose}>
          <IoRestaurantOutline />
        </span>
        <div className="form-register">
          <div className="form-box register">
            <h2>Registeration</h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon"><MdOutlinePerson/></span>
                    <input type="email" name="" id="" required/>
                    <label>Username</label>
                </div>
                <div className="input-box">
                    <span className="icon"><MdOutlineMail/></span>
                    <input type="email" name="" id="" required/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><MdOutlineLock/></span>
                    <input type="password" name="" id="" required/>
                    <label>Password</label>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/> I agree to the terms & conditions</label>
                </div>
                <button type="submit" className="btn">Register</button>
                <div className="login-register">
                    <p>Already have an account? <Link to={"#"} className="login-link" onClick={() =>setRegister(false)}>Login</Link></p>
                </div>
            </form>
          </div>
        </div>
        <div className="form-login">
          <div className="form-box login">
            <h2>Login</h2>
            <form action="#">
              <div className="input-box">
                <span className="icon"><MdOutlineMail/></span>
                <input type="email" name="" id="" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon"><MdOutlineLock/></span>
                <input type="password" name="" id="" required />
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> ReMember me
                </label>
                <Link to="#">Forgot Password?</Link>
              </div>
              <button type="submit" className="btn">
                Login
              </button>
              <div className="login-register">
                <p>
                  Don't have account?{" "}
                  <Link to="#" className="register-link" onClick={() =>setRegister(true)}>
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className={`${register ? "logo-login2" : "logo-login1"}`}>
          <div className="circle l1">
            <span className="circle l2">banna</span>
          </div>
          <div className="text-login">
            <span>Let Me be Your Life.</span>
            <div className="img-leave"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
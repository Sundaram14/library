import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'


export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        setPassword("");
        setEmail("");
    };

const gotoSignUpPage = () => navigate("../Signup/Signup");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>

        {/* inputs */}
        <div className="inputs">

            <div className="input">
                <img src={email_icon} alt=""/>
                <input 
                    type="email" 
                    placeholder='Email Id'
                    name='email'
                    id = 'email'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="input">
                <img src={password_icon} alt=""/>
                <input 
                    type="password" 
                    placeholder='Password'
                    name='password'
                    id='password'
                    minLength={8}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </div>

        {/* Buttons */}
        
        <div className="forgot-password">New User? <span>then Sign Up first!</span></div>
        <div className="submit-container">
            <div className="submit gray" onClick={()=>navigate("../Signup/Signup")}>Sign Up</div>
            <div className="submit" onClick={handleSubmit}>Login</div>
        </div>
    </div>
  )
};

export default Login;

import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import './Signup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import call_icon from '../Assets/call.jpeg'


export const Signup = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [tel, setTel] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, username, tel, password });
        setEmail("");
        setTel("");
        setUsername("");
        setPassword("");
    };
    const gotoLoginPage = () => navigate("../Login/Login");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
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
                <img src={user_icon} alt=""/>
                <input 
                    type="text" 
                    placeholder='Name'
                    id='username'
                    name='username'
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="input">
                <img src={call_icon} alt=""/>
                <input 
                    type="tel" 
                    placeholder='Password'
                    name='tel'
                    id='tel'
                    value={tel}
                    required
                    onChange={(e) => setTel(e.target.value)}
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
        
        <div className="submit-container">
            <div className="submit" onClick={handleSubmit}>Sign Up</div>
            <div className="submit gray" onClick={()=>navigate("../Login/Login")}>Login</div>
        </div>
    </div>
  )
};

export default Signup;

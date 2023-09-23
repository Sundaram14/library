import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './phoneVerify.css'

const PhoneVerify = () => {
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ code });
        setCode("");
        navigate("/DashBoard");
    };
    return (
        <div className='header'>
            <h2 className='header verify'>Verify your Phone number</h2>
            <form className='inputs' onSubmit={handleSubmit}>
                <label htmlFor='code' style={{ marginBottom: "10px", color: "white" }}>
                    A code has been sent your phone
                </label>
                <input
                    type='text'
                    name='code'
                    id='code'
                    className='verifyin'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                <button className='submit-container auth'>AUTHENTICATE</button>
            </form>
        </div>
    );
};

export default PhoneVerify;
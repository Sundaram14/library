import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import PhoneVerify from './components/phoneVerify/phoneVerify';
import Dashboard from './components/DashBoard/DashBoard';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/DashBoard' element={<Dashboard />} />
                <Route path='/phoneVerify' element={<PhoneVerify />} />
            </Routes>
        </BrowserRouter>
    //  <div>
    //   <PhoneVerify/>
    //  </div>
  );
}

export default App;

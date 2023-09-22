import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import LoginSignup from "./components/LoginSignup/LoginSignup";

function App() {
  return (
    // <BrowserRouter>
    //         <Routes>
    //             <Route path='./components/Login/Login' element={<Login />} />
    //             <Route path='./components/Signup/Signup' element={<Signup />} />
    //             {/* <Route path='/dashboard' element={<Dashboard />} />
    //             <Route path='phone/verify' element={<PhoneVerify />} /> */}
    //         </Routes>
    //     </BrowserRouter>
    <div>
      <Login/>
    </div>
  );
}

export default App;

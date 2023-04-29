import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Courses from './components/Courses';

function App() {
  return (
    <div className="App">
        {/* <Login/> */}
        <Router>
        <Routes>
          <Route path="/Signup" element={<Signup/>}>
          </Route>
          <Route path="/Login" element={<Login/>}>
          </Route>
          <Route path="/" element={<Courses/>}>
          </Route>


        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
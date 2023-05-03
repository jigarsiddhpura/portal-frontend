import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Courses from './components/Courses';
import LandingPage from './components/LandingPage';
import Header from './utility/Header';
import NavBar from './utility/NavBar';

function App() {
  return (
    <div className="App">
        {/* <Login/> */}
        <Router>
        <Routes>
          <Route path="/Landing" element={<LandingPage/>}>
          </Route>
          <Route path="/Signup" element={<Signup/>}>
          </Route>
          <Route path="/Login" element={<Login/>}>
          </Route>
          <Route path="/" element={<Courses/>}>
          </Route>
          <Route path="/Header" element={<Header/>}>
          </Route>
          <Route path="/NavBar" element={<NavBar/>}>
          </Route>

        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
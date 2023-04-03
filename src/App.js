import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './components/Login';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import ResponsiveDrawer from './components/ResponsiveDrawer';

function App() {
  return (
    <div className="App">
        {/* <Login/> */}
        <Router>
        <Routes>
          <Route path="/Signup" element={<Signup/>}>
          </Route>
          <Route path="/" element={<Login/>}>
          </Route>
          {/* <Route path="/" element={<ResponsiveDrawer/>}>
          </Route> */}

        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
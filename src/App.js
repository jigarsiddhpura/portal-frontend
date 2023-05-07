import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Courses from './components/Courses';
import LandingPage from './components/LandingPage';
import PostInternship from './components/PostInternship';
import NavBar from './utility/NavBar';
import Footer from './utility/Footer';
import PostResearch from './components/PostResearch';
import Header from './utility/Header';
import ApplyResearch from './components/ApplyResearch';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}>
          </Route>
          <Route path="/signup" element={<Signup/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/courses" element={<> <Header/> <Courses/> <Footer/> </>}>
          </Route>
          <Route path="/PostInternship" element={ <> <NavBar/> <PostInternship/>  </>}>
          </Route>
          <Route path="/postresearch" element={ <> <Header/> <PostResearch/>  <Footer/> </>}>
          </Route>
          <Route path="/applyresearch" element={ <> <Header/> <ApplyResearch/>  <Footer/> </>}>
          </Route>
          <Route path="/header" element={<Header/>}>
          </Route>
          <Route path="/nav" element={<NavBar/>}>
          </Route>

        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
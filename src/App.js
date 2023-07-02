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
import UserProfile from './components/UserProfile';
import NavBarProfessor from './utility/NavBarProfessor';
import ProfessorProfile from './components/ProfessorProfile';
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
          <Route path="/Signup" element={<Signup/>}>
          </Route>
          <Route path="/Login" element={<Login/>}>
          </Route>
          <Route path="/Courses" element={<> <Header/> <Courses/> <Footer/> </>}>
          </Route>
          <Route path="/PostInternship" element={ <> <NavBarProfessor/> <PostInternship/>  </>}>
          </Route>
          <Route path="/postresearch" element={ <> <Header/> <PostResearch/>  <Footer/> </>}>
          </Route>
          <Route path="/applyresearch" element={ <> <Header/> <ApplyResearch/>  <Footer/> </>}>
          </Route>
          <Route path="/header" element={<Header/>}>
          </Route>
          <Route path="/nav" element={<NavBar/>}>
          </Route>
          <Route path="/UserProfile" element={<UserProfile/>}>
          </Route>
          <Route path="/ProfessorNav" element={<NavBarProfessor/>}>
          </Route>
          <Route path="/ProfessorProfile" element={<ProfessorProfile/>}>
          </Route>

        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
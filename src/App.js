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
import ResearchPaper from './components/ResearchPaper';
import Header from './utility/Header';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path="/Landing" element={<LandingPage/>}>
          </Route>
          <Route path="/Signup" element={<Signup/>}>
          </Route>
          <Route path="/Login" element={<Login/>}>
          </Route>
          <Route path="/" element={<> <Header/> <Courses/> <Footer/> </>}>
          </Route>
          <Route path="/PostInternship" element={ <> <NavBar/> <PostInternship/>  </>}>
          </Route>
          <Route path="/research" element={ <> <Header/> <ResearchPaper/>  <Footer/> </>}>
          </Route>
          <Route path="/Header" element={<Header/>}>
          </Route>
          <Route path="/NavBar" element={<NavBar/>}>
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
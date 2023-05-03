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
import ResearchPaper from './components/ResearchPaper';
import Header from './utility/Header';

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
          <Route path="/" element={<> <Header/> <Courses/> <Footer/> </>}>
          </Route>
          <Route path="/PostInternship" element={ <> <PostInternship/>  </>}>
          </Route>
          <Route path="/research" element={ <> <NavBar/> <ResearchPaper/>  <Footer/> </>}>
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
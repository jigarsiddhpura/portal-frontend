import React from 'react'
import './NavBar.css'
import dropdown from "../images/dropdown.svg"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div className='navbar-rectangle'>
        <ul>
          <li className='logo'>Internship Portal</li>
          <li className='home'>Home</li>
          <li ><Link to="/Courses"className='courses'>Courses</Link></li>
          <li><Link to="/applyresearch" className='research'>Research</Link></li>
          {/* <li><Link to="/Courses" className='interview'>Interview</Link></li> */}
          <img src={dropdown} className='dropdown'></img>
          <li className='username'><Link to="/UserProfile" className='user-name1'>Kashish Gandhi</Link></li>
          <Link to="/UserProfile"> <li className='profile-pic'></li></Link>
        </ul>
      </div>

  )
}

export default NavBar;

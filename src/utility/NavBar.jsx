import React from 'react'
import './NavBar.css'
import dropdown from "../images/dropdown.svg"

const NavBar = () => {
  return (
      <div className='navbar-rectangle'>
        <ul>
          <li className='logo'>Internship Portal</li>
          <li className='home'>Home</li>
          <li className='courses'>Courses</li>
          <li className='research'>Research</li>
          <li className='interview'>Interview</li>
          <img src={dropdown} className='dropdown'></img>
          <li className='username'>Kashish Gandhi</li>
          <li className='profile-pic'></li>
        </ul>
      </div>

  )
}

export default NavBar;

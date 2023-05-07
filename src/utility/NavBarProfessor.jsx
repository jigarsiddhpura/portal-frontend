import React from 'react'
import './NavBarProfessor.css'
import dropdown from "../images/dropdown.svg"

const NavBarProfessor = () => {
  return (
   
      <div className='navbar-rectangle-professor'>
        <ul>
          <li className='logo'>Internship Portal</li>
       
          <li className='home-professor'>Home</li>
         <li className='post-professor'>Post Internships/Research paper</li>
           <img src={dropdown} className='dropdown-professor'></img>
           <li className='username-professor'>Kashish Gandhi</li>
         <li className='profile-pic-professor'></li> 
        </ul>
      </div>

  )
}

export default NavBarProfessor
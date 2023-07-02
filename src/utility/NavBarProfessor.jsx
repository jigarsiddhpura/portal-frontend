import React from 'react'
import './NavBarProfessor.css'
import dropdown from "../images/dropdown.svg"
import { Link } from 'react-router-dom'

const NavBarProfessor = () => {
  return (
   
      <div className='navbar-rectangle-professor'>
        <ul>
          <li className='logo'>Internship Portal</li>
       
          <li className='home-professor'>Home</li>
         <li className='post-professor'><Link to="/PostInternship"  className='post-professor1'>Post Internships/Research paper</Link></li>
           <img src={dropdown} className='dropdown-professor'></img>
           <li className='username-professor'><Link to="/ProfessorProfile" className='username-professor1'>Kashish Gandhi</Link></li>
           <Link to="/ProfessorProfile"><li className='profile-pic-professor'></li> </Link>
        </ul>
      </div>

  )
}

export default NavBarProfessor
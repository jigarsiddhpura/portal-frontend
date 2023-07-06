import React from 'react'
import NavBar from './NavBar'
import '../css/Header.css'
import lines1 from "../images/bg-lines1.svg"
import lines2 from "../images/bg-lines2.svg"
import searchicon from "../images/search-icon.svg"
import humanicon from "../images/humanicon.svg"
import highlightedunderline from "../images/highlightedunderline.svg"

const Header = () => {
  return (
    <div style={{height: '33rem', backgroundColor: '#E8FCFE'}}>

        <NavBar />
        <img src={lines1} className='bg-lines1'></img>
        <img src={lines2} className='bg-lines2'></img>

        <div className='input-rectangle'>
          <img src={searchicon} className='search-icon'></img>
          <input placeholder='Course name or keyword' className='input1'></input>
          <div className='vertical-line'></div>
          <img src={humanicon} className='human-icon'></img>
          <input placeholder='University' className='input2' ></input>
          <button className='search-button'>
            Search
          </button>
        </div>
        <div className='text'>Popular : Machine Learning by Harvard, xyz course from Stanford</div>
        <div className='subtitle'>Enhance your skills by learning courses from the faculty in top universities</div>
        <div className='title'>Find your&nbsp; <span> dream course</span></div>
        <img src={highlightedunderline} className='highlightedunderline'></img>
    </div> 
  )
}

export default Header
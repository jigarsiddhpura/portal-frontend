import { useState, useCallback } from "react";
import Toggle from "../components/Toggle";
import PortalDrawer from "../components/PortalDrawer";
import "../css/NavBar.css";
import { Link ,useLocation } from 'react-router-dom'
const NavBar= () => {

  const location = useLocation();
  const currentPage = location.pathname;

  const [isToggleOpen, setToggleOpen] = useState(false);

  const openToggle = useCallback(() => {
    setToggleOpen(true);
  }, []);

  const closeToggle = useCallback(() => {
    setToggleOpen(false);
  }, []);

  return (
    <>
      <nav className="internship-portal-parent" navbar>
        <div className="internship-portal3">Internship Portal</div>
        <div className="group-parent">
          <button className="vector-wrapper" onClick={openToggle}>
            <img className="vector-icon" alt="" src="/vector.svg" />
          </button>
          <section className="home-parent">
      <div className="home3">{`Home `}</div>
      {currentPage === '/Courses' || currentPage === '/applyresearch' || currentPage === '/UserProfile' ? (
        <div className="home3">
          <Link to="/Courses" style={{ textDecoration: 'none', color: '#212121' }}>
            Courses
          </Link>
        </div>
        
      ) : (
        <div className="home3">
          <Link to="/PostInternship" style={{ textDecoration: 'none', color: '#212121' }}>
            Post Internship/Research Paper
          </Link>
        </div>
      )}

{currentPage === '/Courses' || currentPage === '/applyresearch' || currentPage === '/UserProfile' ?(
        <div className="home3">
          <Link to="/applyresearch" style={{ textDecoration: 'none', color: '#212121' }}>
            Research
          </Link>
        </div>
        
      ) : (
       null
      ) }
    </section>

{/* 
          <section className="home-parent">
            <div className="home3">{`Home `}</div>
            <div className="home3"><Link to='/courses' style={{textDecoration:'none',color:'#212121'}}>Courses</Link></div>
            <div className="home3"><Link to='/applyresearch' style={{textDecoration:'none',color:'#212121'}}>Research</Link></div>
          </section> */}
          <section className="icon-chevron-down-parent">

          {currentPage === '/Courses' || currentPage === '/applyresearch' || currentPage === '/UserProfile' ?(
       <div className="home3"><Link to='/UserProfile' style={{textDecoration:'none',color:'#212121'}}>Kashish Gandhi</Link></div>
        
      ) : (
        <div className="home3"><Link to='/ProfessorProfile' style={{textDecoration:'none',color:'#212121'}}>Kashish Gandhi</Link></div>
      ) }
         {currentPage === '/Courses' || currentPage === '/applyresearch' || currentPage === '/UserProfile' ?(
       <Link to='/UserProfile'> <img className="pp" alt="" src="/kashish-21@2x.png" /></Link>
        
      ) : (
        <Link to='/ProfessorProfile'> <img className="pp" alt="" src="/kashish-21@2x.png" /></Link>
      ) }
        
            {/* <div className="home3"><Link to='/UserProfile' style={{textDecoration:'none',color:'#212121'}}>Kashish Gandhi</Link></div> */}
            {/* <Link to='/UserProfile'> <img className="pp" alt="" src="/kashish-21@2x.png" /></Link> */}
          </section>
        </div>
      </nav>
      {isToggleOpen && (
        <PortalDrawer placement="Right" onOutsideClick={closeToggle}>
          <Toggle onClose={closeToggle} />
        </PortalDrawer>
      )}
    </>
  );
};

export default NavBar;

import { useState, useCallback } from "react";
import Toggle from "../components/Toggle";
import PortalDrawer from "../components/PortalDrawer";
import "../css/NavBar.css";
import { Link } from 'react-router-dom'
const NavBar= () => {
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
            <div className="home3"><Link to='/courses' style={{textDecoration:'none',color:'#212121'}}>Courses</Link></div>
            <div className="home3"><Link to='/applyresearch' style={{textDecoration:'none',color:'#212121'}}>Research</Link></div>
          </section>
          <section className="icon-chevron-down-parent">
            <img
              className="icon-chevron-down"
              alt=""
              src="/-icon-chevron-down.svg"
            />
            <div className="home3"><Link to='/UserProfile' style={{textDecoration:'none',color:'#212121'}}>Kashish Gandhi</Link></div>
            <Link to='/UserProfile'> <img className="pp" alt="" src="/kashish-21@2x.png" /></Link>
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

import { useState, useCallback } from "react";
import Toggle from "../components/Toggle";
import PortalDrawer from "../components/PortalDrawer";
import "./FrameComponent.css";
const FrameComponent = () => {
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
            <div className="home3">Courses</div>
            <div className="home3">Research</div>
          </section>
          <section className="icon-chevron-down-parent">
            <img
              className="icon-chevron-down"
              alt=""
              src="/-icon-chevron-down.svg"
            />
            <div className="home3">Kashish Gandhi</div>
            <img className="kashish-2-icon1" alt="" src="/kashish-21@2x.png" />
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

export default FrameComponent;

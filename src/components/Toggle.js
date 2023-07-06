import { useEffect } from "react";
import "../css/Toggle.css";
const Toggle = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="toggle" data-animate-on-scroll>
      <div className="user1">Kashish Gandhi</div>
      <img className="pp1" alt="" src="/kashish-2@2x.png" />
      <div className="home2">{`Home `}</div>
      <div className="courses2">Courses</div>
      <div className="research2">Research</div>
    </div>
  );
};

export default Toggle;

import React from 'react';
import './App.scss';
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/loader";
import Menu from "../../components/Menu/menu";
import Header from "../../components/Header/header";
import AboutMe from "../../components/AboutMe/about-me";
import MyResume from "../../components/MyResume/my-resume";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: -10, y: -10 });

  const updateMousePosition = (ev: any) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

const useScrollEvent = () => {
  const [bgColor, setBgColor] = useState({ r: 29, g: 57, b: 61, cursorColor: '#ffffff', menuColor: '#f0b090'});

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      const width = window.innerWidth;
      console.log(scrollY, height);

      if (scrollY > 8*height) {
        setBgColor({r: 138, g: 169, b: 154, cursorColor: 'rgb(55, 120, 89)', menuColor: ''});
      } else if (scrollY > 6*height) {
        setBgColor({r: 214, g: 196, b: 163, cursorColor: 'rgb(199, 153, 68)', menuColor: ''});
      } else if (scrollY > 2.9*height && width <= 600 ) {
        setBgColor({r: 198, g: 70, b: 14, cursorColor: '#000000', menuColor: '#000000'});
      } else if (scrollY > 2.2*height && width >= 600) {
        setBgColor({r: 198, g: 70, b: 14, cursorColor: '#000000', menuColor: '#000000'});
      } else if (scrollY > 0.75*height) {
        // setBgColor({r: 217, g: 166, b: 141, cursorColor: '#c72617', menuColor: '#bf6542'});
        setBgColor({r: 242, g: 189, b: 148, cursorColor: '#30110d', menuColor: '#30110d'});
      } else {
        setBgColor({r: 29, g: 57, b: 61, cursorColor: '#ffffff', menuColor: '#f0b090'});
      }
    })
  }, []);

  return bgColor;
};

function App() {
  const { x, y } = useMousePosition();

  const width = window.innerWidth;
  const {r, g, b, cursorColor, menuColor} = useScrollEvent();
  const [landing, setLanding] = useState(true);
  const [aboutContClass, setAboutContClass] = useState<string[]>(['about-me-container']);

  useEffect(() => {
      setTimeout(() => {
          setLanding(false);
      }, 3000);
  }, []);

  useEffect(() => {
      if(width <= 600) {
          setAboutContClass(['about-me-container', 'increased-height']);
      } else {
          setAboutContClass(['about-me-container']);
      }
  }, [width]);

    return landing ? (
          <Loader />
          ): (
      <div className="App" id="App" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
        <div className="cursorTrail"
             style={
               {
                 position: "fixed",
                 transform: `translate3d(${x-5}px, ${y-5}px, 0)`,
                 height: "12px",
                 width: "12px",
                 borderRadius: "6px",
                 transition: "all 0.3s linear",
                 backgroundColor: `${cursorColor}`,
                 zIndex: 2,
                 pointerEvents: "none"
               }
             }>
        </div>

          <div className="stage-3d top hidden"></div>
          <div className="stage-3d hidden"></div>

        <div className="menu-container">
          <Menu color={menuColor} />
        </div>
        <div className="header-container">
          <Header />
        </div>
        <div className={aboutContClass.join(' ')}>
          <AboutMe />
        </div>
        <div className="my-resume-container">
          <MyResume />
        </div>
      </div>
  );
}

export default App;

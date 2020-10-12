import React from 'react';
import logo from '../../logo.svg';
import './App.scss';
import { useState, useEffect } from "react";

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
  const [bgColor, setBgColor] = useState({ r: 0, g: 74, b: 98, cursorColor: '#ffffff'});

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;

      if (scrollY > 8*height) {
        setBgColor({r: 138, g: 169, b: 154, cursorColor: 'rgb(55, 120, 89)'});
      } else if (scrollY > 6*height) {
        setBgColor({r: 214, g: 196, b: 163, cursorColor: 'rgb(199, 153, 68)'});
      } else if (scrollY > 4*height) {
        setBgColor({r: 198, g: 70, b: 14, cursorColor: '#000000'});
      } else if (scrollY > 2*height) {
        setBgColor({r: 217, g: 166, b: 141, cursorColor: 'rgb(219, 84, 18)'});
      } else {
        setBgColor({r: 0, g: 74, b: 98, cursorColor: '#ffffff'});
      }
    })
  }, []);

  return bgColor;
};

function App() {
  const { x, y } = useMousePosition();

  const {r, g, b, cursorColor} = useScrollEvent();

  return (
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
        {/*<header className="App-header">*/}
        {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        {/*  <p>*/}
        {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
        {/*  </p>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://reactjs.org"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Learn React*/}
        {/*  </a>*/}
        {/*</header>*/}
      </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import { useState, useEffect } from "react";
import Menu from "../../components/Menu/menu";
import Header from "../../components/Header/header";

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

      if (scrollY > 8*height) {
        setBgColor({r: 138, g: 169, b: 154, cursorColor: 'rgb(55, 120, 89)', menuColor: ''});
      } else if (scrollY > 6*height) {
        setBgColor({r: 214, g: 196, b: 163, cursorColor: 'rgb(199, 153, 68)', menuColor: ''});
      } else if (scrollY > 4*height) {
        setBgColor({r: 198, g: 70, b: 14, cursorColor: '#000000', menuColor: ''});
      } else if (scrollY > 2*height) {
        setBgColor({r: 217, g: 166, b: 141, cursorColor: 'rgb(219, 84, 18)', menuColor: '#694837'});
      } else {
        setBgColor({r: 29, g: 57, b: 61, cursorColor: '#ffffff', menuColor: '#f0b090'});
      }
    })
  }, []);

  return bgColor;
};

function App() {
  const { x, y } = useMousePosition();

  const {r, g, b, cursorColor, menuColor} = useScrollEvent();

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

        <div className="menu-container">
          <Menu color={menuColor} />
        </div>
        <div className="header-container">
          <Header />
        </div>
      </div>
  );
}

export default App;

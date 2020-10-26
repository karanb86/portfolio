import React from 'react';
import './App.scss';
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/loader";
import Menu from "../../components/Menu/menu";
import Header from "../../components/Header/header";
import AboutMe from "../../components/AboutMe/about-me";
import MyResume from "../../components/MyResume/my-resume";
import Skills from "../../components/Skills/skills";
import GetInTouch from "../../components/GetInTouch/get-in-touch";

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
  const [bgColor, setBgColor] = useState({ r: 29, g: 57, b: 61, cursorColor: '#ffffff', menuColor: '#f0b090', section: ''});

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      const width = window.innerWidth;
      // console.log(scrollY, height);

      if (scrollY > 8*height && width <= 600) {
        setBgColor({r: 138, g: 169, b: 154, cursorColor: '#004a62', menuColor: '#004a62', section: 'getInTouch'});
      }else if (scrollY > 5.4*height && width > 600) {
        setBgColor({r: 138, g: 169, b: 154, cursorColor: '#004a62', menuColor: '#004a62', section: 'getInTouch'});
      } else if (scrollY > 4.85*height && width <= 600) {
        setBgColor({r: 133, g: 23, b: 25, cursorColor: '#daa520', menuColor: '#daa520', section: 'skills'});
      }  else if (scrollY > 4*height && width > 600) {
        setBgColor({r: 133, g: 23, b: 25, cursorColor: '#daa520', menuColor: '#daa520', section: 'skills'});
      } else if (scrollY > 2.45*height && width <= 600 ) {
        setBgColor({r: 255, g: 144, b: 0, cursorColor: '#000000', menuColor: '#ff9000', section: 'myResume'});
      } else if (scrollY > 2.1*height && width > 600) {
        setBgColor({r: 255, g: 144, b: 0, cursorColor: '#000000', menuColor: '#000000', section: 'myResume'});
      } else if (scrollY > 0.5*height) {
        setBgColor({r: 242, g: 189, b: 148, cursorColor: '#30110d', menuColor: width > 600 ? '#30110d' : '#f2bd94', section: 'aboutMe'});
      } else {
        setBgColor({r: 29, g: 57, b: 61, cursorColor: '#ffffff', menuColor: '#f0b090', section: ''});
      }
    })
  }, []);

  return bgColor;
};

function App() {
  const { x, y } = useMousePosition();

  const width = window.innerWidth;
  const [landing, setLanding] = useState(true);
  const [aboutContClass, setAboutContClass] = useState<string[]>(['about-me-container']);
  const [resumeContClass, setResumeContClass] = useState<string[]>(['my-resume-container']);
  const [skillsContClass, setSkillsContClass] = useState<string[]>(['skills-container']);
  const [currentSection, setCurrentSection] = useState<string>('');

  const {r, g, b, cursorColor, menuColor, section} = useScrollEvent();

  useEffect(() => {
      setCurrentSection(section);
  }, [section]);


    useEffect(() => {
      setTimeout(() => {
          setLanding(false);
      }, 3000);
  }, []);

  useEffect(() => {
      if(width <= 600) {
          setAboutContClass(['about-me-container', 'increased-height-about']);
          setResumeContClass(['my-resume-container', 'increased-height-resume']);
          setSkillsContClass(['skills-container', 'increased-height-skills']);
      } else {
          setAboutContClass(['about-me-container']);
          setResumeContClass(['my-resume-container']);
          setSkillsContClass(['skills-container']);
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
          <Menu color={menuColor} currentSection={currentSection} />
        </div>
        <div className="header-container">
          <Header />
        </div>
        <div className={aboutContClass.join(' ')} id="aboutMe">
          <AboutMe />
        </div>
        <div className={resumeContClass.join(' ')} id="myResume">
          <MyResume />
        </div>
        <div className={skillsContClass.join(' ')} id="skills">
          <Skills />
        </div>
        <div className="get-in-touch-container" id="getInTouch">
          <GetInTouch />
        </div>
      </div>
  );
}

export default App;

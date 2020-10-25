import React, {useEffect, useState} from "react";
import './skills.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

const Skills = (props: any) => {
    const [angular, setAngular] = useState(0);
    const [react, setReact] = useState(0);
    const [git, setGit] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setAngular(prevState => prevState >= 80 ? 80 : prevState + 5);
            setReact(prevState => prevState >= 65 ? 65 : prevState + 5);
            setGit(prevState => prevState >= 90 ? 90 : prevState + 5);
        }, 300);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="skills-wrapper">
            <h1>Skills</h1>
            <div className="skills">
                <div className="skill">
                    <div className="description">
                        <strong>Angular JS</strong>
                        <span>78%</span>
                    </div>
                    <CircularProgress variant="static"
                                      value={angular}
                                      thickness={2}
                                      size={120}  />
                </div>
                <div className="skill">
                    <div className="description">
                        <strong>React JS</strong>
                        <span>65%</span>
                    </div>
                    <CircularProgress variant="static"
                                      value={react}
                                      thickness={2}
                                      size={120} />
                </div>
                <div className="skill">
                    <div className="description">
                        <strong>Git</strong>
                        <span>87%</span>
                    </div>
                    <CircularProgress variant="static"
                                      value={git}
                                      thickness={2}
                                      size={120}  />
                </div>
            </div>
        </div>
    );
}

export default Skills;

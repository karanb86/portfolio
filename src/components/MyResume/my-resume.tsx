import React from "react";
import './my-resume.scss';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

const MyResume = (props: any) => {
    return (
        <div className="my-resume-wrap">
            <h1>My Resume</h1>

            <ul className="timeline">
                <li className="timeline-heading text-center">
                    <div>
                        <h3>Work Experience</h3>
                    </div>
                </li>

                <li className="timeline-unverted">
                    <div className="timeline-badge">
                        <WorkIcon />
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h3 className="timeline-title">Intern</h3>
                            <span className="company">DevsLane - May, 2019 onwards</span>
                        </div>
                        <div className="timeline-body">
                            <p>
                                The company gave me the opportunity to learn and work with them as a fresher, and helped
                                me develop my technical skills as well as personality.
                                <br/>
                                <br/>
                                I have worked on several projects based on Angular2+ and ReactJS under team leads with
                                other team mates where we put efforts to bring out the best from the project and
                                deliver the app as per the clients' requirement.
                            </p>
                        </div>
                    </div>
                </li>

                <li className="timeline-heading text-center">
                    <div>
                        <h3>Education</h3>
                    </div>
                </li>

                <li className="timeline-inverted">
                    <div className="timeline-badge">
                        <SchoolIcon />
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h3 className="timeline-title">Graduation (B.Tech)</h3>
                            <span className="company">ABES Engineering College - 2018 - 2022</span>
                        </div>
                        <div className="timeline-body">
                            <p>
                                Apart from academics, I have always been interested in technology and
                                I have always been curious to know how things work at backstage.
                                <br/>
                                <br/>
                                I got the opportunity to be a part of Technovation Club of ABESEC
                                where I got to explore my geeky side along with other enthusiastic members of
                                the club.
                                <br/>
                                <br/>
                                I also developed a
                                <a href="https://technovation-club-abes.web.app" target="_blank"> website </a>
                                 for the club by the end of my fourth semester.
                            </p>
                        </div>
                    </div>
                </li>

                <li className="timeline-unverted">
                    <div className="timeline-badge">
                        <SchoolIcon />
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h3 className="timeline-title">Intermediate</h3>
                            <span className="company">St. Thomas Inter College, Lucknow - 2017</span>
                        </div>
                        <div className="timeline-body">
                            <p>
                                This CISCE affiliated institution gave me the opportunity to learn problem solving
                                at a very young age. Firstly, we were taught LOGO (Turtle), then BASIC Programming and
                                then finally we were exposed to basic JAVA Programming which soon caught my interest.
                                <br/>
                                <br/>
                                Apart from this, I got the opportunity to be the House Captain where I learnt to manage a team
                                as well as work in a team.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default MyResume;

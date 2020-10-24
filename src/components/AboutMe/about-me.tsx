import React from "react";
import './about-me.scss'

const AboutMe = (props: any) => (
    <div className="about-me-wrap">
        <h1>About Me</h1>

        <div className="body">
            <div className="art-1">
            {/*    <p>*/}
            {/*        Hi, I am a Software Engineer who is working specifically in the domain of Web App Development for more than*/}
            {/*        a year now. I have hands on experience on technologies like Angular2+, ReactJS along with various libraries that can*/}
            {/*        be doped with these technologies to enhance the user experience.*/}
            {/*    </p>*/}
                <blockquote className="text" cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/">
                    <p>
                        Hi, I am a Software Engineer who is working specifically in the domain of Web App Development for more than
                        a year now. I have hands on experience on technologies like Angular2+, ReactJS along with various libraries that can
                        be doped with these technologies to enhance the user experience.
                    </p>
                </blockquote>
            </div>

            <div className="art-2">

                <blockquote className="text" cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/">
                    <p>
                        In my entire experience of development, I have always tried to write the code as clean as possible.
                        According to me, the code quality and readability should be the top notch priority of a developer.
                        <br/>
                        <br/>
                        I am looking forward to explore through more of such technologies in the near future.
                    </p>
                </blockquote>
            </div>
        </div>
    </div>
);

export default AboutMe;

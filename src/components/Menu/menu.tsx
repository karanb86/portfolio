import React from "react";
import './menu.scss';
const Menu = (props: any) => {
    return (
        <div className="menu-wrap">
            <span>
                <a href=""
                   style={{
                       color: props.color
                   }}>About Me</a>
            </span>
            <span>
                <a href=""
                   style={{
                       color: props.color
                   }}>My Resume</a>
            </span>
            <span>
                <a href=""
                   style={{
                       color: props.color
                   }}>Education</a>
            </span>
            <span>
                <a href=""
                   style={{
                       color: props.color
                   }}>Skills</a>
            </span>
            <span>
                <a href=""
                   style={{
                       color: props.color
                   }}>Services</a>
            </span>
        </div>
    );
}

export default Menu;

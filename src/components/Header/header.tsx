import React from "react";
import './header.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = (props: any) => (
    <div className="header-wrap">
        <span>- Karan Budhwani -</span>
        <div className="handles">
            <a href="https://www.linkedin.com/in/karan-budhwani-9a6277190/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="handle" />
            </a>

            <a href="https://github.com/karanb86" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="handle" />
            </a>

            <a href="https://www.instagram.com/not_thereal_karan/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="handle" />
            </a>

            <a href="https://www.facebook.com/karan.budhwani.86/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="handle" />
            </a>
        </div>
    </div>
);

export default Header;

import React, {useEffect, useState} from "react";
import './menu.scss';
import logo from '../../assets/logos/logo.svg';

const Menu = (props: any) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [hamClasses, setHamClasses] = useState<string[]>(['hamburger-menu']);
    const [menuClasses, setMenuClasses] = useState<string[]>(['menu-items']);

    const [aboutMe, setAboutMe] = useState<string[]>(['menu-list-item'])
    const [myResume, setMyResume] = useState<string[]>(['menu-list-item'])
    const [skills, setSkills] = useState<string[]>(['menu-list-item'])
    const [getInTouch, setGetInTouch] = useState<string[]>(['menu-list-item'])

    // let hamClasses = ['hamburger-menu'];

    useEffect(() => {
        const sec = props.currentSection;
        if (sec === 'aboutMe') {
            setAboutMe(['menu-list-item', 'selected']);
            setMyResume(['menu-list-item']);
            setSkills(['menu-list-item']);
            setGetInTouch(['menu-list-item']);
        } else if (sec === 'myResume') {
            setAboutMe(['menu-list-item']);
            setMyResume(['menu-list-item', 'selected']);
            setSkills(['menu-list-item']);
            setGetInTouch(['menu-list-item']);
        } else if (sec === 'skills') {
            setAboutMe(['menu-list-item']);
            setMyResume(['menu-list-item']);
            setSkills(['menu-list-item', 'selected']);
            setGetInTouch(['menu-list-item']);
        } else if (sec === 'getInTouch') {
            setAboutMe(['menu-list-item']);
            setMyResume(['menu-list-item']);
            setSkills(['menu-list-item']);
            setGetInTouch(['menu-list-item', 'selected']);
        } else {
            setAboutMe(['menu-list-item']);
            setMyResume(['menu-list-item']);
            setSkills(['menu-list-item']);
            setGetInTouch(['menu-list-item']);
        }
    }, [props.currentSection])

    const onMenuBtnClick = () => {
        if(!isMenuOpen) {
            setHamClasses(['hamburger-menu', 'open'])
            setMenuClasses(['menu-items', 'menu-open'])
            setIsMenuOpen(true);
        } else {
            setHamClasses(['hamburger-menu']);
            setMenuClasses(['menu-items'])
            setIsMenuOpen(false);
        }
    }

    const availableLinks = [
        {
            label: 'About Me',
            hash: '#aboutMe'
        },
        {
            label: 'My Resume',
            hash: '#myResume'
        },
        {
            label: 'Skills',
            hash: '#skills'
        },
        {
            label : 'Get In Touch',
            hash: '#getInTouch'
        },
        // {
        //     label : 'Services',
        //     hash: '#services'
        // },
    ]

    const ItemsList = (
        <>
                <span className={aboutMe.join(' ')} onClick={onMenuBtnClick}>
                    <a href="#aboutMe" style={{
                        color: props.color? props.color : '#f0b090'
                    }}>
                        About Me
                    </a>
                </span>
            <span className={myResume.join(' ')} onClick={onMenuBtnClick}>
                    <a href="#myResume" style={{
                        color: props.color? props.color : '#f0b090'
                    }}>
                        My Resume
                    </a>
                </span>
            <span className={skills.join(' ')} onClick={onMenuBtnClick}>
                    <a href="#skills" style={{
                        color: props.color? props.color : '#f0b090'
                    }}>
                        Skills
                    </a>
                </span>
            <span className={getInTouch.join(' ')} onClick={onMenuBtnClick}>
                    <a href="#getInTouch" style={{
                        color: props.color? props.color : '#f0b090'
                    }}>
                        Get In TOuch
                    </a>
                </span>
        </>
    );

    // ******** FOR MOBILE VIEW ********
    const MenuItems = () => {
        return (
            <div className={menuClasses.join(' ')}>
                <div className="logo"
                     onClick={goToTop}
                     style={{
                         height: '120px',
                         width: '120px',
                         cursor: 'pointer',
                         backgroundColor: props.color
                     }}></div>
                {ItemsList}
            </div>
        );
    }
    function goToTop() {
        onMenuBtnClick();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    // ******** FOR DESKTOP VIEW ********
    // @ts-ignore
    return (
        <div className="menu-wrap">
            <div className="menu-list">
                <div className="logo"
                     onClick={goToTop}
                     style={{
                         backgroundColor: props.color,
                         cursor: 'pointer'
                     }}></div>
                {ItemsList}
            </div>

            <div className={hamClasses.join(' ')}>
                <div className="menu-btn" onClick={onMenuBtnClick}></div>
                {
                    isMenuOpen ?
                        <MenuItems /> : ''
                }
            </div>
        </div>
    );
}

export default Menu;

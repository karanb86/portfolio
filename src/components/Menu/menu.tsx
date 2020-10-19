import React, {useState} from "react";
import './menu.scss';
import logo from '../../assets/logos/logo.svg';

const Menu = (props: any) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [hamClasses, setHamClasses] = useState<string[]>(['hamburger-menu']);
    const [menuClasses, setMenuClasses] = useState<string[]>(['menu-items']);

    // let hamClasses = ['hamburger-menu'];

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

    const MenuItems = () => (
        <div className={menuClasses.join(' ')}>
            <div className="logo" style={{
                height: '200px',
                width: '200px',
                backgroundColor: props.color
            }}></div>
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
    )
    // @ts-ignore
    return (
        <div className="menu-wrap">
            <div className="menu-list">
                <div className="logo"  style={{
                    backgroundColor: props.color
                }}></div>
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

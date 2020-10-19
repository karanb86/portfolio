import React, {useState} from "react";
import './menu.scss';
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
    return (
        <div className="menu-wrap">
            <div className="menu-list">
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

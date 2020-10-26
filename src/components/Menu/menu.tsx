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

    const ItemsList = availableLinks.map(link => (
        <span onClick={onMenuBtnClick}>
                <a href={link.hash}
                   style={{
                       color: props.color ? props.color : '#f0b090'
                   }}>{link.label}</a>
            </span>
    ));

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

import React, { useState } from 'react'
import './nav.scss';
import './navmedia.scss'
import { NavLink } from 'react-router-dom';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { useGlobleContext } from '../../Context';

export default function Navbar() {
    const [changeNav, setChangeNav] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const { ImgData } = useGlobleContext();

    const ChangeBackground = () => {

        if (window.scrollY >= 200) {
            setChangeNav(true);
        } else {
            setChangeNav(false);
        }

    }
    window.addEventListener('scroll', ChangeBackground);

    return (
        <>
            <div className={changeNav ? 'navWraper activebg' : 'navWraper'}>
                <div className="navSection">
                    <div className="logoSection">
                        <div className="logoImg">
                            <img src={ImgData.logo} alt="logo" />
                        </div>
                    </div>
                    <div className={showNav ? ' nav mobileNav' : 'nav'}>
                        <ul>
                            <div className=" ClosedIcon" onClick={() => setShowNav(!showNav)}><CloseOutlined /> </div>
                            <li> <NavLink to='/' onClick={() => setShowNav(false)}> Home</NavLink></li>
                            <li><NavLink to='/gallery' onClick={() => setShowNav(false)}>Gallery</NavLink></li>
                            <li> <NavLink to='/about' onClick={() => setShowNav(false)}>About</NavLink></li>
                            <li><NavLink to='/services' onClick={() => setShowNav(false)}>Services</NavLink></li>
                            <li><NavLink to='/bookevent' onClick={() => setShowNav(false)}>Book</NavLink></li>
                        </ul>
                    </div>
                    <div className="hamburgerMenu">
                        <div className="icon" onClick={() => setShowNav(!showNav)}><MenuOutlined /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

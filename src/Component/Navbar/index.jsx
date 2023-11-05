import React, { useState } from 'react'
import './nav.scss';
import './navmedia.scss'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [changeNav, setChangeNav] = useState(false);
    const [showNav, setShowNav] = useState(false);

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
            <div className={changeNav ? 'navWraper active' : 'navWraper'}>
                <div className="navSection">
                    <div className="logoSection">
                        <div className="logoImg">
                            <img src="Images/logo.jpg" alt="logo" />
                        </div>
                    </div>
                    <div className={showNav ? ' nav mobileNav' : 'nav'}>
                        <ul>
                            <li> <Link to='/' onClick={() => setShowNav(false)}> Home</Link></li>
                            <li><Link to='/gallery' onClick={() => setShowNav(false)}>Gallery</Link></li>
                            <li> <Link to='/about' onClick={() => setShowNav(false)}>About</Link></li>
                            <li><Link to='/services' onClick={() => setShowNav(false)}>Services</Link></li>
                        </ul>
                    </div>
                    <div className="hamburgerMenu">
                        <div className="icon" onClick={() => setShowNav(!showNav)}>ham</div>
                    </div>
                </div>
            </div>
        </>
    )
}

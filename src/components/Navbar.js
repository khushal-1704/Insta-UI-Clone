import React from 'react'
import './NavBar.css'


function Navbar() {
    return (
        <div className='nav'>
            <div className="nav-container">
                <div className="nav-left">
                    <img src="/images/instagram.png" alt="" />
                </div>
                <div className='nav-center'>
                    <input type="text" placeholder='Search' />
                </div>
                <div className="nav-right">
                    <li><img src="/images/home.png" alt="home" className='nav-logo' /></li>
                    <li><img src="/images/facebook.png" alt="message" className='nav-logo' /></li>
                    <li><img src="/images/compass.png" alt="compass" className='nav-logo' /></li>
                    <li><img src="/images/heart.png" alt="compass" className='nav-logo' /></li>
                    <li><img src="/images/male.png" alt="male" className='nav-logo' /></li>
                </div>
            </div>
        </div>
    )
}

export default Navbar

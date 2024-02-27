import React from 'react'
import LOGO from '../../assets/KONSTRUT.png'
import './Nav.css';

const Nav = () => {
  return (
    <div className="container">
    <nav>
        <div className="nav-logo">
            <img src={LOGO} alt="" />
        </div>
        <ul className="list">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Work</li>
            <li>Contacts</li>
        </ul>
    </nav>
    </div>
  )
}

export default Nav

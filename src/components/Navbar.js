import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className='grow flex justify-center'>
        <ul className={ props.classes }>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/latest-work"
            className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}
          >
            Our Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}
          >
            Contact Us
          </NavLink>
        </li>
        </ul>
    </nav>
  )
}

export default Navbar

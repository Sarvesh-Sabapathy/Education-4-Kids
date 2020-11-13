import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Dropdown from '../Dropdowns/Dropdown';
import Dropdown2 from '../Dropdowns/Dropdown2';
import Dropdown3 from '../Dropdowns/Dropdown3';

function Navbar() {
  // Initializing dropdown menu display
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Checking dropdown for educational tools
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  // Checking dropdown for resources
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  // Checking dropdown for about us
  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        {/* Title of website */}
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Education 4 Kids  
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* Adds home to navbar */}
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          {/* Adds educational tools and checks for dropdown menu */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Educational-Tools'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Educational Tools <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          {/* Adds resorces and checks for dropdown menu */}
          <li className='nav-item'
              onMouseEnter={onMouseEnter2}
              onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/Resources'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Resources <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          {/* Adds about us and checks for dropdown menu */}
          <li className='nav-item'
              onMouseEnter={onMouseEnter3}
              onMouseLeave={onMouseLeave3}
          >
            <Link
              to='/About-Us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us <i className='fas fa-caret-down' />
            </Link>
            {dropdown3 && <Dropdown3 />}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;


import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar-inner-container-wrapper'>
        <div className='navbar-company-name-wrapper'>
          <h1 className='navbar-company-text'>Constructify</h1>
        </div>
        <div className='navbar-navmenu-container'>
          <ul className='navbar-navmenu-list-container'>
            <li className='navbar-nav-menu-item'>
              <span className='navbar-navmenu-item-text'>Home</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li className='navbar-nav-menu-item'>
              <span className='navbar-navmenu-item-text'>We Build</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li className='navbar-nav-menu-item'>
              <span className='navbar-navmenu-item-text'>We Are</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li className='navbar-nav-menu-item'>
              <span className='navbar-navmenu-item-text'>Landmark Project</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li className='navbar-nav-menu-item'>
              <span className='navbar-navmenu-item-text'>Newsroom</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li className='navbar-nav-menu-item'>
              <span className='navbar-navmenu-item-text'>careers</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li className='navbar-nav-menu-item'>
              <span className='navbar-navmenu-item-text'>Sustainability</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
          </ul>
        </div>
        <div className='navbar-slider-menu'>
          <FontAwesomeIcon className='navbar-linkedin-icon' icon={faLinkedin} />
          <div className='navbar-search-container'>
            <FontAwesomeIcon className='navbar-search-icon' icon={faSearch} />
          </div>
          <div>
            <FontAwesomeIcon className='navbar-toggle-icon' icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
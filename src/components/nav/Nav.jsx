import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import './nav.css';

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <NavLink
          to='/'
          className='navbar-logo'
          onClick={closeMobileMenu}
        >
          <h3>Zotack</h3>
        </NavLink>

        <div
          className='menu-icon'
          onClick={handleClick}
        >
          {click ? (
            <ClearIcon
              className='menuClose'
              style={{ color: 'white' }}
            />
          ) : (
            <MenuIcon
              className='menuOpen'
              style={{ color: 'white' }}
            />
          )}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/About'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/Contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

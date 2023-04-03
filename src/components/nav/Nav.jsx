import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Button } from './Button';
import { BiMenu } from 'react-icons/bi';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { IoMdClose } from 'react-icons/io';
import './nav.css';

function Nav() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /* const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener('resize', showButton);
  useEffect(() => {
    showButton();
  }, []); */

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
            <ClearIcon className="menuClose" fontSize='large' style={{ color: 'white'}} />
          ) : (
            <MenuIcon className="menuOpen" fontSize='large' style={{ color: 'white' }} />
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
              activeClassName='active'
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

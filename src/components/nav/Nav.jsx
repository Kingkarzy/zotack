import { useState } from 'react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../data';

import { BiMenu } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
// import {IoMdClose} from 'react-icons/io'
import './nav.css';

const Nav = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className='nav__container'>
        <Link
          to='/'
          className='logo'
          onClick={() => setIsNavShowing(false)}
        >
          <h3>Zotack</h3>
        </Link>
        <ul
          className={`nav__links ${
            isNavShowing ? 'show__nav' : 'hide__nav'
          }`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'active-nav' : ''
                  }
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className='nav__toggle-btn'
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <IoMdClose /> : <BiMenu />}
        </button>
      </div>
    </nav>
  );
};

/* 
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
}); */

export default Nav;

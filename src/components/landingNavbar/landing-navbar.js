import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink1,
  NavBtnLink2
} from './landing-nav-element';

import Logo from "../../images/Logo.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Logo} alt='logo' />
        </NavLink>
        <NavMenu>
          <NavLink to='/' activeStyle>
            About
          </NavLink>
          <NavLink to='/' activeStyle>
            Our Mission
          </NavLink>
          <NavLink to='/' activeStyle>
            Features
          </NavLink>
          <NavLink to='/' activeStyle>
            Team
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink1 to={'/signup'}>Sign Up</NavBtnLink1>
          <NavBtnLink2 to={'/login'}>Log In</NavBtnLink2>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
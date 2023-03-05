import React from 'react';
import {
  Nav,
  NavLink,
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
        <NavLink id='logo-landing' to={'/'}>
          <img src={Logo} alt='logo' />
        </NavLink>
        <NavMenu>
          <NavLink to='About' smooth={true} duration={500} activeStyle>
            About
          </NavLink>
          <NavLink to='Mission' smooth={true} duration={500} activeStyle>
            Our Mission
          </NavLink>
          <NavLink to='Features' smooth={true} duration={500} activeStyle>
            Features
          </NavLink>
          <NavLink to='Team' smooth={true} duration={500} activeStyle>
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
import { Link } from 'react-router-dom';
import { Link as ScrollLink,  animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

import MenuIcon from '@mui/icons-material/Menu';

export const Nav = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  font-family: 'Montserrat', sans-serif !important;
  justify-content: space-between;
  padding-top: 0.5rem calc((100vw - 1000px) / 2);
  padding-bottom: 0.5rem calc((100vw - 1000px) / 2);
  padding-left: 6em;
  padding-right: 6em;
  margin-bottom: 2em;
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(ScrollLink)`
  color: black;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 3rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #3B82F6;
    font-weight: 600;
  }
`;

export const Bars = styled(MenuIcon)`
  display: none;
  color: black;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink1 = styled(Link)`
  border-radius: 6px;
  background: white;
  padding: 10px 22px;
  color: black;
  outline: none;
  border: solid 1px #9F9F9F;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3B82F6;
    color: white;
  }
`
export const NavBtnLink2 = styled(Link)`
  border-radius: 6px;
  background: #3B82F6;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
;
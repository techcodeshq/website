import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { ThemeContext } from '@components';
import { media } from '@styles';

import Menu from './menu';
import ImageLogo from '@images/logo.png';

const Logo = styled.img`
  width: 3vw;
  margin: 0 2vw;
`;
const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  z-index: 9998;
`;
const NavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuWrap = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const ToggleWrapper = styled.div`
  height: 1vw;
  width: 1vw;
  background-color: var(--undertone);
  border-radius: 50%;

  label {
    cursor: pointer;
    input {
      display: none;
    }
    padding: 1rem;
  }
  ${media.tablet`
    width: 4vw;
    height: 4vw;
  `};
`;
const BoxWrapper = styled.div`
  background-color: var(--accent);
  z-index: 9999;
  padding: 2vw;
  margin-left: 1.2vw;
  cursor: pointer;

  ${media.tablet`
    padding: 8vw 4vw;
    margin-left: 2vw;
  `};
`;
const StyledHamburger = styled.div`
  background-color: var(--undertone);
  width: 2.2vw;
  height: 2px;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  ${media.tablet`width: 12vw;`};
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: var(--undertone);
    position: absolute;
    left: auto;
    right: 0;
    width: 2.2vw;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    ${media.tablet`width: 12vw;`};
  }
  &:before {
    width: 100%;
    top: ${props => (props.menuOpen ? `0` : `-0.4vw`)};
    ${media.tablet`top: ${props => (props.menuOpen ? `0` : `-1.8vw`)};`};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props =>
      props.menuOpen
        ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s'
        : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in'};
  }
  &:after {
    width: 100%;
    bottom: ${props => (props.menuOpen ? `0` : `-0.4vw`)};
    ${media.tablet`bottom: ${props => (props.menuOpen ? `0` : `-1.8vw`)};`};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props =>
      props.menuOpen
        ? 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s'
        : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
  }
`;

const Nav = ({ location }) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(menuOpen => !menuOpen);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <HeaderWrap data-scroll data-scroll-sticky data-scroll-target="#___container">
      <NavWrap>
        <Link to="/">
          <Logo src={ImageLogo} alt="TechCodes" />
        </Link>
        <MenuWrap>
          <ToggleWrapper>
            <label>
              <input
                type="checkbox"
                onChange={ev => {
                  setColorMode(ev.target.checked ? 'dark' : 'light');
                }}
                checked={colorMode === 'dark'}
              />
            </label>
          </ToggleWrapper>
          <BoxWrapper onClick={toggleMenu}>
            <StyledHamburger menuOpen={menuOpen} />
          </BoxWrapper>
          <Menu menuOpen={menuOpen} location={location} />
        </MenuWrap>
      </NavWrap>
    </HeaderWrap>
  );
};

export default Nav;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '@styles';

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  outline: 0;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;

  ${media.tablet`display: block;`};
`;
const Sidebar = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--bg);
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: var(--font-family-mono);
  box-shadow: -10px 0px 30px -15px #000;

  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  /* ${media.tiny`padding: 10px;`}; */
`;
const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
  color: var(--text);
`;
const NavList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`;
const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;

  ${media.thone`
    margin: 0 auto 10px;
  `};
`;
const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 20px;
  color: var(--text);
  padding: 3px 20px 20px;

  :hover {
    color: var(--purple);
  }
`;
const NavLinkA = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 20px;
  color: var(--text);
  padding: 3px 20px 20px;

  :hover {
    color: var(--purple);
  }
`;

const Menu = ({ menuOpen, toggleMenu }) => {
  const handleMenuClick = e => {
    const target = e.target;
    const isLink = target.hasAttribute('href');
    const isNotMenu = target.classList && target.classList[0].includes('StyledContainer');

    if (isLink || isNotMenu) {
      toggleMenu();
    }
  };

  return (
    <StyledContainer
      menuOpen={menuOpen}
      onClick={handleMenuClick}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}>
      <Sidebar>
        <NavLinks>
          <NavList>
            <NavListItem>
              <NavLink to="/">Home</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/about">About</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/codefest">CodeFest</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/sponsors">Sponsors</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLinkA href="https://bank.hackclub.com/donations/start/techcodes">Donate</NavLinkA>
            </NavListItem>
            <NavListItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavListItem>
          </NavList>
        </NavLinks>
      </Sidebar>
    </StyledContainer>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;

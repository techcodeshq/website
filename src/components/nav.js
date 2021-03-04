import React, { Component } from 'react';
import { Container, media } from '@styles';
import { Link } from 'gatsby';
import { Menu } from '@components';
import styled from 'styled-components';
import Logo from '@images/logo.png';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 4.6rem;
  transition-property: transform, background-color, box-shadow;
  transition-timing-function: ease;
  transition-duration: 0.3s;
`;
const StyledContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
const StyledNav = styled.nav`
  color: var(--text);
  display: flex;
  width: 100%;

  ${media.tablet`justify-content: flex-end;`};
`;
const StyledHamburger = styled.div`
  overflow: visible;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  z-index: 1000;

  ${media.tablet`display: flex;`};
`;
const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 24px;
`;
const StyledHamburgerInner = styled.div`
  background-color: var(--text);
  position: absolute;
  width: 20px;
  height: 3px;
  border-radius: 3px;
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: var(--text);
    position: absolute;
    left: auto;
    right: 0;
    width: 20px;
    height: 3px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props =>
      props.menuOpen
        ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s'
        : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in'};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props =>
      props.menuOpen
        ? 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s'
        : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
  }
`;
const NavList = styled.ul`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  padding: 0;

  ${media.tablet`display: none;`};
`;
const NavItem = styled.li`
  margin-left: 1.87rem;
  position: relative;
`;
const LogoWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
const StyledLogo = styled.img`
  width: 4rem;
  height: 4rem;

  ${media.thone`
    width: 3rem;
    height: 3rem;
  `};
`;
const NavLink = styled(Link)`
  color: var(--text);
  font-size: 19px;
  font-weight: 500;
  display: block;
  line-height: 1;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);
  opacity: 1;

  :hover {
    color: var(--purple);
    transform: scale(1.05);
  }
`;
const NavLinkA = styled.a`
  color: var(--text);
  font-size: 19px;
  font-weight: 500;
  display: block;
  line-height: 1;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);
  opacity: 1;

  :hover {
    color: var(--purple);
    transform: scale(1.05);
  }
`;

class Nav extends Component {
  state = { menuOpen: false };

  componentDidMount() {
    setTimeout(() => {
      window.addEventListener('resize', () => this.handleResize());
      window.addEventListener('keydown', e => this.handleKeydown(e));
    }, 100);
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleResize = () => {
    if (window.innerWidth > 600 && this.state.menuOpen) {
      this.toggleMenu();
    }
  };

  handleKeydown = e => {
    if (!this.state.menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === 'Escape') {
      this.toggleMenu();
    }
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <StyledHeader id="header">
        <Container>
          <StyledContainer>
            <LogoWrapper to="/">
              <StyledLogo src={Logo} alt="CODE" />
            </LogoWrapper>
            <StyledNav>
              <NavList>
                <NavItem>
                  <NavLink to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/codefest">CodeFest</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/sponsors">Sponsors</NavLink>
                </NavItem>
                <NavItem>
                  <NavLinkA href="https://bank.hackclub.com/donations/start/techcodes">
                    Donate
                  </NavLinkA>
                </NavItem>
                <NavItem>
                  <NavLink to="/contact">Contact</NavLink>
                </NavItem>
              </NavList>

              <StyledHamburger onClick={this.toggleMenu}>
                <StyledHamburgerBox>
                  <StyledHamburgerInner menuOpen={menuOpen} />
                </StyledHamburgerBox>
              </StyledHamburger>
              <Menu menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
            </StyledNav>
          </StyledContainer>
        </Container>
      </StyledHeader>
    );
  }
}

export default Nav;

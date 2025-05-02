import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: ${props => props.theme.navBackground};
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.scrolled ? props.theme.shadow : 'none'};
  transition: all 0.3s ease;
  border-bottom: ${props => props.scrolled ? 'none' : `1px solid ${props.theme.border}`};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.theme.accent};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, ${props => props.theme.accent}, transparent);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(0);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => (props.isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: ${props => props.theme.background};
    flex-direction: column;
    justify-content: center;
    transition: all 0.5s ease;
    box-shadow: ${props => props.theme.shadow};
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.accent};
    transition: width 0.3s ease;
  }
  
  &:hover::after, &.active::after {
    width: 100%;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 99;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <NavbarContainer scrolled={scrolled}>
        <NavContent>
          <Logo to="/">Portfolio</Logo>
          
          <MenuButton onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
          
          <NavLinks isOpen={isOpen}>
            <li>
              <NavLink 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={location.pathname === '/projects' ? 'active' : ''}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/certificates" 
                className={location.pathname === '/certificates' ? 'active' : ''}
              >
                Certificates
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <ThemeToggle onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </ThemeToggle>
            </li>
          </NavLinks>
        </NavContent>
      </NavbarContainer>
      <Overlay isOpen={isOpen} onClick={toggleMenu} />
    </>
  );
};

export default Navbar;
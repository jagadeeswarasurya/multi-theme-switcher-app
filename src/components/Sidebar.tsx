// src/components/Sidebar.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Home, Info, Mail, Palette, Menu, X } from 'lucide-react';
import ThemeDropdown from './ThemeDropdown';
import { useTheme } from '../context/ThemeContext';

const SidebarWrapper = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-260px')};
  width: 240px;
  height: 100vh;
  background-color: #1e1e1e;
  color: #f1f1f1;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1000;
  transition: left 0.3s ease;

  @media (min-width: 769px) {
    left: 0;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: #f1f1f1;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;

    &.active {
      color: #00e676;
    }

    &:hover {
      opacity: 0.85;
    }
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1100;
  background: transparent;
  border: none;
  color: #f1f1f1;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Sidebar: React.FC = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 769);

  // Hide sidebar if theme is not theme2
  if (theme !== 'theme2') return null;

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  // Optional: close sidebar on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) setIsOpen(true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <ToggleButton onClick={toggleSidebar}>
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </ToggleButton>

      <SidebarWrapper isOpen={isOpen}>
        <TopSection>
          <Logo>
            <Palette size={26} />
            <span>Theme App</span>
          </Logo>
          <ThemeDropdown />
        </TopSection>

        <Nav>
          <NavLink to="/"> <Home size={18} /> Home </NavLink>
          <NavLink to="/about"> <Info size={18} /> About </NavLink>
          <NavLink to="/contact"> <Mail size={18} /> Contact </NavLink>
        </Nav>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;

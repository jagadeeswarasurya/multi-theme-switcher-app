// src/components/Header.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeDropdown from './ThemeDropdown';
import { NavLink } from 'react-router-dom';
import { Palette, Home, Info, Mail, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  background: ${({ theme }) =>
    theme.name === 'theme1'
      ? 'linear-gradient(to right, #e0f7fa, #e1f5fe)'
      : theme.name === 'theme2'
      ? '#1e1e1e'
      : '#fff0f5'};

  box-shadow: ${({ theme }) =>
    theme.name === 'theme3'
      ? '0 4px 12px rgba(255, 105, 180, 0.3)'
      : '0 2px 8px rgba(0, 0, 0, 0.05)'};

  border-bottom: ${({ theme }) =>
    theme.name === 'theme2'
      ? '1px solid #333'
      : theme.name === 'theme3'
      ? '2px solid #ff69b4'
      : '1px solid #ccc'};

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    stroke: ${({ theme }) =>
      theme.name === 'theme3' ? '#ff1493' : theme.name === 'theme1' ? '#0077b6' : '#f1f1f1'};
  }
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
    transition: all 0.2s ease;
    color: ${({ theme }) => theme.color};

    &.active {
      background: ${({ theme }) =>
        theme.name === 'theme3' ? '#ff1493' : '#cce7ff'};
      color: ${({ theme }) =>
        theme.name === 'theme3' ? '#fff' : '#000'};
    }

    &:hover {
      background: ${({ theme }) =>
        theme.name === 'theme2' ? '#333' : '#eee'};
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    margin-top: 1rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color};
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    stroke-width: 2.2;
  }
`;

const Header: React.FC = () => {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  if (theme === 'theme2') return null;

  return (
    <HeaderBar>
      <RightSection>
        <Logo>
          <Palette size={22} />
        </Logo>
        <MenuToggle onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          <Menu size={24} />
        </MenuToggle>
      </RightSection>

      <NavLinks isOpen={menuOpen}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}> <Home size={18} /> Home </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}> <Info size={18} /> About </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}> <Mail size={18} /> Contact </NavLink>
      </NavLinks>

      <ThemeDropdown />
    </HeaderBar>
  );
};

export default Header;

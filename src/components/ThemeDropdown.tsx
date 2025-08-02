import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Rainbow, ChevronDown } from 'lucide-react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1rem;
  background-color: ${({ theme }) =>
    theme.name === 'theme2' ? '#2c2c2c' : '#fff'};
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.font};
  border: 1px solid ${({ theme }) =>
    theme.name === 'theme2' ? '#555' : '#ccc'};
  border-radius: 10px;
  cursor: pointer;
  box-shadow: ${({ theme }) =>
    theme.name === 'theme3'
      ? '0 0 10px rgba(255, 105, 180, 0.4)'
      : '0 2px 6px rgba(0, 0, 0, 0.05)'};
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    border-radius: 8px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background: ${({ theme }) =>
    theme.name === 'theme2' ? '#1e1e1e' : '#fff'};
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.4rem 0;
  z-index: 999;
  animation: ${fadeIn} 0.2s ease-out;
  min-width: 160px;

  @media (max-width: 768px) {
    min-width: 140px;
  }
`;

const MenuItem = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  cursor: pointer;
  background: ${({ $active, theme }) =>
    $active ? (theme.name === 'theme3' ? '#ffe4f0' : '#f0f0f0') : 'transparent'};
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  color: ${({ theme }) => theme.color};
  font-size: 0.95rem;

  &:hover {
    background: ${({ theme }) =>
      theme.name === 'theme3' ? '#ffdef0' : '#f9f9f9'};
  }

  svg {
    stroke: ${({ theme }) =>
      theme.name === 'theme3'
        ? '#ff1493'
        : theme.name === 'theme2'
        ? '#f1f1f1'
        : '#333'};
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const ThemeDropdown: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (themeName: 'theme1' | 'theme2' | 'theme3') => {
    setTheme(themeName);
    setOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getThemeIcon = () => {
    switch (theme) {
      case 'theme1':
        return <Sun />;
      case 'theme2':
        return <Moon />;
      case 'theme3':
        return <Rainbow />;
      default:
        return <Sun />;
    }
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownButton onClick={() => setOpen(!open)}>
        {getThemeIcon()}
        <ChevronDown size={18} />
      </DropdownButton>
      {open && (
        <DropdownMenu>
          <MenuItem onClick={() => handleSelect('theme1')} $active={theme === 'theme1'}>
            <Sun /> Theme 1
          </MenuItem>
          <MenuItem onClick={() => handleSelect('theme2')} $active={theme === 'theme2'}>
            <Moon /> Theme 2
          </MenuItem>
          <MenuItem onClick={() => handleSelect('theme3')} $active={theme === 'theme3'}>
            <Rainbow /> Theme 3
          </MenuItem>
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

export default ThemeDropdown;

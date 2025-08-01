import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const FadeWrapper = styled.div<{ fading: boolean }>`
  opacity: ${({ fading }) => (fading ? 0 : 1)};
  transition: opacity 0.5s ease;
`;

const ThemeTransitionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setFading(true);
    const timeout = setTimeout(() => setFading(false), 200); // duration of fade out
    return () => clearTimeout(timeout);
  }, [theme]);

  return <FadeWrapper fading={fading}>{children}</FadeWrapper>;
};

export default ThemeTransitionWrapper;

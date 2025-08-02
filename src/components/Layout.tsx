// src/components/Layout.tsx
import React from 'react';
import Sidebar from './Sidebar'; // ✅ Ensure the path is correct
import { useTheme } from '../context/ThemeContext'; // ✅ Import hook to get theme

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { themeObject } = useTheme();

  return (
    <div style={{ display: 'flex' }}>
      {themeObject.layout === 'sidebar' && <Sidebar />}
      <main
        style={{
          flex: 1,
          padding: '2rem',
          marginLeft: themeObject.layout === 'sidebar' ? '220px' : '0',
          paddingTop: '80px', // Optional: For spacing below Header in other themes
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;

// src/components/Layout.tsx
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { themeObject } = useTheme();

  return (
    <div style={{ display: 'flex' }}>
      {themeObject.layout === 'sidebar' && <Sidebar />}
      <main style={{ flex: 1, padding: '2rem', marginLeft: themeObject.layout === 'sidebar' ? '220px' : '0' }}>
        {children}
      </main>
    </div>
  );
};

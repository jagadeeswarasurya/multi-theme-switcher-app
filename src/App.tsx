// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import GlobalStyle from './styles/GlobalStyle';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { themeObject } = useTheme();

  return (
    <>
      {themeObject.layout === 'sidebar' ? <Sidebar /> : <Header />}
      <MainContentWrapper layout={themeObject.layout}>
        {children}
      </MainContentWrapper>
    </>
  );
};

// Styled padding wrapper
const MainContentWrapper: React.FC<{ children: React.ReactNode; layout: string }> = ({
  children,
  layout,
}) => {
  const isSidebar = layout === 'sidebar';

  return (
    <div
      style={{
        paddingTop: isSidebar ? '0' : '80px',
        paddingLeft: isSidebar && window.innerWidth >= 769 ? '240px' : '0',
        transition: 'all 0.3s ease',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;

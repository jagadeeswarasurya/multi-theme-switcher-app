import React from 'react';
import styled from 'styled-components';
import { Info } from 'lucide-react';

const Wrapper = styled.div`
  padding: ${({ theme }) => (theme.name === 'theme3' ? '3rem 2rem' : '2rem')};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSize || '1rem'};
  line-height: 1.6;
  min-height: 100vh;

  ul {
    padding-left: 1.5rem;
    margin: 0.5rem 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  code {
    background: rgba(0, 0, 0, 0.05);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.95rem;
  }
`;

const Heading = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: ${({ theme }) => (theme.name === 'theme3' ? '2.8rem' : '2rem')};
  font-family: ${({ theme }) =>
    theme.name === 'theme3' ? '"Pacifico", cursive' : theme.font};
  color: ${({ theme }) =>
    theme.name === 'theme3'
      ? '#ff1493'
      : theme.name === 'theme1'
      ? '#222'
      : '#f1f1f1'};
  margin-bottom: 1rem;
`;

const Subheading = styled.h2`
  font-size: ${({ theme }) => (theme.name === 'theme3' ? '1.5rem' : '1.2rem')};
  margin-top: 1.5rem;
  color: ${({ theme }) =>
    theme.name === 'theme3'
      ? '#ff69b4'
      : theme.name === 'theme2'
      ? '#ccc'
      : '#444'};
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const About: React.FC = () => {
  return (
    <Wrapper>
      <Heading>
        <Info size={28} />
        About This Project
      </Heading>

      <Paragraph>
        <strong>MultiTheme Shop</strong> is a dynamic, responsive product catalog built with modern web technologies. Whether you're browsing on mobile or desktop, the interface adapts seamlessly to your screen size and theme preference.
      </Paragraph>

      <Subheading>🛍️ Why This App?</Subheading>
      <Paragraph>
        This project simulates a mini e-commerce interface. Users can explore products, switch between 3 unique visual themes, and experience different layouts and fonts in real time.
      </Paragraph>

      <Subheading>🎨 Available Themes</Subheading>
      <ul>
        <li><strong>🌞 Theme 1:</strong> Light & minimal with sans-serif fonts</li>
        <li><strong>🌚 Theme 2:</strong> Dark mode with classic serif fonts</li>
        <li><strong>🌈 Theme 3:</strong> Playful grid with vibrant colors and custom typography</li>
      </ul>

      <Subheading>✨ Key UI Features</Subheading>
      <ul>
        <li>🖼️ Product cards with image, title, price & category icon</li>
        <li>🏷️ Badges for items like <code>SALE</code> or <code>NEW</code></li>
        <li>💫 Smooth hover animations and card transitions</li>
        <li>📱 Responsive design for all device sizes</li>
      </ul>

      <Subheading>🧱 Tech Stack</Subheading>
      <ul>
        <li>⚛️ <strong>React + TypeScript</strong></li>
        <li>🎨 <strong>Styled-components</strong> for theming</li>
        <li>🌐 <strong>React Router</strong> for navigation</li>
        <li>📦 <strong>Axios</strong> for fetching from <code>https://fakestoreapi.com</code></li>
      </ul>

      <Paragraph>
        This app is a great starting point for learning how to build scalable, customizable, and theme-aware UIs using the modern React ecosystem.
      </Paragraph>
    </Wrapper>
  );
};

export default About;

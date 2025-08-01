// src/components/LandingSection.tsx
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.section`
  text-align: center;
  padding: 3rem 2rem;
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.color};
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) =>
    theme.name === 'theme3'
      ? '#ff69b4'
      : theme.name === 'theme2'
      ? '#00e676'
      : '#007bff'};
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    opacity: 0.9;
    transform: scale(1.03);
    transition: all 0.3s ease;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const LandingSection: React.FC = () => {
  return (
    <Wrapper>
      <Title>Welcome to Our Store</Title>
      <Paragraph>
        Discover the latest products from all categories. Switch between different themes and enjoy a fully responsive shopping experience.
      </Paragraph>
      <Button>Shop Now</Button>

      <CardWrapper>
        <Card
          title="Sample Product"
          description="This is a sample product card displayed as part of the landing content."
          price="49.99"
          image="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
          category="clothing"
          isNew
          isOnSale
        />
      </CardWrapper>
    </Wrapper>
  );
};

export default LandingSection;

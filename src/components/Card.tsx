// src/components/Card.tsx

import React from 'react';
import styled from 'styled-components';
import { ShoppingBag, Shirt, Monitor, Gem } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  price?: string;
  image?: string;
  category?: string;
  isNew?: boolean;
  isOnSale?: boolean;
}

const StyledCard = styled.div`
  background-color: ${({ theme }) =>
    theme.name === 'theme2'
      ? '#2b2b2b'
      : theme.name === 'theme3'
      ? '#fffbe6'
      : '#f5f5f5'};

  color: ${({ theme }) =>
    theme.name === 'theme2'
      ? '#f1f1f1'
      : theme.name === 'theme3'
      ? '#e91e63'
      : theme.color};

  font-family: ${({ theme }) => theme.font};
  border-radius: 16px;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: ${({ theme }) =>
    theme.name === 'theme2'
      ? '0 0 10px rgba(0,0,0,0.5)'
      : theme.name === 'theme3'
      ? '0 4px 16px rgba(255, 105, 180, 0.3)'
      : '0 4px 12px rgba(0,0,0,0.05)'};

  transition: all 0.4s ease;
  text-align: center;
  position: relative;

  &:hover {
    transform: ${({ theme }) =>
      theme.name === 'theme3' ? 'translateY(-8px) scale(1.05)' : 'scale(1.03)'};

    box-shadow: ${({ theme }) =>
      theme.name === 'theme3'
        ? '0 8px 24px rgba(255, 105, 180, 0.6)'
        : '0 8px 20px rgba(0,0,0,0.15)'};

    border: ${({ theme }) =>
      theme.name === 'theme3' ? '2px dashed hotpink' : 'none'};
  }
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => (theme.name === 'theme2' ? '#ccc' : '#555')};
`;

const Price = styled.div`
  font-weight: bold;
  color: ${({ theme }) => (theme.name === 'theme2' ? '#00e676' : '#28a745')};
  margin-top: 0.5rem;
`;

const CategoryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #aaa;
  margin-top: 0.5rem;
`;

const Badge = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #ff4757;
  color: #fff;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const getCategoryIcon = (category: string) => {
  if (category.toLowerCase().includes('clothing')) return <Shirt size={16} style={{ marginRight: '6px' }} />;
  if (category.toLowerCase().includes('electronics')) return <Monitor size={16} style={{ marginRight: '6px' }} />;
  if (category.toLowerCase().includes('jewelery')) return <Gem size={16} style={{ marginRight: '6px' }} />;
  return <ShoppingBag size={16} style={{ marginRight: '6px' }} />;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  image,
  category,
  isNew,
  isOnSale,
}) => {
  return (
    <StyledCard>
      {isNew && <Badge>NEW</Badge>}
      {isOnSale && <Badge>SALE</Badge>}
      {image && <ProductImage src={image} alt={title} />}
      <Title>{title}</Title>
      <Description>{description}</Description>
      {price && <Price>${price}</Price>}
      {category && (
        <CategoryIcon>
          {getCategoryIcon(category)}
          {category}
        </CategoryIcon>
      )}
    </StyledCard>
  );
};

export default Card;

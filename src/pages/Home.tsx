// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import LandingSection from '../components/LandingSection';
import styled from 'styled-components';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const PageWrapper = styled.div`
  padding-top: 5rem; /* Push content below fixed header */
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <PageWrapper>
      <LandingSection />
      <GridWrapper>
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price.toString()}
            image={product.image}
            category={product.category}
          />
        ))}
      </GridWrapper>
    </PageWrapper>
  );
};

export default Home;

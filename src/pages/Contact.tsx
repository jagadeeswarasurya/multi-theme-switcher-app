import React from 'react';
import styled from 'styled-components';
import { Mail } from 'lucide-react';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem; /* account for fixed header */
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  font-family: ${({ theme }) => theme.font};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  color: ${({ theme }) => theme.color};
`;

const Heading = styled.h1`
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
  margin-bottom: 2rem;
  color: ${({ theme }) =>
    theme.name === 'theme3'
      ? '#ff1493'
      : theme.name === 'theme1'
      ? '#007bff'
      : '#f1f1f1'};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background-color: ${({ theme }) =>
    theme.name === 'theme2' ? '#2a2a2a' : '#f9f9f9'};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) =>
    theme.name === 'theme3'
      ? '0 0 20px rgba(255, 105, 180, 0.3)'
      : '0 4px 16px rgba(0, 0, 0, 0.05)'};
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) =>
    theme.name === 'theme2' ? '#555' : '#ccc'};
  border-radius: 6px;
  background-color: ${({ theme }) =>
    theme.name === 'theme2' ? '#1a1a1a' : '#fff'};
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.font};
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  min-height: 120px;
  border: 1px solid ${({ theme }) =>
    theme.name === 'theme2' ? '#555' : '#ccc'};
  border-radius: 6px;
  background-color: ${({ theme }) =>
    theme.name === 'theme2' ? '#1a1a1a' : '#fff'};
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.font};
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: ${({ theme }) =>
    theme.name === 'theme3'
      ? '#ff69b4'
      : theme.name === 'theme2'
      ? '#00e676'
      : '#007bff'};

  color: #fff;

  &:hover {
    opacity: 0.92;
    transform: scale(1.02);
  }
`;

const Contact: React.FC = () => {
  return (
    <PageWrapper>
      <Wrapper>
        <Heading>
          <Mail size={26} />
          Contact Us
        </Heading>

        <Form onSubmit={(e) => e.preventDefault()}>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea placeholder="Your Message" required />
          <Button type="submit">Send Message</Button>
        </Form>
      </Wrapper>
    </PageWrapper>
  );
};

export default Contact;

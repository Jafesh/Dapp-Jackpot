import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Define your styled components here
const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px 50px;
`;

const NavLink = styled(Link)`
  color: #333;
  font-weight: bold;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    border-radius: 4px;
  }
`;

const SectionHeader = styled.h2`
  text-align: left;
  font-size: 36px; /* Adjust based on your design */
  margin: 20px; /* Adjust based on your design */
  font-weight: bold;
  padding-left: 20px; /* If you have padding in your design */
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Creates a 2-column grid
  gap: 20px; // Adjust the gap size as needed
  padding: 20px;
`;

const ContentBlock = styled.div`
  text-align: center;
  // Add additional styling for your content blocks
`;

const Label = styled.div`
  margin-top: 8px; /* Adjust based on your design */
  font-size: 18px; /* Adjust based on your design */
  font-weight: bold; /* If the label is bold in your design */
`;

const ImageContainer = styled.div`
  width: 100%; // Ensures the container spans the entire width of the grid column
  height: 0; // Initially set height to 0
  padding-top: 56.25%; // Aspect ratio padding hack (16:9 ratio, for example)
  position: relative; // Relative positioning for absolute child
  border-radius: 8px; // Add border-radius if you want rounded corners
  overflow: hidden; // Ensures the images don't overflow their containers
`;

const Image = styled.img`
  position: absolute; // Positions image absolutely within the container
  top: 0;
  left: 0;
  width: 100%; // Span the full width of the container
  height: 100%; // Span the full height of the container
  object-fit: cover; // Cover the container while maintaining aspect ratio
`;

// Define your AboutPage component
const AboutPage = () => {
  return (
    <>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/account">Account</NavLink>
      </Navbar>
      <SectionHeader>About us:</SectionHeader>
      <ContentGrid>
        <ContentBlock>
          <ImageContainer>
            <Image src="/whitepaper.jpeg" alt="White Paper" />
          </ImageContainer>
          <Label>White Paper</Label>
        </ContentBlock>
        <ContentBlock>
          <ImageContainer>
            <Image src="/tokenomics.jpg" alt="Tokenomics" />
          </ImageContainer>
          <Label>Tokenomics</Label>
        </ContentBlock>
        <ContentBlock>
          <ImageContainer>
            <Image src="/ourteam.jpg" alt="Our Team" />
          </ImageContainer>
          <Label>Our Team</Label>
        </ContentBlock>
        <ContentBlock>
          <ImageContainer>
            <Image src="/games.jpg" alt="Games" />
          </ImageContainer>
          <Label>Games</Label>
        </ContentBlock>
      </ContentGrid>
    </>
  );
};

export default AboutPage;

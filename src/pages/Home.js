import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { AnimatedBackground, FloatingShape, AnimatedButton } from '../components/UIElements';
import hero from '../img/hero/hero.JPG'

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroText = styled.div`
  flex: 1;
  position: relative;
  z-index: 2;
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    box-shadow: ${props => props.theme.shadow};
  }
`;

const Greeting = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.accent};
  margin-bottom: 1rem;
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Role = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text}aa;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin: 0 auto 2rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

// Removed PrimaryButton and SecondaryButton components since they're not being used

const Home = () => {
  return (
    <HeroSection>
      <AnimatedBackground />
      
      <FloatingShape 
        size="150px" 
        type="circle" 
        top="15%" 
        left="10%" 
        color="rgba(67, 97, 238, 0.1)"
        duration="7s"
      />
      <FloatingShape 
        size="100px" 
        type="triangle" 
        top="60%" 
        right="15%" 
        color="rgba(67, 97, 238, 0.15)"
        duration="9s"
        delay="1s"
      />
      <FloatingShape 
        size="80px" 
        type="square" 
        bottom="10%" 
        left="20%" 
        color="rgba(67, 97, 238, 0.1)"
        duration="8s"
        delay="2s"
      />
      
      <HeroContent>
        <HeroText>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </Greeting>
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Samuel
          </Name>
          <Role
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Frontend Developer
          </Role>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I create beautiful, responsive, and user-friendly web applications using modern technologies. 
            With a passion for clean code and intuitive design, I build digital experiences that make an impact.
          </Description>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatedButton 
              as={Link} 
              to="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects <FaArrowRight style={{ marginLeft: '8px' }} />
            </AnimatedButton>
            <AnimatedButton 
              as={Link} 
              to="/contact"
              secondary
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </AnimatedButton>
          </ButtonGroup>
        </HeroText>
        <HeroImage>
          <motion.img 
            src={hero} 
            alt="Samuel"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ 
              width: '300px',  // Set a fixed width
              height: '300px', // Set the same height as width
              objectFit: 'cover', // This will crop the image to fit
              borderRadius: '50%', 
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              border: '5px solid white'
            }}
          />
        </HeroImage>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;
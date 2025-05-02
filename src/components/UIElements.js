import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Animated background element
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    -45deg,
    ${props => props.theme.background},
    ${props => `${props.theme.accent}15`},
    ${props => props.theme.background},
    ${props => `${props.theme.secondary}`}
  );
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  z-index: -1;
`;

// Animated shape elements
const floatAnimation = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

export const FloatingShape = styled.div`
  position: absolute;
  width: ${props => props.size || '100px'};
  height: ${props => props.size || '100px'};
  border-radius: ${props => props.type === 'circle' ? '50%' : props.type === 'triangle' ? '0' : '10px'};
  background: ${props => props.color || props.theme.accent + '20'};
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  animation: ${floatAnimation} ${props => props.duration || '6s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  z-index: -1;
  opacity: 0.7;
  
  ${props => props.type === 'triangle' && `
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  `}
`;

// Button with hover effect
export const AnimatedButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  background: ${props => props.secondary ? 'transparent' : props.theme.accent};
  color: ${props => props.secondary ? props.theme.text : 'white'};
  border: 2px solid ${props => props.secondary ? props.theme.border : props.theme.accent};
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.secondary ? props.theme.secondary : props.theme.accentDark};
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

// Section divider
export const SectionDivider = styled.div`
  height: 5rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.secondary};
  }
`;

export const WaveDivider = ({ inverted }) => (
  <SectionDivider>
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none"
      style={{ 
        transform: inverted ? 'rotate(180deg)' : 'none',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    >
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
    </svg>
  </SectionDivider>
);

// Skill progress bar
export const SkillBar = styled.div`
  width: 100%;
  height: 10px;
  background: ${props => props.theme.secondary};
  border-radius: 5px;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
`;

const progressAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${props => props.progress}%;
  }
`;

export const SkillProgress = styled.div`
  height: 100%;
  width: ${props => props.progress}%;
  background: linear-gradient(to right, ${props => props.theme.accent}, ${props => props.theme.accentDark});
  border-radius: 5px;
  animation: ${progressAnimation} 1.5s ease;
`;

export const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  span:last-child {
    color: ${props => props.theme.accent};
    font-weight: 500;
  }
`;

// Card with hover effect
export const HoverCard = styled(motion.div)`
  background: ${props => props.theme.cardBackground};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow};
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, ${props => props.theme.accent}, ${props => props.theme.accentDark});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

// Tooltip component
export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  
  &:hover span {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TooltipText = styled.span`
  visibility: hidden;
  width: 120px;
  background: ${props => props.theme.accent};
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${props => props.theme.accent} transparent transparent transparent;
  }
`;
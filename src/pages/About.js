import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobile, FaServer } from 'react-icons/fa';
import hero from '../img/hero/hero.JPG'

const AboutSection = styled.section`
  padding: 8rem 0 5rem;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${props => props.theme.accent};
    border-radius: 2px;
  }
`;

const AboutSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.text}aa;
  max-width: 700px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: ${props => props.theme.shadow};
  }
`;

const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const SkillsContainer = styled.div`
  margin-top: 2rem;
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  background: ${props => props.theme.cardBackground};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadow};
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.accent};
`;

const SkillName = styled.p`
  font-weight: 500;
`;

const ServicesSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.secondary};
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${props => props.theme.accent};
    border-radius: 2px;
  }
`;

const ServicesSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.text}aa;
  max-width: 700px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: ${props => props.theme.cardBackground};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.accent};
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.text}dd;
`;

const About = () => {
  const skills = [
    { name: 'HTML & CSS', icon: <FaCode /> },
    { name: 'JavaScript', icon: <FaCode /> },
    { name: 'React', icon: <FaCode /> },
    { name: 'Node.js', icon: <FaServer /> },
    { name: 'UI/UX Design', icon: <FaPalette /> },
    { name: 'Responsive Design', icon: <FaMobile /> },
  ];

  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'I build responsive and performant web applications using modern technologies and best practices.'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'I create intuitive and visually appealing user interfaces that provide excellent user experiences.'
    },
    {
      icon: <FaMobile />,
      title: 'Responsive Design',
      description: 'I ensure your website looks and works perfectly on all devices, from desktops to smartphones.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Integration',
      description: 'I connect your frontend to backend services, APIs, and databases for full-stack functionality.'
    }
  ];

  return (
    <>
      <AboutSection>
        <AboutContainer>
          <AboutHeader>
            <AboutTitle>About Me</AboutTitle>
            <AboutSubtitle>Learn more about my background, skills, and what I do</AboutSubtitle>
          </AboutHeader>
          
          <AboutContent>
            <AboutImage>
              <img src={hero} alt="Samuel" />
            </AboutImage>
            
            <AboutInfo>
              <AboutText>
                Hello! I'm Samuel, a passionate frontend developer with a strong focus on creating 
                intuitive and engaging user experiences. With X years of experience in web development, 
                I've had the opportunity to work on a variety of projects that have helped me refine my skills.
              </AboutText>
              
              <AboutText>
                I specialize in building modern web applications using React and related technologies. 
                My approach combines clean code, responsive design, and attention to detail to create 
                solutions that not only look great but also perform exceptionally well.
              </AboutText>
              
              <AboutText>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and tutorials.
              </AboutText>
              
              <SkillsContainer>
                <SkillsTitle>My Skills</SkillsTitle>
                <SkillsList>
                  {skills.map((skill, index) => (
                    <SkillItem key={index}>
                      <SkillIcon>{skill.icon}</SkillIcon>
                      <SkillName>{skill.name}</SkillName>
                    </SkillItem>
                  ))}
                </SkillsList>
              </SkillsContainer>
            </AboutInfo>
          </AboutContent>
        </AboutContainer>
      </AboutSection>
      
      <ServicesSection>
        <ServicesContainer>
          <ServicesHeader>
            <ServicesTitle>What I Do</ServicesTitle>
            <ServicesSubtitle>Services I offer to my clients</ServicesSubtitle>
          </ServicesHeader>
          
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </ServicesContainer>
      </ServicesSection>
    </>
  );
};

export default About;
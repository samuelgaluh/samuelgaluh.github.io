import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 8rem 0 5rem;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ProjectsTitle = styled.h2`
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

const ProjectsSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.text}aa;
  max-width: 700px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  background: ${props => props.active ? props.theme.accent : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.text};
  border: 2px solid ${props => props.active ? props.theme.accent : props.theme.border};
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? props.theme.accentDark : props.theme.secondary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.cardBackground};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.text}dd;
  margin-bottom: 1rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectTag = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background: ${props => props.theme.secondary};
  border-radius: 20px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projectsData = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce website with product filtering, cart functionality, and payment integration.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, user authentication, and real-time updates.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Firebase', 'Redux'],
      category: 'app',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations, dark mode, and contact form functionality.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Styled Components', 'Framer Motion'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather and forecasts for multiple locations using a weather API.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['JavaScript', 'API', 'CSS'],
      category: 'app',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A full-stack blog platform with user authentication, CRUD operations, and markdown support.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'A recipe finder application that allows users to search for recipes based on ingredients, dietary restrictions, and more.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'API', 'CSS'],
      category: 'app',
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  return (
    <ProjectsSection>
      <ProjectsContainer>
        <ProjectsHeader>
          <ProjectsTitle>My Projects</ProjectsTitle>
          <ProjectsSubtitle>Check out some of my recent work</ProjectsSubtitle>
        </ProjectsHeader>
        
        <FilterContainer>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All
          </FilterButton>
          <FilterButton 
            active={filter === 'web'} 
            onClick={() => setFilter('web')}
          >
            Web
          </FilterButton>
        </FilterContainer>
        
        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, i) => (
                    <ProjectTag key={i}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </ProjectLink>
                  <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
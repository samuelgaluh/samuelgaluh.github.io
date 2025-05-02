import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import sertifikatRjs from '../img/sertifikat/sertifikat-rjs.jpg';
import sertifikatJs from '../img/sertifikat/sertifikat-js.jpg';
import sertifikatFe from '../img/sertifikat/sertifikat-fe.jpg';
import sertifikatAi from '../img/sertifikat/sertifikat-ai.jpg';
import sertifikatPw from '../img/sertifikat/sertifikat-pw.jpg';
import CertificateModal from '../components/CertificateModal';

const CertificatesSection = styled.section`
  padding: 8rem 0 5rem;
`;

const CertificatesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CertificatesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const CertificatesTitle = styled.h2`
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

const CertificatesSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.text}aa;
  max-width: 700px;
  margin: 0 auto;
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CertificateCard = styled(motion.div)`
  background: ${props => props.theme.cardBackground};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const CertificateImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${CertificateCard}:hover & img {
    transform: scale(1.05);
  }
`;

const CertificateContent = styled.div`
  padding: 1.5rem;
`;

const CertificateTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const CertificateIssuer = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.accent};
  margin-bottom: 0.5rem;
`;

const CertificateDate = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.text}aa;
  margin-bottom: 1rem;
`;

const CertificateDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.text}dd;
  margin-bottom: 1rem;
`;

const CertificateLink = styled.a`
  display: inline-block;
  font-size: 0.9rem;
  color: ${props => props.theme.accent};
  transition: color 0.3s ease;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const certificatesData = [
    {
      id: 1,
      title: 'React.js Development',
      issuer: 'Dicoding Indonesia',
      date: 'January 2023',
      description: 'Advanced React.js development course covering components, hooks, state management, and modern React practices.',
      image: sertifikatRjs,
      link: '#'
    },
    {
      id: 2,
      title: 'JavaScript Programming',
      issuer: 'Dicoding Indonesia',
      date: 'March 2023',
      description: 'Comprehensive JavaScript course covering fundamentals, ES6+, asynchronous programming, and web APIs.',
      image: sertifikatJs,
      link: '#'
    },
    {
      id: 3,
      title: 'Front-End Web Development',
      issuer: 'Dicoding Indonesia',
      date: 'June 2023',
      description: 'Complete front-end development course covering HTML, CSS, JavaScript, responsive design, and modern frameworks.',
      image: sertifikatFe,
      link: '#'
    },
    {
      id: 4,
      title: 'AI and Machine Learning Fundamentals',
      issuer: 'Dicoding Indonesia',
      date: 'August 2023',
      description: 'Introduction to artificial intelligence and machine learning concepts, algorithms, and practical applications.',
      image: sertifikatAi,
      link: '#'
    },
    {
      id: 5,
      title: 'Progressive Web Apps',
      issuer: 'Dicoding Indonesia',
      date: 'October 2022',
      description: 'Building modern, fast, and reliable web applications that work offline and provide app-like experiences.',
      image: sertifikatPw,
      link: '#'
    }
  ];

  return (
    <CertificatesSection>
      <CertificatesContainer>
        <CertificatesHeader>
          <CertificatesTitle>My Certificates</CertificatesTitle>
          <CertificatesSubtitle>Courses and certifications I've completed</CertificatesSubtitle>
        </CertificatesHeader>
        
        <CertificatesGrid>
          {certificatesData.map((certificate, index) => (
            <CertificateCard 
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CertificateImage>
                <img src={certificate.image} alt={certificate.title} />
              </CertificateImage>
              <CertificateContent>
                <CertificateTitle>{certificate.title}</CertificateTitle>
                <CertificateIssuer>{certificate.issuer}</CertificateIssuer>
                <CertificateDate>{certificate.date}</CertificateDate>
                <CertificateDescription>{certificate.description}</CertificateDescription>
                <CertificateLink 
                  href={certificate.link} 
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(certificate);
                  }}
                >
                  View Certificate
                </CertificateLink>
              </CertificateContent>
            </CertificateCard>
          ))}
        </CertificatesGrid>

        {/* Certificate Modal */}
        <CertificateModal 
          isOpen={modalOpen} 
          onClose={closeModal} 
          certificateImage={selectedCertificate?.image} 
          certificateTitle={selectedCertificate?.title} 
        />
      </CertificatesContainer>
    </CertificatesSection>
  );
};

export default Certificates;
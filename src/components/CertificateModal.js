import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: ${props => props.theme.cardBackground};
  border-radius: 10px;
  max-width: 90%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  box-shadow: ${props => props.theme.shadow};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.theme.accent};
  color: white;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.accentDark};
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;

const CertificateModal = ({ isOpen, onClose, certificateImage, certificateTitle }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>
              <FaTimes />
            </CloseButton>
            <CertificateImage src={certificateImage} alt={certificateTitle} />
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
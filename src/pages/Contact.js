import React, { useState } from 'react';
import styled from 'styled-components';
// Removed the unused motion import
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 8rem 0 5rem;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ContactTitle = styled.h2`
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

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.text}aa;
  max-width: 700px;
  margin: 0 auto;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactInfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 3rem;
`;

const ContactInfoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ContactInfoIcon = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.accent};
  margin-right: 1rem;
`;

const ContactInfoText = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }
  
  p {
    font-size: 1rem;
    color: ${props => props.theme.text}dd;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.text};
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.accent};
    color: white;
    transform: translateY(-5px);
  }
`;

const ContactForm = styled.div``;

const ContactFormTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Form = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid ${props => props.theme.border};
  border-radius: 5px;
  background: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.accent};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid ${props => props.theme.border};
  border-radius: 5px;
  background: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.accent};
  }
`;

const FormButton = styled.button`
  padding: 0.8rem 2rem;
  background: ${props => props.theme.accent};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.accentDark};
    transform: translateY(-3px);
  }
  
  &:disabled {
    background: ${props => props.theme.border};
    cursor: not-allowed;
    transform: none;
  }
`;

const FormMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  background: ${props => props.success ? '#d4edda' : '#f8d7da'};
  color: ${props => props.success ? '#155724' : '#721c24'};
  display: ${props => props.visible ? 'block' : 'none'};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false, message: '' });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false, message: '' }));
      }, 5000);
    }, 1500);
  };
  
  return (
    <ContactSection>
      <ContactContainer>
        <ContactHeader>
          <ContactTitle>Contact Me</ContactTitle>
          <ContactSubtitle>Get in touch for collaborations or inquiries</ContactSubtitle>
        </ContactHeader>
        
        <ContactContent>
          <ContactInfo>
            <ContactInfoTitle>Let's Talk</ContactInfoTitle>
            
            <ContactInfoList>
              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaEnvelope />
                </ContactInfoIcon>
                <ContactInfoText>
                  <h4>Email</h4>
                  <p>samuelgaluhdiaspramudya@gmail.com</p>
                </ContactInfoText>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaPhone />
                </ContactInfoIcon>
                <ContactInfoText>
                  <h4>Phone</h4>
                  <p>+62822-2126-7784</p>
                </ContactInfoText>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaMapMarkerAlt />
                </ContactInfoIcon>
                <ContactInfoText>
                  <h4>Location</h4>
                  <p>Salatiga, Indonesia</p>
                </ContactInfoText>
              </ContactInfoItem>
            </ContactInfoList>
            
            <ContactInfoTitle>Connect With Me</ContactInfoTitle>
            <SocialLinks>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm>
            <ContactFormTitle>Send Me a Message</ContactFormTitle>
            
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormButton type="submit" disabled={formStatus.submitting}>
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </FormButton>
              
              <FormMessage 
                visible={formStatus.success || formStatus.error}
                success={formStatus.success}
              >
                {formStatus.message}
              </FormMessage>
            </Form>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
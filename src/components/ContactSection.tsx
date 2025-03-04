import React, { useState } from 'react';
import '../styles/ContactSection.css';
import { portfolioData } from '../helpers/constants';
import emailjs from '@emailjs/browser';
import config from '../config';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const ContactSection: React.FC = () => {
  const { contact, email } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Initialize EmailJS
      emailjs.init(config.emailJsPublicKey);

      // Send notification email to you (the portfolio owner)
      await emailjs.send(
        config.emailJsServiceId,
        config.emailJsTemplateAdmin,
        {
          admin_email: config.adminEmail,
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      );

      // Send thank you email to the sender
      await emailjs.send(
        config.emailJsServiceId,
        config.emailJsTemplateUser,
        {
          name: formData.name,
          to_email: formData.email
        }
      );

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      // alert('Thank you for your message! A confirmation email has been sent.');
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{contact.title}</h2>
        <p className="contact-description">{contact.description}</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-method">
              <h3>Social Links</h3>
              <div className={`social-links ${portfolioData.socialLinks.length <= 3 ? 'few-links' : ''}`}>
                {portfolioData.socialLinks.map((social, index) => {
                  let icon;
                  let iconColor;
                  switch(social.icon) {
                    case 'github':
                      icon = <FaGithub size={24} />;
                      iconColor = '#ffffff';
                      break;
                    case 'linkedin':
                      icon = <FaLinkedin size={24} />;
                      iconColor = '#0077B5';
                      break;
                    case 'twitter':
                      icon = <FaTwitter size={24} />;
                      iconColor = '#1DA1F2';
                      break;
                    case 'leetcode':
                      icon = <SiLeetcode size={24} />;
                      iconColor = '#FFA116';
                      break;
                    default:
                      icon = social.name;
                      iconColor = 'var(--text-primary)';
                  }
                  
                  return (
                    <a 
                      key={index} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`social-icon ${portfolioData.socialLinks.length <= 3 ? 'large-icon' : ''}`}
                      aria-label={`${social.name} profile`}
                      title={social.name}
                      style={{ 
                        color: iconColor,
                        borderColor: iconColor
                      }}
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Contact Me</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            {submitError && (
              <div className="error-message">{submitError}</div>
            )}
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : contact.buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import React, { useState } from 'react';
import './Contact.scss';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message envoyé avec succès !');
      } else {
        alert('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur :', error);
      alert('Erreur lors de l\'envoi du message');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>N'hésitez pas à me contacter.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
  <div className='name-email'>
    <div className="form-group">
      <FaUser className="form-icon" />
      <label htmlFor="name">
        Nom et prénom <span className="required">*</span>
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Nom et Prénom *"
      />
    </div>
    <div className="form-group">
      <FaEnvelope className="form-icon" />
      <label htmlFor="email">
        Email <span className="required">*</span>
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Saisissez votre email *"
      />
    </div>
  </div>
  <div className="form-group">
    <div className='message'>
      <FaCommentDots className="form-icon" />
      <label htmlFor="message">
        Message <span className="required">*</span>
      </label>
      <textarea
        name="message"
        id="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Saisissez votre message *"
      ></textarea>
    </div>
  </div>
  <button type="submit" className="contact-submit">Envoyer</button>
</form>

    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import './Contact.scss';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formError, setFormError] = useState('');
  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Validation des champs
    const { name, email, message } = formData;

    // Vérifier si tous les champs sont remplis
    if (!name || !email || !message) {
      setFormError('Tous les champs sont requis.');
      triggerShake(); // Déclenche l'animation de vibration
      return;
    }

    // Vérification du format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormError('Veuillez entrer une adresse e-mail valide.');
      triggerShake(); // Déclenche l'animation de vibration
      return;
    }

    // Vérification de la longueur du message
    if (message.length < 20) {
      setFormError('Le message doit contenir au moins 5 caractères.');
      triggerShake(); // Déclenche l'animation de vibration
      return;
    }

    // Si tout est correct, procéder à l'envoi
    setFormError('');
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
        setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
      } else {
        alert('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur :', error);
      alert('Erreur lors de l\'envoi du message');
    }
  };

  // Fonction pour déclencher l'animation de vibration
  const triggerShake = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 500); // Durée de l'animation
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>N'hésitez pas à me contacter.</p>
      <form className={`contact-form ${shake ? 'shake' : ''}`} onSubmit={handleSubmit} noValidate> {/* Désactiver la validation native du navigateur */}
        <div className="form-columns">
          <div className="column">
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
                placeholder="Saisissez votre email *"
              />
            </div>
          </div>
          <div className="column message-column">
            <div className="form-group">
              <FaCommentDots className="form-icon" />
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Saisissez votre message *"
              ></textarea>
            </div>
          </div>
        </div>
        {formError && <div className="form-error-message">{formError}</div>}
        <button type="submit" className="contact-submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;

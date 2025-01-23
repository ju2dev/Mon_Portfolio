import React, { useState, useEffect } from 'react';
import './contact.css';

const ContactForm = () => {
  const [messageStatus, setMessageStatus] = useState('');

  useEffect(() => {
    document.body.style.backgroundColor = '#C0E2FA'; // Couleur pastel pour Contact
    return () => {
      document.body.style.backgroundColor = 'white'; // Réinitialise la couleur de fond
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const nom = form.nom.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!nom || !email || !message) {
      setMessageStatus({ text: 'Veuillez remplir tous les champs.', color: 'red' });
      return;
    }

    setMessageStatus({ text: 'Votre message a été envoyé avec succès!', color: 'green' });
    form.reset();
  };

  return (
    <div className="cloud-container">
      <h1>FORMULAIRE DE CONTACT</h1>

      {messageStatus && (
        <div id="message-status" style={{ color: messageStatus.color }}>
          {messageStatus.text}
        </div>
      )}

      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">NOM</label>
          <input type="text" id="nom" name="nom" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
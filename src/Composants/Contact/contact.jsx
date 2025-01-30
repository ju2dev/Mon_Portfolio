import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.min.css';

const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm('meoovyka');
  const [modalVisible, setModalVisible] = useState(false);
  
  // Gestion des valeurs du formulaire
  const [formValues, setFormValues] = useState({
    nom: '',
    email: '',
    message: '',
  });

  // Utiliser useEffect pour afficher la modale après l'envoi réussi
  useEffect(() => {
    if (state.succeeded) {
      setModalVisible(true); // Ouvrir la modale
      const timer = setTimeout(() => {
        setModalVisible(false); // Fermer la modale après 3 secondes
        setFormValues({
          nom: '',
          email: '',
          message: '',
        }); // Réinitialiser les valeurs du formulaire
        reset(); // Réinitialiser le formulaire avec Formspree
      }, 3000);

      // Nettoyer le timer lorsque le composant se démonte ou que l'état change
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  // Fonction pour gérer la modification des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="cloud-container">
      <h1 className="Form">FORMULAIRE DE CONTACT</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">NOM</label>
          <input 
            type="text" 
            id="nom" 
            name="nom" 
            value={formValues.nom} // Utilisation de formValues pour contrôler les champs
            onChange={handleChange} // Gestion du changement de valeur
            required 
            disabled={state.submitting} 
          />
          <ValidationError 
            prefix="Nom" 
            field="nom" 
            errors={state.errors}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formValues.email} // Utilisation de formValues pour contrôler les champs
            onChange={handleChange} // Gestion du changement de valeur
            required 
            disabled={state.submitting} 
          />
          <ValidationError 
            prefix="Email" 
            field="email" 
            errors={state.errors}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            value={formValues.message} // Utilisation de formValues pour contrôler les champs
            onChange={handleChange} // Gestion du changement de valeur
            required 
            disabled={state.submitting} 
          />
          <ValidationError 
            prefix="Message" 
            field="message" 
            errors={state.errors}
          />
        </div>

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>

      {/* Affichage des erreurs s'il y en a */}
      {state.errors && state.errors.length > 0 && (
        <div style={{ color: 'red' }}>
          Il y a eu une erreur avec l'envoi. Veuillez vérifier vos informations.
        </div>
      )}

      {/* Modale */}
      {modalVisible && (
        <div className="modal1">
          <div className="modal-content1">
            <p style={{ color: 'green' }}>Votre message a été envoyé avec succès !</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
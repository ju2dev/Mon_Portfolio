import React, { useEffect } from 'react'; 
import FleurJaune from '../../assets/img/fleur-jaune.png';
import FleurFoncé from '../../assets/img/fleur-rose-foncé.png';
import './mention.css';

const MentionsLegales = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#C0E2FA'; 
    return () => {
      document.body.style.backgroundColor = 'white';
    };
  }, []);

  return (
    <div>
      <h4 className="section-mentions">Mentions Légales</h4>
      <div className="container">
        <img
          src={FleurJaune} 
          alt="fleur décorative"
          className="corner-flower flower-top-right"
        />
        <img
          src={FleurFoncé}
          alt="fleur décorative"
          className="corner-flower flower-bottom-left"
        />
        <p>En vigueur au 19/01/2024</p>
        <p>
          Conformément aux dispositions des Articles 6-III et 19 de la Loi
          n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
          numérique, dite L.C.E.N., il est porté à la connaissance des
          utilisateurs et visiteurs, ci-après l'«Utilisateur», du site ...., ci-après le «Site», les présentes mentions légales.
        </p>
        <p>
          La connexion et la navigation sur le Site par l’Utilisateur implique
          acceptation intégrale et sans réserve des présentes mentions légales.
          Ces dernières sont accessibles sur le Site à la rubrique « Mentions
          légales ».
        </p>
        <p>
          <strong>ARTICLE 1 – L’EDITEUR</strong>
        </p>
        <p>
          L’édition et la direction de la publication du Site est assurée par
          Justine Piergiovanni, l'adresse e-mail j.piergiovanni@icloud.com. Ci-après l'"Editeur".
        </p>
        <p>
          <strong>ARTICLE 2 - L'HEBERGEUR</strong>
        </p>
        <p>
          L'hébergeur du Site est la société Hostinger, dont le siège social
          est situé au UAB Jonavos g. 60C, 44192, Kaunas, Lituanie.
        </p>
        <p>
          <strong>ARTICLE 3 - ACCES AU SITE</strong>
        </p>
        <p>
          Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de
          force majeure, interruption programmée ou non et pouvant découler
          d’une nécessité de maintenance. En cas de modification, interruption
          ou suspension du Site, l'Editeur ne saurait être tenu responsable.
        </p>
        <p>
          <strong>ARTICLE 4 - COLLECTE DES DONNEES</strong>
        </p>
        <p>
          Le Site assure à l'Utilisateur une collecte et un traitement
          d'informations personnelles dans le respect de la vie privée
          conformément à la loi n°78-17 du 6 janvier 1978 relative à
          l'informatique, aux fichiers et aux libertés.
        </p>
        <p>
          En vertu de la loi Informatique et Libertés, en date du 6 janvier
          1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de
          suppression et d'opposition de ses données personnelles.
        </p>
        <p>
          L'Utilisateur exerce ce droit : par mail à l'adresse email
          j.piergiovanni@icloud.com.
        </p>
        <p>
          Toute utilisation, reproduction, diffusion, commercialisation,
          modification de toute ou partie du Site, sans autorisation de
          l’Editeur est prohibée et pourra entraîner des actions et poursuites
          judiciaires telles que notamment prévues par le Code de la propriété
          intellectuelle et le Code civil.
        </p>
      </div>
    </div>
  );
};

export default MentionsLegales;
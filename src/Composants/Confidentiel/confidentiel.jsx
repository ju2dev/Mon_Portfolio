import React, { useEffect } from 'react';

import FleurJaune from '../../assets/img/fleur-jaune.png';
import FleurFoncé from '../../assets/img/fleur-rose-foncé.png';

import './confidentiel.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h2 className="section-mentions1">Politique de confidentialité</h2>
      <div className="container3">
        <img src={FleurJaune} alt="fleur décorative" className="corner-flower flower-top-right" />
        <img src={FleurFoncé} alt="fleur décorative" className="corner-flower flower-bottom-left" />

        <p>La présente politique de confidentialité s’applique au site Internet suivant : SITE (ci-après le « Site Internet »).</p>
        <p>Elle a pour but d’exposer aux utilisateurs du Site Internet :</p>

        <ul>
          <li>La manière dont sont collectées et traitées leurs données à caractère personnel...</li>
          <li>Les droits des utilisateurs relatifs à ces Données Personnelles ;</li>
          <li>L’identité du responsable de traitement des Données Personnelles collectées et traitées ;</li>
          <li>L’identité des personnes à qui ces Données Personnelles seront transmises ;</li>
          <li>La politique applicable aux « cookies ».</li>
        </ul>

        <p>La présente politique de confidentialité complète les mentions légales disponibles sur le Site Internet.</p>

        <p><strong>Article 1 : Principes généraux en matière de collecte et de traitement des Données Personnelles</strong></p>
        <p>Conformément à l’article 5 du RGPD...</p>
        <ul>
          <li>Les Données Personnelles sont traitées de manière licite, loyale et transparente...</li>
          <li>Les Données Personnelles sont collectées pour des finalités déterminées...</li>
          <li>Les Données Personnelles sont adéquates, pertinentes et limitées...</li>
          <li>Les Données Personnelles sont exactes et tenues à jour...</li>
          <li>Les Données Personnelles seront conservées sous une forme permettant l’identification des personnes concernées...</li>
          <li>Les Données Personnelles seront traitées de façon à garantir une sécurité appropriée...</li>
        </ul>

        <p><strong>Article 2 : Données Personnelles collectées et traitées dans le cadre de la navigation sur le Site Internet</strong></p>
        <p>Les Données Personnelles collectées sur le Site Internet sont les suivantes : nom, e-mail...</p>

        <p><strong>Article 3 : Transmission des Données Personnelles collectées</strong></p>
        <p>Les Données Personnelles des utilisateurs du Site Internet ne seront transmises à aucun tiers...</p>

        <p><strong>Article 4 : Hébergement des Données Personnelles</strong></p>
        <p>Le Site Internet est hébergé par Hostinger...</p>

        <p><strong>Article 5 : Responsable du traitement des Données Personnelles</strong></p>
        <p>La responsable du traitement des Données Personnelles est : Piergiovanni Justine...</p>

        <p><strong>Article 6 : Droits de l’utilisateur du Site Internet</strong></p>
        <ul>
          <li><strong>Droit de retrait du consentement :</strong> L’utilisateur peut révoquer le consentement donné...</li>
          <li><strong>Droit d’accès :</strong> L’utilisateur a le droit d’obtenir la confirmation que des Données Personnelles le concernant sont ou ne sont pas traitées...</li>
          <li><strong>Droit de rectification :</strong> L’utilisateur a le droit d’obtenir la rectification des Données Personnelles inexactes...</li>
          <li><strong>Droit à l’effacement ou à l’oubli :</strong> L’utilisateur a le droit de demander l’effacement des Données Personnelles...</li>
          <li><strong>Droit à la limitation du traitement :</strong> L’utilisateur peut demander que le traitement de ses Données Personnelles soit limité...</li>
          <li><strong>Droit à la portabilité des données :</strong> L’utilisateur a le droit de recevoir ses Données Personnelles dans un format structuré...</li>
          <li><strong>Droit d’opposition :</strong> L’utilisateur peut s’opposer au traitement de ses Données Personnelles...</li>
          <li><strong>Droit d’introduire une réclamation :</strong> L’utilisateur peut soumettre une réclamation auprès de l’autorité de contrôle compétente...</li>
        </ul>

        <p><strong>Article 7 : Utilisation des « cookies »</strong></p>
        <p>Le Site Internet utilise des cookies...</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
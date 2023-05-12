import React, { useState } from 'react'; 
import "../styles/form.scss";
function Form () {
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [phone, setPhone] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [date, setDate] = useState('');
    const [formattedDate, setFormattedDate] = useState('');
    
 
    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        setEmailValid(validateEmail(value));
      };
    
    const handlePhoneChange = (event) => {
    const { value } = event.target;
    const formattedValue = value
    .replace(/\D/g, '')
    .replace(/(\d{2})(?=\d)/g, '$1 ')
    .trim();
    if (formattedValue.length <= 14) {
    setPhone(formattedValue);
  };
    };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  const handleCardNumberChange = (event) => {
    const { value } = event.target;
    const formattedValue = value
      .replace(/\D/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim()
      .slice(0, 19);
    setCardNumber(formattedValue);
  };

  const handleDateChange = (event) => {
    const { value } = event.target;
    const formattedValue = value
      .replace(/\D/g, '') // Supprime tous les caractères qui ne sont pas des chiffres
      .slice(0, 4); // Limite la longueur à 4 caractères (2 chiffres pour le jour, 2 chiffres pour le mois)
  
    if (/^([0-9]{2})([0-9]{2})$/.test(formattedValue)) {
      // Si la chaîne est composée de 4 chiffres, on la transforme en une chaîne au format "DD / MM"
      const day = formattedValue.slice(0, 2);
      const month = formattedValue.slice(2, 4);
      const formattedDate = `${day} / ${month}`;
      setFormattedDate(formattedDate);
      setDate(formattedValue); // Stocke la date dans le format requis pour la carte bancaire
    } else {
      setFormattedDate(value); // Sinon, on stocke la chaîne telle qu'elle a été saisie par l'utilisateur
    }
  };
 

    return (

        <div className="form-container">
            
            <div className="form-header">
                <div className="form-title">
                    <h2>C'est parti !</h2>
                </div>
                <div className="form-p">
                    <p>Plus qu'une étape ! Réservez votre meilleur pack vacances dès maintenant !</p>
                </div>
            </div>
            
                <div className="form-body">

                    <div className="form-line-1">
                        <div className="form-line-1-label">
                            <label className="prenom"for="prenom">Prénom :</label>
                            <label for="nom">Nom :</label>
                        </div>

                        <div className='form-line-1-input'> 
                            <input type="text" id="prenom" name="prenom"  placeholder=""/>
                            <input type="text" id="nom" name="nom"  placeholder=""/>
                        </div> 
                    </div>

                    <div className="form-line-2">
                        <div className="form-line-2-label"> 
                            <label className="mail"for="mail">Mail :</label>
                            <label className="tel"for="telephone">Téléphone :</label>
                        </div>

                        <div className="form-line-2-input">   
                            <input type="email" id="mail" name="mail" value={email} onChange={handleEmailChange} placeholder="***@***"/>
                            <input type="tel" id="telephone" name="telephone" value={phone} onChange={handlePhoneChange} placeholder="** ** ** ** **"/>
                        </div>
                    </div>

                    <div className="form-line-3">
                        <div className="form-line-3-label">
                            <label className="adress"for="adresse">Adresse de facturation :</label>
                        </div>
                        <div className="form-line-3-textarea">
                            <textarea id="textarea" name="adresse" placeholder=""/>
                        </div>
                    </div>

                    <div className="form-line-4">   
                        <div className="form-line-4-label">
                            <label className="number" htmlFor="numero-carte">Numéro de carte :</label>
                            <label className="expiration" htmlFor="date-expiration">Date d'expiration :</label>
                            <label className="ccv" htmlFor="ccv">CCV :</label>
                        </div>
                        <div className="form-line-4-input">
                        <input type="text" id="numero-carte" name="numero-carte" pattern="[0-9]*" maxlength="19" value={cardNumber} onChange={handleCardNumberChange} placeholder="**** **** **** ****" onKeyUp={(event) => {
                        const value = event.target.value.replace(/\s/g, '');
                        event.target.value = value.replace(/(\d{4})/g, '$1 ').trim();
                        }} />
                            <input type="text" id="date-expiration" name="date-expiration" pattern="[0-9/]*" maxLength="7" value={formattedDate} onChange={handleDateChange} placeholder="00 / 00"/>
                            <input type="text" id="ccv" name="ccv" pattern="[0-9]*" maxLength="3" placeholder="000"/>
                        </div>
                    </div>
                </div>

                <div className="form-buttons">
                    <button type="submit" id="form-button-return">Annuler</button>
                    <button type="submit" id="form-button-validate">Réserver</button>
                </div>
            
        </div>
    )
}
export default Form;
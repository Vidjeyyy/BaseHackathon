import react from 'react'
import "../styles/form.scss";
function Form () {
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
            <form>
                <div className="form-body">
                    <div className="form-line-1">
                        <label for="prenom">Prénom :</label>
                        <input type="text" id="prenom" name="prenom" required placeholder=""/>
                                        
                        <label for="nom">Nom :</label>
                        <input type="text" id="nom" name="nom" required placeholder=""/>
                    </div>

                    <div className="form-line-2">
                        <label for="mail">E-mail :</label>
                        <input type="email" id="mail" name="mail" required placeholder=""/>
                        
                        <label for="telephone">Téléphone :</label>
                        <input type="tel" id="telephone" name="telephone" required placeholder=""/>
                    </div>

                    <div className="form-line-3">
                        <label for="adresse">Adresse de facturation :</label>
                        <textarea id="adresse" name="adresse" required placeholder=""></textarea>
                    </div>

                    <div className="form-line-4">   
                        <label for="numero-carte">Numéro de carte :</label>
                        <input type="text" id="numero-carte" name="numero-carte" required placeholder=""/>
                        
                        <label for="date-expiration">Date d'expiration :</label>
                        <input type="text" id="date-expiration" name="date-expiration" required placeholder="00 / 00"/>
                        
                        <label for="ccv">CCV :</label>
                        <input type="text" id="ccv" name="ccv" required placeholder="****"/>
                    </div>
                </div>

                <div className="form-submit">
                    <button type="submit" id="form-button">Réservez</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
   

import react from "react";

function Form() {
  return (
    <div className="form-container">
      <div className="form-header">
        <div className="form-title">
          <h2>C'est parti !</h2>
        </div>
        <div className="form-p">
          <p>
            Plus qu'une étape ! Réservez votre meilleur pack vacances dès
            maintenant !
          </p>
        </div>
      </div>

      <div className="form-body">
        <div className="form-line-1">
          <div className="form-line-1-label">
            <label className="prenom" for="prenom">
              Prénom :
            </label>
            <label for="nom">Nom :</label>
          </div>

          <div className="form-line-1-input">
            <input type="text" id="prenom" name="prenom" placeholder="" />
            <input type="text" id="nom" name="nom" placeholder="" />
          </div>
        </div>

        <div className="form-line-2">
          <div className="form-line-2-label">
            <label className="mail" for="mail">
              Mail :
            </label>
            <label className="tel" for="telephone">
              Téléphone :
            </label>
          </div>

          <div className="form-line-2-input">
            <input type="email" id="mail" name="mail" placeholder="***@***" />
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="** ** ** ** **"
            />
          </div>
        </div>

        <div className="form-line-3">
          <div className="form-line-3-label">
            <label className="adress" for="adresse">
              Adresse de facturation :
            </label>
          </div>
          <div className="form-line-3-textarea">
            <textarea id="textarea" name="adresse" placeholder=""></textarea>
          </div>
        </div>

        <div className="form-line-4">
          <div className="form-line-4-label">
            <label className="number" for="numero-carte">
              Numéro de carte :
            </label>
            <label className="expiration" for="date-expiration">
              Date d'expiration :
            </label>
            <label className="ccv" for="ccv">
              CCV :
            </label>
          </div>
          <div className="form-line-4-input">
            <input
              type="text"
              id="numero-carte"
              name="numero-carte"
              placeholder="**** **** **** ****"
            />
            <input
              type="text"
              id="date-expiration"
              name="date-expiration"
              placeholder="00 / 00"
            />
            <input type="text" id="ccv" name="ccv" placeholder="***" />
          </div>
        </div>
      </div>

      <div className="form-buttons">
        <button type="submit" id="form-button-return">
          Annuler
        </button>
        <button type="submit" id="form-button-validate">
          Réserver
        </button>
      </div>
    </div>
  );
}

export default Form;

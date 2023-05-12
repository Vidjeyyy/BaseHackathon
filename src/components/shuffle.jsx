import React, { useState } from "react";
import { dataBase } from "../data/dataBase";
import "./login/randomPage.scss";
import Map from "./map";
import Form from "../components/Form";
import "./map.scss";
import "../styles/form.scss";
import HomePage from "../components/HomePage";

const Shuffle = () => {
  const [randomObject, setRandomObject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [randomIndex, setRandomIndex] = useState(0);
  const [displayMap, setDisplayMap] = useState(false);

  const database = dataBase;

  const handleRandomPick = () => {
    setRandomIndex(Math.floor(Math.random() * database.length));
    const selectedObject = database[randomIndex];
    setRandomObject(selectedObject);
    setCurrentImageIndex(0);
    setDisplayMap(true);
  };

  const handlePreviousImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(currentImageIndex + 2);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex === 2) {
      setCurrentImageIndex(currentImageIndex - 2);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      {!randomObject && <HomePage />}
      {!showForm && (
        <div className="shuffle">
          {randomObject && (
            <div className="carousel">
              <img
                src={randomObject["img" + [currentImageIndex + 1]]}
                alt="Object"
                className="image-container"
              />

              <div className="buttons">
                <button className="btn1" onClick={handlePreviousImage}>
                  Précédent
                </button>
                <button className="btn1" onClick={handleNextImage}>
                  Suivant
                </button>
              </div>
              <div className="description">
                <p>{randomObject.description}</p>
              </div>
            </div>
          )}
        </div>
      )}
      {!showForm && (
        <div className="map">{displayMap && <Map data={randomIndex} />}</div>
      )}

      {showForm && <Form />}

      <div className={displayMap ? "hasard3" : "hasard"}>
        {!showForm && (
          <div className={displayMap ? " hasard2" : "hasard4"}>
            <button className="btn1" onClick={handleRandomPick}>
              "Proposez moi autre chose"
            </button>
          </div>
        )}

        <button
          className={showForm ? "btn3" : "btn2"}
          onClick={handleButtonClick}
        >
          {showForm ? "Annuler" : "Show-Form"}
        </button>
      </div>
    </div>
  );
};

export default Shuffle;

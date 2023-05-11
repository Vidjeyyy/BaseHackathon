import React, { useState } from "react";
import { dataBase } from "../data/dataBase";
import "./login/randomPage.scss";
import Map from "./map";
import Form from "../components/Form"
import "./map.scss";

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
  

  const handleButtonClick = () => {
    setShowForm(!showForm);
  return (
    <div>
      <div className="shuffle">
        {randomObject && (
          <div className="carousel">
            <img
              src={randomObject["img" + [currentImageIndex + 1]]}
              alt="Object"
              className="image-container"
            />

            <button onClick={handlePreviousImage}>Précédent</button>
            <button onClick={handleNextImage}>Suivant</button>
            <p>{randomObject.description}</p>
          </div>
        )}
        <button onClick={handleRandomPick}>"Choisir au hasard"</button>
      </div>
      {displayMap && <Map data={randomIndex} />}
    
    </div>
  );
};
}
export default Shuffle;

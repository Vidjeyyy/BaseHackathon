import React, { useState } from "react";
import { dataBase } from "../../data/dataBase";

const Database = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const database = dataBase;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? database.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === database.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * database.length);
    setCurrentIndex(randomIndex);
  };

  const currentObject = database[currentIndex];

  return (
    <div>
      <div className="buttons">
        <button onClick={handlePrevious}>Précédent</button>
        <button onClick={handleNext}>Suivant</button>
        <button onClick={handleRandom}>Aléatoire</button>
      </div>

      {currentObject && (
        <div>
          <img
            className="image-container"
            src={currentObject.img1}
            alt="Image 1"
          />
          <img
            className="image-container"
            src={currentObject.img2}
            alt="Image 2"
          />
          <img
            className="mage-container"
            src={currentObject.img3}
            alt="Image 3"
          />
        </div>
      )}
    </div>
  );
};

export default Database;

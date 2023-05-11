import React, { useState } from "react";
import { dataBase } from "../data/dataBase";
import "./login/randomPage.scss";

const Shuffle = () => {
  const [randomObject, setRandomObject] = useState(null);
  const [currentImage, setCurrentImage] = useState("img1");

  const database = dataBase;

  const handleRandomPick = () => {
    const randomIndex = Math.floor(Math.random() * database.length);
    const selectedObject = database[randomIndex];
    setRandomObject(selectedObject);
    setCurrentImage("img1"); // Sélectionne automatiquement la première image
  };

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="carousel">
      <button onClick={handleRandomPick}>Choisir au hasard</button>

      {randomObject && (
        <div>
          <img
            src={randomObject[currentImage]}
            alt="Object"
            className="image-container"
          />
          <button onClick={() => handleImageChange("img1")}>Image 1</button>
          <button onClick={() => handleImageChange("img2")}>Image 2</button>
          <button onClick={() => handleImageChange("img3")}>Image 3</button>
        </div>
      )}
    </div>
  );
};

export default Shuffle;

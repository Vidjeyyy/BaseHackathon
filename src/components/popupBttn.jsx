import React from "react";
import "../styles/AllButton.scss";

function PopupBttn(props) {
  const { onClick } = props;

  return (
    <button onClick={onClick} className="popupBttn">FILTRER</button>
  );
}

export default PopupBttn;
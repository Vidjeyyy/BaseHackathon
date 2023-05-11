import React, { useState, useEffect } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { dataBase } from "../data/dataBase";
import "./map.scss";

export default function Map(data) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDnbyLYR4nMER4dm2QSPc_R12tJEIRl7JU",
  });

  const dat = dataBase[data.data];

  if (!isLoaded) return <div>Loading Map ...</div>;
  return (
    <div className="map">
      <GoogleMap
        zoom={18}
        center={dat.coordonnees}
        mapContainerClassName="map-container"
      >
        <MarkerF className="marker" position={dat.coordonnees} />
      </GoogleMap>
    </div>
  );
}

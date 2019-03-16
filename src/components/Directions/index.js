import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyCZC0-eYTojfVEQYTVJc96gSUHBaBgvXJA "
    strokeWidth={3}
    strokeColor="green"
  />
);

export default Directions;
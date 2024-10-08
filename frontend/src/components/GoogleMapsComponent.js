import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapStyles = {
  height: "400px",
  width: "100%",
};

// Default İstanbul koordinatları
const defaultCenter = {
  lat: 41.0082, // İstanbul enlemi
  lng: 28.9784  // İstanbul boylamı
};

const GoogleMapsComponent = ({ location }) => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={location ? location : defaultCenter}
      >
        {location && <Marker position={location} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;

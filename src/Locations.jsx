import React from 'react'
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

import Header1 from './Header1';
import Footer from './footer';
function Locations() {
  // Sample data: Replace with backend fetch
  const [unsafeAreas, setUnsafeAreas] = useState([
    { id: 1, lat: 17.493919, lng: 78.402121, reports: 3, description: "Area unsafe at night" }, 
    { id: 2, lat: 17.501655, lng:78.384655 , reports: 1, description: "Mugging incidents reported" },
    { id: 3, lat:17.498790 , lng: 78.384612, reports: 5, description: "Frequent harassment complaints" },
    { id: 4, lat:17.454391 , lng: 78.428948 , reports: 1, description: "Mugging incidents reported" },
    { id: 5, lat: 17.433757, lng: 78.527138, reports: 20, description: "Frequent harassment complaints" },
    { id: 6, lat: 17.406240, lng: 78.444397, reports: 6, description: "Mugging incidents reported" },
    { id: 7, lat: 17.421309, lng: 78.566277, reports: 5, description: "Frequent harassment complaints" },
    { id: 8, lat:17.359387 , lng:78.460533 , reports: 2, description: "Mugging incidents reported" },
    { id: 9, lat:17.365613 , lng:78.484566 , reports: 8, description: "Frequent harassment complaints" },
   
  ]);

  return (
    <div>
      <Header1 />
      <h2 className="text-center my-3">Alert Zones</h2>
      <MapContainer
       center={[17.385044, 78.486671]} // Set center to Hyderabad
       zoom={12} // Adjust zoom level
       style={{ height: '85vh', width: '100%' }}
      >
        {/* Tile Layer: OpenStreetMap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />

        {/* Markers for Unsafe Areas */}
        {unsafeAreas.map((area) => (
          <CircleMarker
            key={area.id}
            center={[area.lat, area.lng]}
            radius={Math.min(area.reports * 3, 30)} // Scale radius with number of reports
            fillOpacity={0.5}
            color={area.reports > 3 ? 'red' : 'orange'} // Red for high reports, orange for low
          >
            <Popup>
              <h6>{`Reports: ${area.reports}`}</h6>
              <p>{area.description}</p>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
      <Footer />
    </div>
  );
}



export default Locations
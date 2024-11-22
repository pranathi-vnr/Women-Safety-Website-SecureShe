
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SlUserFemale } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from './footer';

import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

function Profile() {
  const obj = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(obj.state);
  const handleSendLocation = () => {
    alert("Emergency location shared successfully!");
    console.log("Location shared with emergency contacts.");
  };

  const handleSOSAlert = () => {
    alert("SOS Alert sent successfully!");
    console.log("SOS alert sent to emergency contacts.");
  };
  function moveToMe() {
    console.log(currentUser); 
    if (currentUser) {
      navigate('/me', { state: { currentUser } }); 
    } else {
      console.error("currentUser is undefined or null");
    }
  }
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
         <header className="bg-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="logo-container d-flex align-items-center">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOXX7pGW3gZ11dNDKle2vfwtNie-DiR3gZbVeOq1k0vd8EY4ZQDaqqNE9E3GdXnvrhno&usqp=CAU"
            alt="logo"
            width={75}
            className="mx-2 rounded-circle border border-warning"
          />
          <h1 className="text-warning mb-0" style={{ fontWeight: 'bold' }}>
            SecureShe
          </h1>
          
        </div>
        <div>
          <button
            className="btn btn-warning mx-2"
            onClick={handleSendLocation}
          >
            Share Location
          </button>
          <button
            className="btn btn-dark mx-2"
            onClick={handleSOSAlert}
          >
            SOS
          </button>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark" style={{ fontWeight: '500' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/locations" className="nav-link text-dark" style={{ fontWeight: '500' }}>
                Alert Zones
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-white rounded"
                style={{
                  backgroundColor: '#f0a500',
                  fontWeight: '600',
                }}
              >
                LogOut
              </Link>
            </li>
            <div className="logo-container d-flex align-items-center mx-5 rounded">
              <button type='button' onClick={moveToMe}>
              <SlUserFemale />
              </button>
                
                <li className="nav-item">
             
            </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
    <main className="container my-4">
      <center>


        
     <button
            className="btn btn-danger mx-3 my-4">
              Mark Unsafe
          </button>
      </center>
       

        <h4 className="mt-5">Your Safety Reports</h4>
        <ul className="list-group">
          <li className="list-group-item">
            Reported "Dark Alley near 5th Street" as Unsafe
          </li>
          <li className="list-group-item">
            Marked "City Mall Parking Lot" as Safe
          </li>
        </ul>

        <section className="my-5">
          <h3>Recent Alerts in Your Area</h3>
          <div className="card shadow-sm p-4">
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
      </MapContainer></div>   
        </section>
      </main>

  <Footer />
       
    </div>
  )
}

export default Profile
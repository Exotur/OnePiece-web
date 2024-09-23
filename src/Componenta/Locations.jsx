import { useState, useEffect } from 'react';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.api-onepiece.com/v2/locates/en')
      .then(response => response.json())
      .then(data => {
        console.log("Abgerufene Daten:", data); 
        setLocations(data);
      })
      .catch(error => console.error('Fehler beim Abrufen der Locations:', error));
  }, []);

  const filteredLocations = locations.filter((location) =>
    location.sea_name && location.sea_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Orte in One Piece</h2>

      <input
        type="text"
        placeholder="Nach Meer suchen"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

  
      <p>{filteredLocations.length} Orte gefunden</p>

      <ul>
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <li key={location.id}>
              <h3>{location.name || 'Unbekannter Ort'}</h3>
              <p>Region: {location.region_name || 'Keine Region angegeben'}</p>
              <p>Römischer Name: {location.roman_name || 'Kein römischer Name angegeben'}</p>
              <p>Meer: {location.sea_name || 'Kein Meer angegeben'}</p>
              <p>Zugehörigkeit: {location.affiliation_name || 'Keine Zugehörigkeit angegeben'}</p>
            </li>
          ))
        ) : (
          <p>Keine Orte gefunden</p>
        )}
      </ul>
    </div>
  );
};

export default Locations;

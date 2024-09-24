import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://api.api-onepiece.com/v2/characters/en/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data); 
      })
      .catch((error) => console.error('Fehler beim Abrufen der Charakterdetails:', error));
  }, [id]);

  if (!character) {
    return <p>Lädt...</p>;
  }

  return (
    <div>
      <h1>{character.name || 'Unbekannter Name'}</h1>
      <p>CrewStatus: {character.job || 'Kein Beruf angegeben'}</p>
      <p>Größe: {character.size || 'Keine Größe angegeben'}</p>
      <p>Geburtstag: {character.birthday || 'Kein Geburtstag angegeben'}</p>
      <p>Alter: {character.age || 'Kein Alter angegeben'}</p>
      <p>Kopfgeld: {character.bounty || 'Keine Belohnung angegeben'}</p>
      <p>Status: {character.status || 'Kein Status angegeben'}</p>

      <h2>Crew</h2>
      <p>Name: {character.crew.name || 'Keine Crew angegeben'}</p>
      <p>Beschreibung: {character.crew.description || 'Keine Beschreibung vorhanden'}</p>
      <p>Status: {character.crew.status || 'Kein Status der Crew angegeben'}</p>
      <p>Crew Member Nr.: {character.crew.number || 'Keine Nummer angegeben'}</p>
      <p>Römischer Name der Crew: {character.crew.roman_name || 'Kein römischer Name angegeben'}</p>
      <p>Gesamtes Kopfgeld der Crew: {character.crew.total_prime || 'Keine Gesamt Prime angegeben'}</p>
     

      {character.fruit ? (
        <>
          <h2>Frucht</h2>
          <p>Name: {character.fruit.name || 'Keine Frucht angegeben'}</p>
          <p>Beschreibung der Frucht: {character.fruit.description || 'Keine Beschreibung der Frucht vorhanden'}</p>
          <p>Typ: {character.fruit.type || 'Kein Typ angegeben'}</p>
          <p>Dateiname: {character.fruit.filename || 'Kein Dateiname angegeben'}</p>
          <p>Römischer Name: {character.fruit.roman_name || 'Kein römischer Name der Frucht angegeben'}</p>
          <p>Technische Datei: {character.fruit.technicalFile || 'Keine technische Datei angegeben'}</p>
        </>
      ) : (
        <p>Keine Teufelsfrucht vorhanden.</p>
      )}
    </div>
  );
};

export default CharacterDetail;
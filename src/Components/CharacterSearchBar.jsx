import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.api-onepiece.com/v2/characters/en')
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error('Fehler beim Abrufen der Characterdaten:', error));
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  const handleCharacterSelect = (character) => {
    navigate(`/characters/${character.id}`);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);
    setShowResults(inputValue.length > 0); 
  };

  return (
    <div>
      <h2>Suche nach Charakteren</h2>
      <input
        type="text"
        placeholder="Nach Charakter suchen"
        value={searchTerm}
        onChange={handleInputChange}
      />

{showResults && (
        <ul>
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character) => (
              <li key={character.id}>
                <button onClick={() => handleCharacterSelect(character)}>
                  {character.name}
                </button>
              </li>
            ))
          ) : (
            <p>Keine Charaktere gefunden</p>
          )}
        </ul>
      )}
    </div>
  );
};


export default SearchBar;

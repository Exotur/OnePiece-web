import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DevilFruits = () => {
  const [fruits, setFruits] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.api-onepiece.com/v2/fruits/en')
      .then((response) => response.json())
      .then((data) => setFruits(data))
      .catch((error) => console.error('Fehler beim Abrufen der Teufelsfrüchte:', error));
  }, []);

  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFruitClick = (fruitId) => {
    navigate(`/fruits/${fruitId}`);
  };

  return (
    <div>
      <h2>Teufelsfrüchte</h2>

     
      <input
        type="text"
        placeholder="Nach Frucht suchen..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredFruits.length > 0 ? (
          filteredFruits.map((fruit) => (
            <li key={fruit.id}>
              <button onClick={() => handleFruitClick(fruit.id)}>
                {fruit.name}
              </button>
            </li>
          ))
        ) : (
          <p>Keine Teufelsfrüchte gefunden</p>
        )}
      </ul>
    </div>
  );
};

export default DevilFruits;

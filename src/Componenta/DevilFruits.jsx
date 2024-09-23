import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DevilFruits = () => {
  const [fruits, setFruits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.api-onepiece.com/v2/fruits/en')
      .then((response) => response.json())
      .then((data) => setFruits(data))
      .catch((error) => console.error('Fehler beim Abrufen der Teufelsfrüchte:', error));
  }, []);

  const handleFruitClick = (fruitId) => {
    navigate(`/fruits/${fruitId}`);
  };

  return (
    <div>
      <h2>Teufelsfrüchte</h2>
      <ul>
        {fruits.length > 0 ? (
          fruits.map((fruit) => (
            <li key={fruit.id}>
              <button onClick={() => handleFruitClick(fruit.id)}>
                {fruit.name}
              </button>
            </li>
          ))
        ) : (
          <p>Lädt...</p>
        )}
      </ul>
    </div>
  );
};

export default DevilFruits;

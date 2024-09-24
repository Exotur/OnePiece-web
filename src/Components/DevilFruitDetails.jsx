import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FruitDetail = () => {
  const { id } = useParams();
  const [fruit, setFruit] = useState(null);

  useEffect(() => {
    fetch(`https://api.api-onepiece.com/v2/fruits/en/${id}`)
      .then((response) => response.json())
      .then((data) => setFruit(data))
      .catch((error) => console.error('Fehler beim Abrufen der Fruchtdetails:', error));
  }, [id]);

  if (!fruit) {
    return <p>Lädt...</p>;
  }

  return (
    <div>
      <h1>{fruit.name}</h1>
      <p>{fruit.type}</p>
      <p>{fruit.description}</p>
      <p>Typ: {fruit.type}</p>
    </div>
  );
};

export default FruitDetail;

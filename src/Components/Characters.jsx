import  { useEffect, useState } from 'react';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch('https://api.api-onepiece.com/v2/characters/en')
      .then(response => {
        if (!response.ok) {
          throw new Error('Netzwerkantwort war nicht ok');
        }
        return response.json();
      })
      .then(data => {
        setCharacters(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>One Piece Charaktere</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
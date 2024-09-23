import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.api-onepiece.com/v2/episodes/en')
      .then((response) => response.json())
      .then((data) => {
        setEpisodes(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching episodes:', error));
  }, []);

  if (loading) {
    return <p>Loading episodes...</p>;
  }

  return (
    <div>
      <h2>Episode Titles</h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Link to={`/episodes/${episode.id}`}>{episode.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodesList;

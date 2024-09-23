import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EpisodeDetail = () => {
  const { id } = useParams(); 
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    fetch(`https://api.api-onepiece.com/v2/episodes/en/${id}`)
      .then((response) => response.json())
      .then((data) => setEpisode(data))
      .catch((error) => console.error('Error fetching episode details:', error));
  }, [id]);

  if (!episode) {
    return <p>Loading episode details...</p>;
  }

  return (
    <div>
      <h1>{episode.title}</h1>
      <p>{episode.description}</p>
      <p>Release Date: {episode.release_date}</p>
    </div>
  );
};

export default EpisodeDetail;

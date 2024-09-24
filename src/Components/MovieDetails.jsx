import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.api-onepiece.com/v2/movies/en/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description || 'No description available'}</p>
    </div>
  );
};

export default MovieDetail;

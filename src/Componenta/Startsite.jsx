import SearchBar from './CharacterSearchBar';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <div>
      <h1>Willkommen zur One Piece App</h1>
      <p>Entdecke die Welt von One Piece!</p>
      
      <Link to="/characters">Zu den Charakteren</Link>
      <SearchBar />

      <Link to="/locations">
        <button >Orte anzeigen</button>
      </Link>

      <Link to="/episodes">
        <button >Episodes</button>
      </Link>

      <Link to="/fruits">
        <button >All Devil Fruits</button>
      </Link>

      <Link to="/movies">
        <button >Movies</button>
      </Link>


      
    </div>
  );
};

export default StartPage;
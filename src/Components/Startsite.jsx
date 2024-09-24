import SearchBar from './CharacterSearchBar';
import { Link } from 'react-router-dom';
import './Startseite.css'; 

const StartPage = () => {
  return (
    <div className="start-page">
      <h1>Willkommen zur One Piece App</h1>
      <p>Entdecke die Welt von One Piece!</p>

     
      <SearchBar />

      <div className="card-container">
        <div className="card">
          <Link to="/characters">
            <img src= "characters..jpg" alt="Characters" className="card-image" />
            <div className="card-content">
              <h3>Charaktere</h3>
              <p>Erfahre mehr über die Charaktere</p>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/locations">
            <img src="/locations.jpg" alt="Locations" className="card-image" />
            <div className="card-content">
              <h3>Orte</h3>
              <p>Entdecke berühmte Orte in One Piece</p>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/episodes">
            <img src="episodes.jpeg" alt="Episodes" className="card-image" />
            <div className="card-content">
              <h3>Folgen</h3>
              <p>Schau dir die Episodenliste an</p>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/fruits">
            <img src="/devil-fruits.jpg" alt="Devil Fruits" className="card-image" />
            <div className="card-content">
              <h3>Teufelsfrüchte</h3>
              <p>Entdecke die Teufelsfrüchte</p>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/movies">
            <img src="movies.jpg" alt="Movies" className="card-image" />
            <div className="card-content">
              <h3>Filme</h3>
              <p>Schau dir die Filme an</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartPage;

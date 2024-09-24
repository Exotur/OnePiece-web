import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './Componenta/Startsite';
import Characters from './Componenta/Characters';
import CharacterDetail from './Componenta/CharcaterDetails';
import Locations from './Componenta/Locations';
import EpisodesList from './Componenta/EpisodesList';
import EpisodeDetail from './Componenta/EpisodeDetail';
import DevilFruits from './Componenta/DevilFruits';
import FruitDetail from './Componenta/DevilFruitDetails';
import Movies from './Componenta/Movies';
import MovieDetail from './Componenta/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetail />} /> 
        <Route path="/locations" element={<Locations />} /> 
        <Route path="/episodes" element={<EpisodesList />} />
        <Route path="/episodes/:id" element={<EpisodeDetail />} />
        <Route path="/fruits" element={<DevilFruits />} />
        <Route path="/fruits/:id" element={<FruitDetail />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

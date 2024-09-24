import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Views/Layout';
import StartPage from './Components/Startsite';
import Characters from './Components/Characters';
import CharacterDetail from './Components/CharcaterDetails';
import Locations from './Components/Locations';
import EpisodesList from './Components/EpisodesList';
import EpisodeDetail from './Components/EpisodeDetail';
import DevilFruits from './Components/DevilFruits';
import FruitDetail from './Components/DevilFruitDetails';
import Movies from './Components/Movies';
import MovieDetail from './Components/MovieDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} /> 
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<CharacterDetail />} />
          <Route path="locations" element={<Locations />} />
          <Route path="episodes" element={<EpisodesList />} />
          <Route path="episodes/:id" element={<EpisodeDetail />} />
          <Route path="fruits" element={<DevilFruits />} />
          <Route path="fruits/:id" element={<FruitDetail />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

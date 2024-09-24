import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/characters">Characters</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/episodes">Episodes</Link></li>
          <li><Link to="/fruits">Devil Fruits</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>
      </nav>
      <div>
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;

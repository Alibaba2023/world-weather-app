import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => (
  <nav>
    <header className="nav-header">
      <div className="header-heading-container">
        <h1 className="header-heading">World Weather</h1>
      </div>
      <NavLink to="/">
        <p className="home-link">Home</p>
      </NavLink>
    </header>
  </nav>
);

export default Header;

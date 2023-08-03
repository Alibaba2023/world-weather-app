import { NavLink } from 'react-router-dom';
import logo from '../assets/clouds-and-sun.png';
import '../App.css';

const Header = () => (
  <nav>
    <header className="nav-header">
      <div className="header-heading-container">
        <img className="logo-image" src={logo} alt={logo} />
        <h1 className="header-heading">The World Weather Application</h1>
      </div>
      <NavLink to="/">
        <p className="home-link">Home</p>
      </NavLink>
    </header>
  </nav>
);

export default Header;

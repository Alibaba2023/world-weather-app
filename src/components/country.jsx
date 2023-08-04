import PropTypes from 'prop-types';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Country = ({
  name, flag, onClick,
}) => (
  <div>
    <NavLink to="/details" onClick={() => onClick(name)}>
      <div className="country-card">
        <img
          src={flag}
          alt="flag"
          className="flag-image"
        />
        <h3 className="country-name">
          Name:
          {name}
        </h3>
      </div>
    </NavLink>
  </div>
);

Country.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Country;

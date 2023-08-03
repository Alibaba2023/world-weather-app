import PropTypes from 'prop-types';
import '../App.css';

const State = ({
  countryState, icon, weatherCondition, temperature, date,
}) => (
  <div className="weather-card">
    <div className="one">
      <h3 className="state-name">{countryState}</h3>
      <h2 className="weather-date">{date}</h2>
    </div>
    <div className="2">
      <h3 className="weather-temp">
        {temperature}
        °C
      </h3>
    </div>
    <div className="box-3">
      <img className="weather-image" src={icon} alt="weatherImage" />
      <p className="weather-condition">{weatherCondition}</p>
    </div>
  </div>
);

export default State;

State.propTypes = {
  countryState: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  weatherCondition: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

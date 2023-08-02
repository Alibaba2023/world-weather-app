import PropTypes from 'prop-types';
import '../App.css';

const State = ({
  province, icon, condition, temp, date,
}) => (
  <div className="weather-card">
    <div className="one">
      <h3 className="state-name">{province}</h3>
      <h2 className="weather-date">{date}</h2>
    </div>
    <div className="2">
      <h3 className="weather-temp">
        {temp}
        °C
      </h3>
    </div>
    <div className="box-3">
      <img className="weather-image" src={icon} alt="weatherImage" />
      <p className="weather-condition">{condition}</p>
    </div>
  </div>
);

export default State;

State.propTypes = {
  province: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
};

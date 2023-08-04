import { useEffect } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getWeather } from '../redux/weather/weatherSlice';
import State from './States';

const Weather = () => {
  const { countryStates, hasError } = useSelector((store) => store.countryStates);
  const { weatherDetails, isLoading } = useSelector((store) => store.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    countryStates.forEach((state) => {
      dispatch(getWeather(state.name));
    });
  }, [dispatch, countryStates]);

  if (hasError) {
    return (
      <h2>Something went wrong</h2>
    );
  }
  if (isLoading) {
    return (
      <h2>Loading...</h2>
    );
  }

  return (
    <>
      <div className="weather-card-container">
        {
          weatherDetails.map((state) => (
            <State
              key={state.id}
              countryState={state.countryState}
              icon={state.icon}
              weatherCondition={state.weatherCondition}
              temperature={state.temperature}
              date={state.date}
            />
          ))
        }
      </div>
    </>
  );
};

export default Weather;

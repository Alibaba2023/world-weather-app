import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../App.css';
import { getCountries } from '../redux/countries/countriesSlice';
import Country from './country';
import { getCountryStates } from '../redux/states/statesSlice';

const Home = () => {
  const dispatch = useDispatch();

  const handleClick = (country) => {
    dispatch(getCountryStates(country));
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const { countries } = useSelector((store) => store.countries);
  return (
    <main>
      <div className="country-card-container">
        {countries.map((country) => (
          <Country
            key={country.name}
            name={country.name}
            flag={country.flag}
            onClick={handleClick}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;

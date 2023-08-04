import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CountryList from './components/countryList';
import Weather from './components/weather';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/details" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import State from '../components/States';

// Sample test data
const stateData = {
  countryState: 'Sample State',
  icon: 'https://example.com/sample-icon.png',
  date: '2023-08-03',
  weatherCondition: 'Sunny',
  temperature: 25,
};

describe('State component', () => {
  it('renders the state name, weather details, and compares to Snapshot', () => {
    const statesComponent = render(
      <MemoryRouter>
        <State
          countryState={stateData.countryState}
          icon={stateData.icon}
          date={stateData.date}
          weatherCondition={stateData.weatherCondition}
          temperature={stateData.temperature}
        />
      </MemoryRouter>,
    );
    expect(statesComponent).toMatchSnapshot();
  });
});

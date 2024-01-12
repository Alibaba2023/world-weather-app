import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Country from '../components/country';

const countryData = {
  name: 'Sample Country',
  flag: 'https://example.com/sample-flag.png',
};

describe('Country component', () => {
  it('renders the country and comparing to Snapshot', () => {
    const countryComponent = render(
      <MemoryRouter>
        <Country name={countryData.name} flag={countryData.flag} onClick={() => { }} />
      </MemoryRouter>,
    );
    expect(countryComponent).toMatchSnapshot();
  });

  it('triggers onClick event when NavLink is clicked', () => {
    const onClickMock = jest.fn();

    render(
      <MemoryRouter>
        <Country name={countryData.name} flag={countryData.flag} onClick={onClickMock} />
      </MemoryRouter>,
    );

    const navLinkElement = screen.getByRole('link');
    fireEvent.click(navLinkElement);
    expect(onClickMock).toHaveBeenCalledWith(countryData.name);
  });

  it('renders the country name and flag image', () => {
    const countryComponent = render(
      <MemoryRouter>
        <Country name={countryData.name} flag={countryData.flag} onClick={() => { }} />
      </MemoryRouter>,
    );
    expect(countryComponent).toMatchSnapshot();
  });
});

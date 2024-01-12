import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  const header = <MemoryRouter><Header /></MemoryRouter>;

  it('renders the header', () => {
    const headerComponent = render(header);
    expect(headerComponent).toMatchSnapshot();
  });

  it('it has a nav element', () => {
    render(header);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('it has a h1 element', () => {
    render(header);
    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();
  });

  it('it has a image element', () => {
    render(header);
    const img = screen.queryByRole('img');
    expect(img).not.toBeInTheDocument();
  });

  it('it does not have a p element', () => {
    render(header);
    const p = screen.queryByRole('paragraph');
    expect(p).not.toBeInTheDocument();
  });

  it('it has a footer element', () => {
    render(header);
    const footer = screen.queryByRole('contentinfo');
    expect(footer).not.toBeInTheDocument();
  });

  it('it has a main element', () => {
    render(header);
    const main = screen.queryByRole('contentinfo');
    expect(main).not.toBeInTheDocument();
  });
});

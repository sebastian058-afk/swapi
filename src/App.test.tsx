import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const logoElement: HTMLElement[] = screen.getAllByAltText('star_wars_logo');
  console.log(logoElement)
  expect(logoElement).toBeVisible()
});

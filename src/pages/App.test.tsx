import React from 'react';
import App from './App';
import { screen } from '@testing-library/react';
import {renderWithWrappers} from 'utils/tests';

test('renders learn base App page', () => {
  renderWithWrappers(<App />);
  const inputElement = screen.getByPlaceholderText('Filter by image name...')
  expect(inputElement).toBeInTheDocument();
});

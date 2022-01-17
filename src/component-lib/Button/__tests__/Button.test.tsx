import React from 'react';
import Button from 'component-lib/Button';
import { screen } from '@testing-library/react';
import {renderWithWrappers} from 'utils/tests';

test('renders button', () => {
  renderWithWrappers(<Button onClick={() => null}>Hallo</Button> );
  const renderedElement = screen.getByText('Hallo')
  expect(renderedElement).toBeInTheDocument();
});

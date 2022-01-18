import React from 'react';
import Dropdown from "component-lib/Dropdown";
import { screen } from '@testing-library/react';
import {renderWithWrappers} from 'utils/tests';

const testOptions = {
  "One": 1,
  "Two": 2
}

test('renders dropdown', () => {
  renderWithWrappers(<Dropdown onSelectValue={() => {return null;}} options={testOptions} />);
  const renderedElement = screen.getByText('Please select an option ⇩')
  expect(renderedElement).toBeInTheDocument();
});

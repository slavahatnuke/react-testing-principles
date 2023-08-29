import React from 'react';
import {render} from '@testing-library/react';
import App from './App';


test('renders no crash', () => {
  render(<App/>);
});

test('renders counter', () => {
  const {getByText} = render(<App/>);
  expect(getByText(/Counter \(10\)/i)).toBeInTheDocument();
  expect(getByText('Counter (0)')).toBeInTheDocument();
});

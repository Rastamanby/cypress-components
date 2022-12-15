import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('Render App', () => {
  render(<App />);
  const input = screen.getByRole('input');

  fireEvent.change(input, { target: { value: '1111' } })
});

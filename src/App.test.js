import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

for (let i = 0; i < 100; i++) {
  test(`render ${i}`, () => {
    render(<App />);
    const input = screen.getByRole('input');

    fireEvent.change(input, { target: { value: '1111' } })
  });
}
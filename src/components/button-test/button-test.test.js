import { render, screen } from '@testing-library/react';
import { ButtonTest } from './button-test';

test('Inactive button', () => {
    render(<ButtonTest isValid={false} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
});

test('Active button', () => {
    render(<ButtonTest isValid={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeEnabled();
});

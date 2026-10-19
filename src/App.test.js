import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('hero order link opens the order page and Cash App store', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('link', { name: 'Order Online' }));

  expect(screen.getByRole('heading', { name: 'Order online' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Open Cash App store' })).toHaveAttribute(
    'href',
    'https://cash.app/$ccscoffeeandcream'
  );
});

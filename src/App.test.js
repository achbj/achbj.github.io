import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio and featured public projects', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Bijaya Acharya' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Selected work' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /MRAgent/i })).toHaveAttribute('href', 'https://github.com/achbj/MrAgent');
  expect(screen.getByText(/OpenAI API/)).toBeInTheDocument();
});

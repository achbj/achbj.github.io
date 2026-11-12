import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio and featured public projects', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Bijaya Acharya' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Selected work' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /MRAgent/i })).toHaveAttribute('href', 'https://github.com/BonzaInsights/MrAgent');
  expect(screen.getByRole('link', { name: /quant-paper-rag/i })).toHaveAttribute('href', 'https://github.com/achbj/quant-paper-rag');
  expect(screen.getByText(/Residence permit/)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /ScaleFit/ })).toBeInTheDocument();
});

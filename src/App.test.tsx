import { render, screen } from '@testing-library/react';
import App from './App';

// Simple test to check that the main title renders
it('muestra el título DORDRONE en la página', () => {
  render(<App />);
  expect(screen.getByText('DORDRONE')).toBeInTheDocument();
});
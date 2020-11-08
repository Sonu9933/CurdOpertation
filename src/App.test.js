import { render, screen } from '@testing-library/react';
import App from './App';

test('Check View Employee Page', () => {
  render(<App />);
      const H1Heading = screen.getByText(/List of Employees/i);
      expect(H1Heading).toBeInTheDocument();
});

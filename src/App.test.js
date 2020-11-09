import { render, screen } from '@testing-library/react';
import App from './App';
import { EmployeeContextProvider } from "./Component/Context/EmployeeContext";

test('Check View Employee Page', () => {
  render(<EmployeeContextProvider>
          <App />
        </EmployeeContextProvider>);
      const H1Heading = screen.getByText(/List of Employees/i);
      expect(H1Heading).toBeInTheDocument();
});

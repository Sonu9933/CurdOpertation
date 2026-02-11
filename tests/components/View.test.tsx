import { render, screen, fireEvent } from '@testing-library/react';
import { View } from '../../src/Component/Operation/View';
import { CarContext } from '../../src/Component/Context/CarContext';
import { MemoryRouter } from 'react-router-dom';
import { CarInitialState } from '../../src/Component/Context/InitialState'

describe('View component', () => {
  const mockDispatch = vi.fn();

  const mockStateWithCars: CarInitialState = {
    cars: [
      {
        Id: 1,
        Company: 'Toyota',
        Model: 'Camry',
        ManufactureDate: '2020-01-01',
      },
      {
        Id: 2,
        Company: 'Honda',
        Model: 'Accord',
        ManufactureDate: '2019-05-15',
      },
    ],
    carResult: []
  };

  const renderComponent = (state: CarInitialState) => {
    return render(
      <MemoryRouter>
        <CarContext.Provider value={{ state, dispatch: mockDispatch }}>
          <View />
        </CarContext.Provider>
      </MemoryRouter>
    );
  };

  it('renders car data correctly', () => {
    renderComponent(mockStateWithCars);

    // Check heading
    expect(screen.getByText('Cars')).toBeInTheDocument();

    // Check table headers
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Model')).toBeInTheDocument();

    // Check car data
    expect(screen.getByText('Toyota')).toBeInTheDocument();
    expect(screen.getByText('Camry')).toBeInTheDocument();
    expect(screen.getByText('2020-01-01')).toBeInTheDocument();

    expect(screen.getByText('Honda')).toBeInTheDocument();
    expect(screen.getByText('Accord')).toBeInTheDocument();
    expect(screen.getByText('2019-05-15')).toBeInTheDocument();

    // Check Edit and Delete buttons
    const editButtons = screen.getAllByText('Edit');
    expect(editButtons.length).toBe(2);

    const deleteButtons = screen.getAllByText('Delete');
    expect(deleteButtons.length).toBe(2);
  });

  it('handles empty car list', () => {
    renderComponent(new CarInitialState());

    expect(screen.getByText('OOPS! No data found.')).toBeInTheDocument();
  });

  it('dispatches LOOK_CAR and REMOVE_CAR actions on button clicks', () => {
    renderComponent(mockStateWithCars);

    const editButton = screen.getAllByText('Edit')[0];
    const deleteButton = screen.getAllByText('Delete')[0];

    // Click Edit button
    fireEvent.click(editButton);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'LOOK_CAR',
      payload: 1,
    });

    // Click Delete button
    fireEvent.click(deleteButton);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_CAR',
      payload: 1,
    });
  });
});
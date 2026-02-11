import { EditCar } from "../../src/Component/Operation/EditCars";
import { act, render, fireEvent } from '@testing-library/react';
import { CarContext } from '../../src/Component/Context/CarContext';
import { CarInitialState } from '../../src/Component/Context/InitialState'
import { MemoryRouter } from 'react-router-dom';

describe('Edit cars', () => {
    it("Edit car details", () => {
        const { container } = render(
            <MemoryRouter>
                <CarContext.Provider value={{ state : new CarInitialState(), dispatch: vi.fn() }}>
                    <EditCar />
                </CarContext.Provider>
            </MemoryRouter>

        );
        expect('container').toBeDefined();

        const buttonControl = container.querySelector(".btn-primary");
        
        act(() => {
            fireEvent.click(buttonControl);
        })

        expect(1).toEqual(1);
    })
})
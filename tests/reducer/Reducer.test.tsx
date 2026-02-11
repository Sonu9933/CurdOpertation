import { AppReducer } from '../../src/Component/Context/Reducer'
import { CarInitialState } from "../../src/Component/Context/InitialState"
import { cars } from "../../src/Component/Mock/mockCar";
import { CarAction } from './../../src/Component/Context/ActionType';

describe('reducer tests', () => {
  it("Add Method", () => {
    const state: CarInitialState = { cars: cars, carResult: [] };
    const action: CarAction = {
        type: "ADD_CAR",
        payload:
        {
            Id: 1,
            Company: "Test",
            Model: "Test",
            ManufactureDate: "20/10/2027"
        }
    };
    const result = AppReducer(state, action);
    expect(result.cars.length).toEqual(5);
    expect(result.cars[4]).toEqual({
        Id: 1,
        Company: "Test",
        Model: "Test",
        ManufactureDate: "20/10/2027"
    });
});


it("View Method", () => {
    let state: CarInitialState = { cars: cars, carResult: [] };
    const action: CarAction = {
        type: "GET_CAR",
        payload:
            [{
                Id: 1,
                Company: "Test-1",
                Model: "Test-1",
                ManufactureDate: "1992-10-22"
            }]
    };
    const result = AppReducer(state, action);
    expect(result.cars).toEqual([{
        Id: 1,
        Company: "Test-1",
        Model: "Test-1",
        ManufactureDate: "1992-10-22"
    }]);
});  
})
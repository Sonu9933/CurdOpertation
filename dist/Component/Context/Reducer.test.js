import { AppReducer } from "./Reducer";
import { cars } from "../Mock/mockCar";
test("Add Method", function () {
    var state = { cars: cars, carResult: [] };
    var action = {
        type: "ADD_CAR",
        payload: {
            Id: 1,
            Company: "Test",
            Model: "Test",
            ManufactureDate: "20/10/2027"
        }
    };
    var result = AppReducer(state, action);
    expect(result.cars.length).toEqual(5);
    expect(result.cars[4]).toEqual({
        Id: 1,
        Company: "Test",
        Model: "Test",
        ManufactureDate: "20/10/2027"
    });
});
test("View Method", function () {
    var state = { cars: cars, carResult: [] };
    var action = {
        type: "GET_CAR",
        payload: {
            Id: 1,
            Company: "Test-1",
            Model: "Test-1",
            ManufactureDate: "1992-10-22"
        }
    };
    var result = AppReducer(state, action);
    expect(result.cars).toEqual({
        Id: 1,
        Company: "Test-1",
        Model: "Test-1",
        ManufactureDate: "1992-10-22"
    });
});

import { AppReducer } from "../Context/Reducer"
import { ADD,VEIW } from './ActionType';

test("Add Method", () => {
    const state = { employees : []};
    const action = {
        type: ADD,
        payload:
        {
            FirstName: "",
            LastName: "",
            DOB: ""
        }
    };
    const result = AppReducer(state, action);
    expect(result.employees.length).toEqual(1);
    expect(result.employees[0]).toEqual( {
        FirstName: "",
        LastName: "",
        DOB: ""
    });
});


test("VEIW Method", () => {
    const state = { employees : []};
    const action = {
        type: VEIW,
        payload:
        [{
            FirstName: "Test-1",
            LastName: "Test-1",
            DOB: "1992-10-22"
        }]
    };
    const result = AppReducer(state, action);
    expect(result.employees).toEqual( [{
        FirstName: "Test-1",
        LastName: "Test-1",
        DOB: "1992-10-22"
    }]);
});
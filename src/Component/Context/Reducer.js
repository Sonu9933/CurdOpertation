import { ADD,DELETE,UPDATE,VEIW,SEARCH } from "./ActionType";

export const AppReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        ...state,
        employees: [...state.employees, payload]
      }

    case VEIW:
      return {
        ...state,
        employees: payload
      }

    case UPDATE:
      const updatedEmployee =  payload;

      const updatedEmployees = state.employees.map(employee => {
        if (employee.EmpId === updatedEmployee.EmpId) {
          return updatedEmployee;
        }
        return employee;
      });

      return {
        ...state,
        employees: updatedEmployees
      };

    case DELETE:
      return {
        ...state,
        employees: state.employees.filter(
          employee => employee.EmpId !== payload
        )
      };

      case SEARCH:
        return {
          ...state,
          searchResult: state.employees.filter(emp => emp.FirstName.includes(payload) || emp.LastName.includes(payload))
        }

    default:
      throw new Error('Invalid Action Type');
  }
};

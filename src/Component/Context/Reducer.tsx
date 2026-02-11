import { CarInitialState } from './InitialState';
import { CarAction } from './ActionType';

export const AppReducer = (state: CarInitialState, action: CarAction) => {
  switch (action.type) {
    case "ADD_CAR":
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }

    case "GET_CAR":
      return {
        ...state,
        cars: action.payload
      }

    case "LOOK_CAR":
      const carId = action.payload;

      const newCars = state.cars.map((car) => {
        if (car.Id === carId) {
          return car;
        }
        return car;
      });

      return {
        ...state,
        cars: newCars
      };

    case "UPDATE_CAR":
      const updatedCarList = state.cars.map((car) => {
        if (car.Id === action.payload.Id) {
          return action.payload;
        }
        return car;
      });

      return {
        ...state,
        cars: updatedCarList
      };

    case "REMOVE_CAR":
      return {
        ...state,
        cars: state.cars.filter(c => c.Id !== action.payload)
      };

    case "SEARCH_CAR":
      return {
        ...state,
        carResult: state
          .cars
          .filter((car) =>
            car.Company.includes(action.payload) ||
            car.Model.includes(action.payload))
      }

    default:
      throw new Error('Invalid Action Type');
  }
};

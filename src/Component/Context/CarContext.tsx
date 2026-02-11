import { createContext, useReducer, ReactNode } from "react";
import { CarInitialState } from "./InitialState";
import {AppReducer} from "./Reducer"
import {CarAction} from "./ActionType";

type CarContextProps = {
  state: CarInitialState;
  dispatch: React.Dispatch<CarAction>;
}

export const CarContext = createContext<CarContextProps>(undefined);

export const CarContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, new CarInitialState());

  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
};

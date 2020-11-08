import React, { createContext, useReducer } from "react";
import { AppReducer } from "./Reducer";
import { InitialState } from "./InitialState";

export const EmployeeContext = createContext(InitialState);

export const EmployeeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  return (
    <EmployeeContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
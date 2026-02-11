import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useReducer } from "react";
import { CarInitialState } from "./InitialState";
import { AppReducer } from "./Reducer";
export var CarContext = createContext(undefined);
export var CarContextProvider = function (_a) {
    var children = _a.children;
    var _b = useReducer(AppReducer, new CarInitialState()), state = _b[0], dispatch = _b[1];
    return (_jsx(CarContext.Provider, { value: { state: state, dispatch: dispatch }, children: children }));
};

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddCar } from './Component/Operation/AddCar';
import { View } from './Component/Operation/View';
import { EditCar } from './Component/Operation/EditCars';
import { SearchCar } from './Component/Operation/Search';
import { CarContext } from "./Component/Context/CarContext";
import { FetctMockCars } from "./Component/Mock/FetchMockCars";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    var dispatch = useContext(CarContext).dispatch;
    useEffect(function () {
        dispatch({
            type: "GET_CAR",
            payload: FetctMockCars()
        });
    }, [dispatch]);
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(View, {}) }), _jsx(Route, { path: "/AddCar", element: _jsx(AddCar, {}) }), _jsx(Route, { path: "/SearchCar", element: _jsx(SearchCar, {}) }), _jsx(Route, { path: "/EditCar/:id", element: _jsx(EditCar, {}) })] }) }));
}
export default App;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { CarContext } from "../Context/CarContext";
import { Link } from "react-router-dom";
export var View = function () {
    var _a;
    var _b = useContext(CarContext), state = _b.state, dispatch = _b.dispatch;
    return (_jsxs("div", { id: "something", className: "container p-4", children: [_jsx("h1", { className: "text-center display-4 py-2 text-truncate", children: "Cars" }), _jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Company" }), _jsx("th", { children: "Model" }), _jsx("th", { children: "Manufacture Date" }), _jsx("th", { children: "Action" })] }) }), _jsx("tbody", { children: ((_a = state.cars) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (state.cars.map(function (car, i) { return (_jsxs("tr", { children: [_jsx("td", { children: car.Company }), _jsx("td", { children: car.Model }), _jsx("td", { children: car.ManufactureDate }), _jsxs("td", { children: [_jsx(Link, { to: "/EditCar/".concat(car.Id), children: _jsx("button", { onClick: function () { return dispatch({
                                                    type: "LOOK_CAR",
                                                    payload: car.Id
                                                }); }, className: "btn btn-link p-0 align-top", children: "Edit" }) }), " |", _jsx("button", { onClick: function () { return dispatch({
                                                type: "REMOVE_CAR",
                                                payload: car.Id
                                            }); }, className: "btn btn-link p-0 align-top", children: "Delete" })] })] }, i)); })) : (_jsx("tr", { children: _jsx("td", { children: " OOPS! No data found." }) })) })] }), _jsx("b", { children: "Operation :" }), _jsx(Link, { to: "/SearchCar", children: " Search " }), "| ", _jsx(Link, { to: "/AddCar", children: " Add" })] }));
};

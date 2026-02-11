import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { CarContext } from "../Context/CarContext";
import { Link } from "react-router-dom";
export var SearchCar = function () {
    var _a;
    var _b = useContext(CarContext), state = _b.state, dispatch = _b.dispatch;
    return (_jsxs("div", { className: "container", children: [_jsx("div", { className: "row", children: _jsxs("div", { className: "col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4", children: [_jsx("h1", { className: "display-4 py-2 text-truncate", children: "Search Car" }), _jsx("div", { className: "px-2", children: _jsx("form", { action: "", className: "justify-content-center", children: _jsxs("div", { className: "form-group", children: [_jsx("label", { className: "sr-only", children: "Company/Model Name" }), _jsx("input", { type: "text", className: "form-control", onChange: function (e) { return dispatch({
                                                type: "SEARCH_CAR",
                                                payload: e.target.value
                                            }); }, placeholder: "Start typing" })] }) }) })] }) }), _jsx("h4", { className: "py-2 text-truncate", children: "Search Result" }), _jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Company" }), _jsx("th", { children: "Model" }), _jsx("th", { children: "Manufacture Date" })] }) }), _jsx("tbody", { children: ((_a = state.carResult) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (state.carResult.map(function (car, i) { return (_jsxs("tr", { children: [_jsx("td", { children: car.Company }), _jsx("td", { children: car.Model }), _jsx("td", { children: car.ManufactureDate })] }, i)); })) : (_jsx("tr", { children: "OOPS! No data. Start typing in search field." })) })] }), _jsx(Link, { to: "/", children: "Cancel" })] }));
};

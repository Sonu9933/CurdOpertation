var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useContext, useEffect } from "react";
import { CarContext } from "../Context/CarContext";
import { useNavigate, Link } from "react-router-dom";
export var EditCar = function (id) {
    var navigate = useNavigate();
    var _a = useContext(CarContext), state = _a.state, dispatch = _a.dispatch;
    var _b = useState({
        Id: null,
        Company: "",
        Model: "",
        ManufactureDate: ""
    }), selectedCar = _b[0], setSeletedCar = _b[1];
    var Id = id;
    useEffect(function () {
        var carId = Id;
        var selectedCar = state.cars.find(function (car) { return car.Id === carId; });
        setSeletedCar(selectedCar);
    }, [Id, state.cars]);
    var onSubmit = function () {
        dispatch({
            type: "UPDATE_CAR",
            payload: selectedCar
        });
        navigate("/");
    };
    var handleOnChange = function (userKey, value) {
        var _a;
        return setSeletedCar(__assign(__assign({}, selectedCar), (_a = {}, _a[userKey] = value, _a)));
    };
    return (_jsx("div", { className: "container", children: _jsx("div", { className: "row", children: _jsxs("div", { className: "col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4", children: [_jsx("h1", { className: "display-4 py-2 text-truncate", children: "Update Car" }), _jsx("div", { className: "px-2", children: _jsxs("form", { action: "", className: "justify-content-center", children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { className: "sr-only", children: "Company" }), _jsx("input", { type: "text", className: "form-control", value: selectedCar === null || selectedCar === void 0 ? void 0 : selectedCar.Company, onChange: function (e) { return handleOnChange("Company", e.target.value); }, required: true, placeholder: "Company" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { className: "sr-only", children: "Model" }), _jsx("input", { type: "text", className: "form-control", value: selectedCar === null || selectedCar === void 0 ? void 0 : selectedCar.Model, onChange: function (e) { return handleOnChange("Model", e.target.value); }, required: true, placeholder: "Model" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { className: "sr-only", children: "Manufacture Date" }), _jsx("input", { type: "date", className: "form-control", value: selectedCar === null || selectedCar === void 0 ? void 0 : selectedCar.ManufactureDate, onChange: function (e) { return handleOnChange("ManufactureDate", e.target.value); }, required: true, placeholder: "DD/MM/YYYY" })] }), _jsx("button", { type: "submit", className: "btn btn-primary btn-lg", onClick: onSubmit, children: "Update" }), _jsx("br", {}), _jsx("br", {}), _jsx(Link, { to: "/", children: "Cancel" })] }) })] }) }) }));
};

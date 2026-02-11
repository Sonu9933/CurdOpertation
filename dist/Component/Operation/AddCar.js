import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useContext } from "react";
import { CarContext } from "../Context/CarContext";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
export var AddCar = function () {
    var _a = useContext(CarContext), state = _a.state, dispatch = _a.dispatch;
    var _b = useState(""), Company = _b[0], setCompany = _b[1];
    var _c = useState(""), Model = _c[0], setModel = _c[1];
    var _d = useState(""), ManufactureDate = _d[0], setManufactureDate = _d[1];
    var navigate = useNavigate();
    var onSubmit = function () {
        var car = {
            Id: state.cars.length + 1,
            Company: Company,
            Model: Model,
            ManufactureDate: ManufactureDate
        };
        dispatch({
            type: "ADD_CAR",
            payload: car
        });
        navigate("/");
    };
    return (_jsx("div", { className: "container", children: _jsx("div", { className: "row", children: _jsxs("div", { className: "col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4", children: [_jsx("h1", { className: "display-4 py-2 text-truncate", children: "Add New Car" }), _jsx("div", { className: "px-2", children: _jsx(Formik, { initialValues: {
                                company: "",
                                model: "",
                                ManufactureDate: ""
                            }, validate: function (values) {
                                var errors = {};
                                if (values.company === "") {
                                    //errors.firstName = "First name is required";
                                }
                                else {
                                    setCompany(values.company);
                                }
                                if (values.model === "") {
                                    //errors.lastName = "Last name is required";
                                }
                                else {
                                    setModel(values.model);
                                }
                                if (values.ManufactureDate === "") {
                                    //errors.DOB = "DOB is required";
                                }
                                else {
                                    setManufactureDate(values.ManufactureDate);
                                }
                                return errors;
                            }, onSubmit: onSubmit, children: function (_a) {
                                var errors = _a.errors, touched = _a.touched;
                                return (_jsxs(Form, { className: "justify-content-center", children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { className: "sr-only", children: "Company" }), _jsx(Field, { name: "company", type: "text", className: "form-control ".concat(touched.company && errors.company ? "is-invalid" : ""), placeholder: "Company Name" }), _jsx(ErrorMessage, { name: "company", component: "div", className: "invalid-feedback text-left" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { className: "sr-only", children: "Model" }), _jsx(Field, { name: "model", type: "text", className: "form-control ".concat(touched.model && errors.model ? "is-invalid" : ""), placeholder: "Model" }), _jsx(ErrorMessage, { name: "model", component: "div", className: "invalid-feedback text-left" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { className: "sr-only", children: "Manufacture Date" }), _jsx(Field, { name: "ManufactureDate", type: "date", className: "form-control ".concat(touched.ManufactureDate && errors.ManufactureDate ? "is-invalid" : ""), placeholder: "DD/MM/YYYY" }), _jsx(ErrorMessage, { name: "ManufactureDate", component: "div", className: "invalid-feedback text-left" })] }), _jsx("button", { type: "submit", className: "btn btn-primary btn-lg", children: "Add" }), _jsx("br", {}), _jsx("br", {}), _jsx(Link, { to: "/", children: "Cancel" })] }));
                            } }) })] }) }) }));
};

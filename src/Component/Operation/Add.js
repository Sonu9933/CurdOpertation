import React, { useState, useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";
import { useHistory, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ADD } from "../Context/ActionType";

export const AddEmployee = () => {

    const { state,dispatch } = useContext(EmployeeContext);
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [DOB, setDOB] = useState("");
    let history = useHistory();

    const onSubmit = () => {
        const newEmployee = {
            EmpId: state.employees.length + 1,
            FirstName,
            LastName,
            DOB
        };

        dispatch({
            type: ADD,
            payload: newEmployee
        });

        history.push("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    <h1 className="display-4 py-2 text-truncate">Add Employee</h1>
                    <div className="px-2">
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                DOB: ""
                            }}
                            validate={values => {
                                let errors = {};
                                if (values.firstName === "") {
                                    errors.firstName = "First name is required";
                                }
                                else {
                                    setFirstName(values.firstName)
                                }
                                if (values.lastName === "") {
                                    errors.lastName = "Last name is required";
                                }
                                else {
                                    setLastName(values.lastName)
                                }
                                if (values.DOB === "") {
                                    errors.DOB = "DOB is required";
                                }
                                else {
                                    setDOB(values.DOB)
                                }
                                return errors;
                            }}
                            onSubmit={onSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className="justify-content-center">
                                    <div className="form-group">
                                        <label className="sr-only">First Name</label>
                                        <Field
                                            name="firstName"
                                            type="text"
                                            className={`form-control ${touched.firstName && errors.firstName ? "is-invalid" : ""}`}
                                            placeholder="First Name" />
                                        <ErrorMessage name="firstName" component="div" className="invalid-feedback text-left"></ErrorMessage>

                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only">Last Name</label>
                                        <Field
                                            name="lastName"
                                            type="text"
                                            className={`form-control ${touched.lastName && errors.lastName ? "is-invalid" : ""}`}
                                            placeholder="Last Name" />
                                        <ErrorMessage name="lastName" component="div" className="invalid-feedback text-left"></ErrorMessage>
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only">DOB</label>
                                        <Field
                                            name="DOB"
                                            type="date"
                                            className={`form-control ${touched.DOB && errors.DOB ? "is-invalid" : ""}`}
                                            placeholder="DD/MM/YYYY" />
                                        <ErrorMessage name="DOB" component="div" className="invalid-feedback text-left"></ErrorMessage>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Add
                                    </button>
                                    <br /><br /><Link to="/">Cancel</Link>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};
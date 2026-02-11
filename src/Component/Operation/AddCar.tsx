import { useState, useContext } from "react";
import { CarContext } from "../Context/CarContext";
import { useNavigate , Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const AddCar : React.FunctionComponent = () => {

    const { state, dispatch } = useContext(CarContext);
    const [Company, setCompany] = useState("");
    const [Model, setModel] = useState("");
    const [ManufactureDate, setManufactureDate] = useState("");
    let navigate = useNavigate();

    const onSubmit = () => {
        const car = {
            Id: state.cars.length + 1,
            Company,
            Model,
            ManufactureDate
        };

        dispatch({
            type: "ADD_CAR",
            payload: car
        });

        navigate("/");
    };

    return (
        <div className="container">
            <div className="row border">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-4">
                    <h1 className="display-4 py-2 text-truncate">Add New Car</h1>
                    <div className="px-2">
                        <Formik
                            initialValues={{
                                company: "",
                                model: "",
                                ManufactureDate: ""
                            }}
                            validate={values => {
                                let errors = {};
                                if (values.company === "") {
                                    //errors.firstName = "First name is required";
                                }
                                else {
                                    setCompany(values.company)
                                }
                                if (values.model === "") {
                                    //errors.lastName = "Last name is required";
                                }
                                else {
                                    setModel(values.model)
                                }
                                if (values.ManufactureDate === "") {
                                    //errors.DOB = "DOB is required";
                                }
                                else {
                                    setManufactureDate(values.ManufactureDate)
                                }
                                return errors;
                            }}
                            onSubmit={onSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className="justify-content-center">
                                    <div className="form-group p-2">
                                        <label className="sr-only ">Company</label>
                                        <Field
                                            name="company"
                                            type="text"
                                            className={`form-control ${touched.company && errors.company ? "is-invalid" : ""}`}
                                            placeholder="Company Name" />
                                        <ErrorMessage name="company" component="div" className="invalid-feedback text-left"></ErrorMessage>

                                    </div>
                                    <div className="form-group p-2">
                                        <label className="sr-only">Model</label>
                                        <Field
                                            name="model"
                                            type="text"
                                            className={`form-control ${touched.model && errors.model ? "is-invalid" : ""}`}
                                            placeholder="Model" />
                                        <ErrorMessage name="model" component="div" className="invalid-feedback text-left"></ErrorMessage>
                                    </div>
                                    <div className="form-group p-2">
                                        <label className="sr-only">Manufacture Date</label>
                                        <Field
                                            name="ManufactureDate"
                                            type="date"
                                            className={`form-control ${touched.ManufactureDate && errors.ManufactureDate ? "is-invalid" : ""}`}
                                            placeholder="DD/MM/YYYY" />
                                        <ErrorMessage name="ManufactureDate" component="div" className="invalid-feedback text-left"></ErrorMessage>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg p-l-2">
                                        Add
                                    </button>   <Link to="/">Cancel</Link>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};
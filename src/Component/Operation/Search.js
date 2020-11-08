import React, { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";
import { Link } from "react-router-dom";
import { SEARCH } from "../Context/ActionType";

export const SearchEmployee = () => {
    const { state, dispatch } = useContext(EmployeeContext);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    <h1 className="display-4 py-2 text-truncate">Search Employee</h1>
                    <div className="px-2">
                        <form action="" className="justify-content-center">
                            <div className="form-group">
                                <label className="sr-only">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={e => dispatch({
                                        type: SEARCH,
                                        payload: e.target.value
                                    })}
                                    placeholder="Start typing" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <h4 className="py-2 text-truncate">Search Result</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Emp ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {state.searchResult?.length > 0 ? (
                        state.searchResult.map((employee, i) => (
                            <tr key={i}>
                                <td>{employee.EmpId}</td>
                                <td>{employee.FirstName}</td>
                                <td>{employee.LastName}</td>
                                <td>{employee.DOB}</td>
                            </tr>
                        ))
                    ) : (

                            <tr>
                                OOPS! No data. Start typing in search field.
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link to="/">Cancel</Link>
        </div>
    );
};
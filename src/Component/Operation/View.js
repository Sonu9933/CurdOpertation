import React, { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";
import { Link } from "react-router-dom";
import { DELETE, UPDATE } from "../Context/ActionType";

export const Employees = () => {
    const { state, dispatch } = useContext(EmployeeContext);

    return (
        <div className="container p-4">
            <h1 className="text-center display-4 py-2 text-truncate">List of Employees</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Emp ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.employees?.length > 0 ? (
                        state.employees.map((employee, i) => (
                            <tr key={i}>
                                <td>{employee.EmpId}</td>
                                <td>{employee.FirstName}</td>
                                <td>{employee.LastName}</td>
                                <td>{employee.DOB}</td>
                                <td>
                                    <Link to={`/EditEmployee/${employee.EmpId}`}>
                                        <button
                                            onClick={() => dispatch({
                                                type: UPDATE,
                                                payload: employee.EmpId
                                            })}
                                            className="btn btn-link p-0 align-top"
                                        >
                                            Edit
                                            </button>
                                    </Link> |
                                    <button
                                        onClick={() => dispatch({
                                            type: DELETE,
                                            payload: employee.EmpId
                                        })}
                                        className="btn btn-link p-0 align-top"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                            <tr>
                                <td> OOPS! No data found.</td>
                            </tr>
                        )}
                </tbody>
            </table>
            <b>Operation :</b>
            <Link to="/SearchEmployee"> Search </Link>
             | <Link to="/AddEmployee"> Add</Link>
        </div>
    );
};
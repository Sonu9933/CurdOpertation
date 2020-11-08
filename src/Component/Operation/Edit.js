import React, { useState, useContext, useEffect } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";
import { useHistory, Link } from "react-router-dom";
import { UPDATE } from "../Context/ActionType";

export const EditEmployee = route => {

  let history = useHistory();
  const { state, dispatch } = useContext(EmployeeContext);
  
  const [selectedUser, setSeletedUser] = useState({
    EmpId: null,
    FirstName: "",
    LastName: "",
    DOB: ""
  });

  const Id = route.match.params.id;

  useEffect(() => {
    const employeeId = Id;
    const selectedUser = state.employees.find(emp => emp.EmpId === parseInt(employeeId));
    setSeletedUser(selectedUser);
  },[Id, state.employees]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: UPDATE,
      payload: selectedUser
  });

  history.push("/");
  };

  const handleOnChange = (userKey, value) =>
    setSeletedUser({ ...selectedUser, [userKey]: value });

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
          <h1 className="display-4 py-2 text-truncate">Update Employee</h1>
          <div className="px-2">
            <form action="" className="justify-content-center">
              <div className="form-group">
                <label className="sr-only">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedUser?.FirstName}
                  onChange={e => handleOnChange("FirstName", e.target.value)}
                  validate
                  placeholder="First Name" />
              </div>
              <div className="form-group">
                <label className="sr-only">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedUser?.LastName}
                  onChange={e => handleOnChange("LastName", e.target.value)}
                  required
                  placeholder="Last Name" />
              </div>
              <div className="form-group">
                <label className="sr-only">DOB</label>
                <input
                  type="date"
                  className="form-control"
                  value={selectedUser?.DOB}
                  onChange={e => handleOnChange("DOB", e.target.value)}
                  required
                  placeholder="DD/MM/YYYY" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" onClick={onSubmit}>
                Update
                    </button>
              <br /><br /><Link to="/">Cancel</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
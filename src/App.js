import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AddEmployee } from './Component/Operation/Add';
import { Employees } from './Component/Operation/View';
import { EditEmployee } from './Component/Operation/Edit';
import { SearchEmployee } from './Component/Operation/Search';
import { EmployeeContext } from "./Component/Context/EmployeeContext";
import { fetctMockEmployee } from "./Component/Mock/FetchMockEmployee";
import { VEIW } from "./Component/Context/ActionType";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { dispatch } = useContext(EmployeeContext);

  useEffect(() => {
    dispatch({
      type: VEIW,
      payload: fetctMockEmployee()
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Employees} />
        <Route exact path="/AddEmployee" component={AddEmployee} />
        <Route exact path="/SearchEmployee" component={SearchEmployee} />
        <Route exact path="/EditEmployee/:id" component={EditEmployee} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

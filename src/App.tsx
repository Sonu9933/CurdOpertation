import { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddCar } from './Component/Operation/AddCar';
import { View } from './Component/Operation/View';
import { EditCar } from './Component/Operation/EditCars';
import { SearchCar } from './Component/Operation/Search';
import { CarContext } from "./Component/Context/CarContext";
import { FetctMockCars } from "./Component/Mock/FetchMockCars";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { dispatch } = useContext(CarContext);

  useEffect(() => {
    dispatch({
      type: "GET_CAR",
      payload: FetctMockCars()
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View></View>} />
        <Route path="/AddCar" element={<AddCar></AddCar>} />
        <Route path="/SearchCar" element={<SearchCar></SearchCar>} />
        <Route path="/EditCar/:id" element={<EditCar></EditCar>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

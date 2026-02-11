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
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-primary text-white p-3">
        <div className="container">
          <h1 className="mb-0">Cars</h1>
        </div>
      </header>
      <main className="my-4 container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<View></View>} />
            <Route path="/AddCar" element={<AddCar></AddCar>} />
            <Route path="/SearchCar" element={<SearchCar></SearchCar>} />
            <Route path="/EditCar/:id" element={<EditCar></EditCar>} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer className="bg-primary text-white mt-auto py-3">
        <div className="container text-center">
          <p className="mb-0">&copy; 2026 Car Website. All rights reserved.</p>
        </div>
      </footer>
    </div>


  );
}

export default App;

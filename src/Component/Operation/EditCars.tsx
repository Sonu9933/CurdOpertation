import { useState, useContext, useEffect } from "react";
import { CarContext } from "../Context/CarContext";
import { useNavigate, Link, useParams} from "react-router-dom";

export const EditCar: React.FunctionComponent = () => {

  let navigate = useNavigate();
   const params = useParams<{ id: string }>();
  const { state, dispatch } = useContext(CarContext);

  const [selectedCar, setSeletedCar] = useState({
    Id: null,
    Company: "",
    Model: "",
    ManufactureDate: ""
  });

  const Id = params.id;;

  useEffect(() => {
    const carId = Id;
    const selectedCar = state.cars.find(car => car.Id === parseInt(carId));
    setSeletedCar(selectedCar);
  }, [Id, state.cars]);

  const onSubmit = () => {
    dispatch({
      type: "UPDATE_CAR",
      payload: selectedCar
    });

    navigate("/");
  };

  const handleOnChange = (userKey: any, value: any) =>
    setSeletedCar({ ...selectedCar, [userKey]: value });

  return (
    <div className="container">
      <div className="row border">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-4">
          <h1 className="display-4 py-2 text-truncate">Update Car</h1>
          <div className="px-2">
            <form action="">
              <div className="form-group p-2">
                <label className="sr-only">Company</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedCar?.Company}
                  onChange={e => handleOnChange("Company", e.target.value)}
                  required
                  placeholder="Company" />
              </div>
              <div className="form-group p-2">
                <label className="sr-only">Model</label>
                <input
                  type="text"
                  className="form-control"
                  value={selectedCar?.Model}
                  onChange={e => handleOnChange("Model", e.target.value)}
                  required
                  placeholder="Model" />
              </div>
              <div className="form-group p-2">
                <label className="sr-only">Manufacture Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={selectedCar?.ManufactureDate}
                  onChange={e => handleOnChange("ManufactureDate", e.target.value)}
                  required
                  placeholder="DD/MM/YYYY" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg p-2" onClick={onSubmit}>
                Update
                    </button> <Link to="/">Cancel</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
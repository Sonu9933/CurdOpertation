import { useContext } from "react";
import { CarContext } from "../Context/CarContext";
import { Link } from "react-router-dom";

export const View : React.FunctionComponent = () => {
    const { state, dispatch } = useContext(CarContext);

    return (
        <div id="something" className="container p-4">
            <h1 className="text-center display-4 py-2 text-truncate">Cars</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Model</th>
                        <th>Manufacture Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.cars?.length > 0 ? (
                        state.cars.map((car, i) => (
                            <tr key={i}>
                                <td>{car.Company}</td>
                                <td>{car.Model}</td>
                                <td>{car.ManufactureDate}</td>
                                <td>
                                    <Link to={`/EditCar/${car.Id}`}>
                                        <button
                                            onClick={() => dispatch({
                                                type: "LOOK_CAR",
                                                payload: car.Id
                                            })}
                                            className="btn btn-link p-0 align-top"
                                        >
                                            Edit
                                            </button>
                                    </Link> |
                                    <button
                                        onClick={() => dispatch({
                                            type: "REMOVE_CAR",
                                            payload: car.Id
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
            <Link to="/SearchCar"> Search </Link>
             | <Link to="/AddCar"> Add</Link>
        </div>
    );
};
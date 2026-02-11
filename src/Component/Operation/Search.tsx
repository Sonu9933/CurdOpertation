import { useContext } from "react";
import { CarContext } from "../Context/CarContext";
import { Link } from "react-router-dom";

export const SearchCar : React.FunctionComponent = () => {
    const { state, dispatch } = useContext(CarContext);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    <h1 className="display-4 py-2 text-truncate">Search Car</h1>
                    <div className="px-2">
                        <form action="" className="justify-content-center">
                            <div className="form-group">
                                <label className="sr-only p-4">Company/Model Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={e => dispatch({
                                        type: "SEARCH_CAR",
                                        payload: e.target.value
                                    })}
                                    placeholder="Start typing" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <h4 className="py-2 text-truncate">Search Result</h4>
            <table className="table border">
                <thead>
                    <tr>
                        <th className="table-primary">Company</th>
                        <th className="table-primary">Model</th>
                        <th className="table-primary">Manufacture Date</th>
                    </tr>
                </thead>
                <tbody>
                    {state.carResult?.length > 0 ? (
                        state.carResult.map((car, i) => (
                            <tr key={i}>
                                <td>{car.Company}</td>
                                <td>{car.Model}</td>
                                <td>{car.ManufactureDate}</td>
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
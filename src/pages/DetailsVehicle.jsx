import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function DetailsVehicle(params) {
    const { uid } = useParams()
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()

    if (store.vehiclesList[0] !== undefined) {
        const dataVehicle = store.vehiclesList[0].vehicles.filter((vehicle) => vehicle.uid === uid)[0]
        
        return (
            <div className="container my-5">
                <div className="row g-4 align-items-start">

                    <div className="col-12 col-lg-6">
                        <div className="ratio ratio-4x3">
                            <img src="https://via.placeholder.com/800x600"
                                className="img-fluid rounded shadow"
                                alt={`${dataVehicle.properties.name} Image`} />
                        </div>
                    </div>


                    <div className="col-12 col-lg-6">
                        <h1 className="fw-bold">{dataVehicle.properties.name}</h1>
                        <p className="text-muted">
                            {dataVehicle.description}
                        </p>


                        <table className="table table-bordered table-striped mt-4">
                            <tbody>
                                <tr>
                                    <th className="text-danger">Name</th>
                                    <td>{dataVehicle.properties.name}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Cargo Capacity</th>
                                    <td>{dataVehicle.properties.cargo_capacity}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Consumables</th>
                                    <td>{dataVehicle.properties.consumables}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Cost in Credits</th>
                                    <td>{dataVehicle.properties.cost_in_credits}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Crew</th>
                                    <td>{dataVehicle.properties.crew}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Length</th>
                                    <td>{dataVehicle.properties.length}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Manufacturer</th>
                                    <td>{dataVehicle.properties.manufacturer}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Max Atmosphering Speed</th>
                                    <td>{dataVehicle.properties.max_atmosphering_speed}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Model</th>
                                    <td>{dataVehicle.properties.model}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Passengers</th>
                                    <td>{dataVehicle.properties.passengers}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Vehicle Class</th>
                                    <td>{dataVehicle.properties.vehicle_class}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }

}
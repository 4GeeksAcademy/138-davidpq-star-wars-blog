import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function DetailsPlanet(params) {
    const { uid } = useParams()
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()

    if (store.planetsList[0] !== undefined) {
        const dataPlanet = store.planetsList[0].planets.filter((planet) => planet.uid === uid)[0]
       
        return (
            <div className="container my-5">
                <div className="row g-4 align-items-start">

                    <div className="col-12 col-lg-6">
                        <div className="ratio ratio-4x3">
                            <img src="https://via.placeholder.com/800x600"
                                className="img-fluid rounded shadow"
                                alt={`${dataPlanet.properties.name} Image`} />
                        </div>
                    </div>


                    <div className="col-12 col-lg-6">
                        <h1 className="fw-bold">{dataPlanet.properties.name}</h1>
                        <p className="text-muted">
                            {dataPlanet.description}
                        </p>


                        <table className="table table-bordered table-striped mt-4">
                            <tbody>
                                <tr>
                                    <th className="text-danger">Name</th>
                                    <td>{dataPlanet.properties.name}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Climate</th>
                                    <td>{dataPlanet.properties.climate}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Diameter</th>
                                    <td>{dataPlanet.properties.diameter}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Gravity</th>
                                    <td>{dataPlanet.properties.gravity}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Orbital Period</th>
                                    <td>{dataPlanet.properties.orbital_period}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Population</th>
                                    <td>{dataPlanet.properties.population}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Rotation Period</th>
                                    <td>{dataPlanet.properties.rotation_period}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Surface Water</th>
                                    <td>{dataPlanet.properties.surface_water}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Terrain</th>
                                    <td>{dataPlanet.properties.terrain}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }

}
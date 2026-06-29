import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function DetailsCharacter(params) {
    const { uid } = useParams()
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()

    if (store.charactersList[0] !== undefined) {
        const dataCharacter = store.charactersList[0].characters.filter((character) => character.uid === uid)[0]
        return (
            <div className="container my-5">
                <div className="row g-4 align-items-start">

                    <div className="col-12 col-lg-6">
                        <div className="ratio ratio-4x3">
                            <img src="https://via.placeholder.com/800x600"
                                className="img-fluid rounded shadow"
                                alt={`${dataCharacter.properties.name} Image`} />
                        </div>
                    </div>


                    <div className="col-12 col-lg-6">
                        <h1 className="fw-bold">{dataCharacter.properties.name}</h1>
                        <p className="text-muted">
                            {dataCharacter.description}
                        </p>


                        <table className="table table-bordered table-striped mt-4">
                            <tbody>
                                <tr>
                                    <th className="text-danger">Name</th>
                                    <td>{dataCharacter.properties.name}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">birth Year</th>
                                    <td>{dataCharacter.properties.birth_year}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Eye Color</th>
                                    <td>{dataCharacter.properties.eye_color}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Gender</th>
                                    <td>{dataCharacter.properties.gender}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Hair Color</th>
                                    <td>{dataCharacter.properties.hair_color}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Height</th>
                                    <td>{dataCharacter.properties.height}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Mass</th>
                                    <td>{dataCharacter.properties.mass}</td>
                                </tr>
                                <tr>
                                    <th className="text-danger">Skin Color</th>
                                    <td>{dataCharacter.properties.skin_color}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }

}
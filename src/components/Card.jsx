import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";



export default function Card({ title, details }) {
    const { store, dispatch } = useGlobalReducer()
    let urlDetails = ""

    const favoritesList = store.favoritesList
    function urlImg() {
        switch (title) {
            case "Characters":
                return "people"
                break;
            case "Planets":
                return "planets"
                break;
            case "Vehicles":
                return "vehicles"
                break;
        }
    }
    function render() {
        switch (title) {
            case "Characters":
                urlDetails = "character_details"
                return (
                    <>
                        <strong>Gender:</strong> {details.properties.gender} < br />
                        <strong>Hair Color:</strong> {details.properties.hair_color} < br />
                        <strong>Eye Color:</strong> {details.properties.eye_color}
                    </>
                )
                break;
            case "Planets":
                urlDetails = "planet_details"
                return (
                    <>
                        <strong>Population:</strong> {details.properties.population} < br />
                        <strong>Terrain:</strong> {details.properties.terrain}
                    </>
                )
                break;
            case "Vehicles":
                urlDetails = "vehicle_details"
                return (

                    <>
                        <strong>Max Atmosphering Speed:</strong> {details.properties.max_atmosphering_speed} < br />
                        <strong>Passengers:</strong> {details.properties.passengers} < br />
                        <strong>Cargo Capacity:</strong> {details.properties.cargo_capacity}
                    </>
                )
                break;
        }
    }

    function addFavorite(uid, typeDetail, item) {
        if (favoritesList.filter((element) => element.item === item).length === 0) {
            const uidTypeDetail = {
                uid: uid,
                typeDetail: typeDetail,
                item: item
            }
            dispatch({ type: 'addFavoritesList', payload: uidTypeDetail })
        }
    }

    function checkFavorite(uid, typeDetail) {
        const favoriteFiltrado = favoritesList.filter((element) => {
            return element.uid === uid && element.typeDetail === typeDetail
        })
        if (favoriteFiltrado.length === 1) {
            return true
        }
        return false
    }

    return (
        <div className="card" style={{ minWidth: "18rem" }}>
            <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/${urlImg()}/${details.uid}.jpg?raw=true`} className="card-img-top" alt={details.properties.name} />
            <div className="card-body">
                <h5 className="card-title">{details.properties.name}</h5>
                <p className="card-text">
                    {render()}
                </p>
                <div className="d-flex justify-content-between">
                    <Link to={`/${urlDetails}/${details.uid}`}>
                        <button type="button" className="btn btn-outline-primary">
                            Learn more!
                        </button>
                    </Link>
                    <button type="button"
                        className={checkFavorite(details.uid, title) === true ? "btn btn-warning" : "btn btn-outline-warning"}
                        onClick={() => { addFavorite(details.uid, title, details.properties.name) }}>
                        <Heart></Heart>
                    </button>
                </div>
            </div>
        </div>
    )
}
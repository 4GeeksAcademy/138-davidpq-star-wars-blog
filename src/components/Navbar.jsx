import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Trash2 } from "lucide-react";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	const favoritesList = store.favoritesList
	console.log(favoritesList);
	
	function handleDelete(favorite) {
        dispatch({ type: 'deleteFavoritesList', payload: favorite })
    }
	function ruta(typeDetail) {
		switch (typeDetail) {
            case "Characters":
                return "character_details"
                break;
            case "Planets":
                return "planet_details"
                break;
            case "Vehicles":
                return "vehicle_details"
                break;
        }
	}
	return (
		<nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
			<Link to="/" className="navbar-brand d-flex align-items-center gap-2">
				<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
					alt="Star Wars" height="40" />

			</Link>
			<Link to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				Dropdown
			</Link>
			<div className="ms-auto">
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Favorites <span className="badge bg-light text-dark">{favoritesList.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{
							favoritesList.length !== 0 ?
								favoritesList.map((element)=>{
									return (<li key={element.uid+element.item} className="text-center d-flex justify-content-between m-2">	
										<Link to={`/${ruta(element.typeDetail)}/${element.uid}`}>
											{element.item}
										</Link>
										<Trash2 color="red" onClick={()=>{handleDelete(element)}}/>
										</li>)
								})
							:
								<li className="text-center">Empty</li>

						}
					</ul>
				</div>
			</div>
		</nav>
	);
};
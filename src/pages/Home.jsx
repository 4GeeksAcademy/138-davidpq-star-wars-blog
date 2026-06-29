import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import CarruselCards from "../components/CarruselCards.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer()
	const charactersList = store.charactersList[0] === "undefined" ? "" : store.charactersList[0]
	const planetsList = store.planetsList[0] === "undefined" ? "" : store.planetsList[0]
	const vehiclesList = store.vehiclesList[0] === "undefined" ? "" : store.vehiclesList[0]

	return (
		<>
			<CarruselCards title={"Characters"} list={charactersList} />
			<CarruselCards title={"Planets"} list={planetsList} />
			<CarruselCards title={"Vehicles"} list={vehiclesList} />
		</>
	);
}; 
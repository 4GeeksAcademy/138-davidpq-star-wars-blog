import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import starWarsServices from "../services/starWarsServices"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect } from "react"
import toast from "react-hot-toast"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        async function getAllCharacters() {
            try {
                const dataCharacters = await starWarsServices.getAllCharacters()

                const newObjectCharacters = {
                    previous: dataCharacters.previous,
                    next: dataCharacters.next
                }
                const charactersPromises = dataCharacters.results.map(async (character) => {
                    return await starWarsServices.getOneCharacter(character.uid)
                })
                const charactersData = await Promise.all(charactersPromises);

                const resultsCharactersData = charactersData.map((character) => {
                    return character.result
                })
                newObjectCharacters.characters = resultsCharactersData
                dispatch({ type: 'setCharacterList', payload: newObjectCharacters })
            } catch (error) {
                toast.error("Characters didn't work.")
            }
        }

        async function getAllPlanets() {
            try {
                const dataPlanet = await starWarsServices.getAllPlanets()
                const newObjectPlanet = {
                    previous: dataPlanet.previous,
                    next: dataPlanet.next
                }
                const planetsPromises = dataPlanet.results.map(async (planet) => {
                    return await starWarsServices.getOnePlanet(planet.uid)
                })
                const planetsData = await Promise.all(planetsPromises);
                const resultsPlanetData = planetsData.map((planet) => {
                    return planet.result
                })
                newObjectPlanet.planets = resultsPlanetData
                dispatch({ type: 'setPlanetList', payload: newObjectPlanet })
            } catch (error) {
                toast.error("Planets didn't work.")
            }
        }

        async function getAllVehicles() {
            try {
                const dataVehicle = await starWarsServices.getAllVehicles()
                const newObjectVehicle = {
                    previous: dataVehicle.previous,
                    next: dataVehicle.next
                }
                const vehiclesPromises = dataVehicle.results.map(async (vehicle) => {
                    return await starWarsServices.getOneVehicle(vehicle.uid)
                })
                const vehiclesData = await Promise.all(vehiclesPromises);
                const resultsVehicleData = vehiclesData.map((vehicle) => {
                    return vehicle.result
                })
                
                newObjectVehicle.vehicles = resultsVehicleData
                dispatch({ type: 'setVehicleList', payload: newObjectVehicle })
            } catch (error) {
                toast.error("Vehicles didn't work.")
            }
        }

        getAllCharacters()
        getAllPlanets()
        getAllVehicles()
    }, []);



    return (
        <ScrollToTop>
            <Navbar />
            <Outlet />
        </ScrollToTop>
    )
}
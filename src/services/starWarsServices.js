async function getAllCharacters() {
    const res = await fetch("https://swapi.tech/api/people")
    const data = await res.json()
    return data;
}

async function getOneCharacter(id) {
    const res = await fetch(`https://www.swapi.tech/api/people/${id}`)
    const data = await res.json()
    return data;
}

async function getAllPlanets() {
    const res = await fetch("https://swapi.tech/api/planets")
    const data = await res.json()
    return data;
}

async function getOnePlanet(id) {
    const res = await fetch(`https://www.swapi.tech/api/planets/${id}`)
    const data = await res.json()
    return data;
}

async function getAllVehicles() {
    const res = await fetch("https://swapi.tech/api/vehicles")
    const data = await res.json()
    return data;
}

async function getOneVehicle(id) {
    const res = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
    const data = await res.json()
    return data;
}

const starWarsServices = {
    getAllCharacters,
    getOneCharacter,
    getAllPlanets,
    getOnePlanet,
    getAllVehicles,
    getOneVehicle
}

export default starWarsServices
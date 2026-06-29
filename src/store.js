export const initialStore = () => {
  return {
    charactersList: [],
    planetsList: [],
    vehiclesList: [],
    favoritesList: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'setCharacterList':
      const charactersList = [action.payload]
      return {
        ...store,
        charactersList: [...charactersList]
      };
    case 'setPlanetList':
      const planetList = [action.payload]
      return {
        ...store,
        planetsList: [...planetList]
      };
    case 'setVehicleList':
      const vehiclesList = [action.payload]
      return {
        ...store,
        vehiclesList: [...vehiclesList]
      };
    case 'addFavoritesList':
      const favoriteListAdd = store.favoritesList
      const favorite = action.payload

      return {
        ...store,
        favoritesList: [...favoriteListAdd, favorite]
      };
    case 'deleteFavoritesList':

      const data = action.payload
      const favoritesListDelete = store.favoritesList.filter((element) => element.item !== data.item )

      return {
        ...store,
        favoritesList: [...favoritesListDelete]
      };
    default:
      throw Error('Unknown action.');
  }
}

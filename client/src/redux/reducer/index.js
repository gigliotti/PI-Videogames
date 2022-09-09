import {GET_ALL_VIDEOGAMES, SEARCH_VIDEOGAMES, ORDER_VIDEOGAMES, ASCENDENTE, GET_ALL_GENRES} from '../constants'

const initialState = {
    videogames: [],
//    videogame: {},
    filteredVideogames: [],
    genres: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload.data
            }

        case SEARCH_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload.data
            }
        
        case ORDER_VIDEOGAMES:
            let filteredVideogames = [...state.videogames]
            
            // Ordernar por nombre
            filteredVideogames = filteredVideogames.sort(function (a, b) {
                if (a.name > b.name) {
                    return action.payload === ASCENDENTE ? 1: -1;
                }
                if (a.name < b.name) {
                    return action.payload === ASCENDENTE ? -1: 1;
                }
                return 0;
            });

            return {
                ...state,
                videogames: filteredVideogames
            }
        case GET_ALL_GENRES:
            return {
                ...state,
                genres: action.payload.data
            }
        
/*         case GET_VIDEOGAME:
            return {
                ...state,
                videogame: action.payload
            } */
            
        default:
            return state
    }
}
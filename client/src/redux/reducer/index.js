import {GET_ALL_VIDEOGAMES, SEARCH_VIDEOGAMES, ORDER_NAME_VIDEOGAMES, ORDER_RATING_VIDEOGAMES, ASCENDENTE, GET_ALL_GENRES, FILTER_CREATED, FILTER_GENRES} from '../constants'

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload.data,
                allVideogames: action.payload.data
            }

        case SEARCH_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload.data
            }
        
        case ORDER_NAME_VIDEOGAMES:
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
            
        case ORDER_RATING_VIDEOGAMES:
            let filteredRtgVideogames = [...state.videogames]
            
            // Ordernar por nombre
            filteredRtgVideogames = filteredRtgVideogames.sort(function (a, b) {
                if (a.rating > b.rating) {
                    return action.payload === ASCENDENTE ? 1: -1;
                }
                if (a.rating < b.rating) {
                    return action.payload === ASCENDENTE ? -1: 1;
                }
                return 0;
            });

            return {
                ...state,
                videogames: filteredRtgVideogames
            }

        case GET_ALL_GENRES:
            return {
                ...state,
                genres: action.payload.data
            }
            

        case FILTER_CREATED:
            let filteredAllVideogames = [...state.allVideogames]
            const createdFilter = action.payload === 'Created' ? filteredAllVideogames.filter(el => el.createdAt) : filteredAllVideogames.filter(el => !el.createdAt)
            
            return {
                ...state,
                videogames: action.payload === 'All' ? state.allVideogames : createdFilter
            }

        case FILTER_GENRES:

            let filteredVideogamesGenre = [...state.videogames]
//            console.log(action.payload)
            let genresFilter = filteredVideogamesGenre.filter(g => g.genres && g.genres.find(a => a.name ===action.payload))
//            console.log(genresFilter)
           
            return {
                ...state,
                videogames: action.payload === "All" ? state.allVideogames : genresFilter
            }

        default:
            return state
        }
}
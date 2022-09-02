import {GET_ALL_VIDEOGAMES} from '../actions'

const initialState = {
    videogames: [],
    genre: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload.data
            }
    
        default:
            return state
    }
}
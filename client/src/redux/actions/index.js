import axios from 'axios'

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const CREATE_HOUSE = "CREATE_HOUSE";
export const GET_HOUSE = "GET_HOUSE";
export const DELETE_HOUSE = "DELETE_HOUSE";

export const getAllVideogames = () => dispatch => {
    return axios.get('http://localhost:3001/videogames/')
    .then((videogames) => {
        dispatch({
            type: GET_ALL_VIDEOGAMES,
            payload: videogames
        })
    })
}
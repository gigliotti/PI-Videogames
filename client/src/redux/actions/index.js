import axios from 'axios'

import { GET_ALL_VIDEOGAMES, SEARCH_VIDEOGAMES, ORDER_VIDEOGAMES } from '../constants'



export const getAllVideogames = () => dispatch => {
    return axios.get('http://localhost:3001/api/videogames/')
    .then((videogames) => {
        dispatch({
            type: GET_ALL_VIDEOGAMES,
            payload: videogames
        })
    })
    .catch((error) => {
        console.log(error);
    })
}

export const searchVideogames = (search) => dispatch => {
    return axios.get(`http://localhost:3001/api/videogames?search=${search}`)
    .then((videogames) => {
        dispatch({
            type: SEARCH_VIDEOGAMES,
            payload: videogames
        })
    })
    .catch((error) => {
        console.log(error);
    })
}

export const order = (order) => {
    return {
        type: ORDER_VIDEOGAMES,
        payload: order
    }
}

/* export const getVideogame = (id) => dispatch => {
    return axios.get(`http://localhost:3001/videogames/${id}`)
        .then((videogame) => {
            dispatch({
                type: GET_VIDEOGAME,
                payload: videogame
            })
        })
        .catch((error) => {
            console.log(error);
        })
} */


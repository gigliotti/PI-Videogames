import axios from 'axios'

import { GET_ALL_VIDEOGAMES, SEARCH_VIDEOGAMES, ORDER_NAME_VIDEOGAMES, ORDER_RATING_VIDEOGAMES, GET_ALL_GENRES, FILTER_CREATED, FILTER_GENRES } from '../constants'



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
        type: ORDER_NAME_VIDEOGAMES,
        payload: order
    }
}

export const orderRating = (order) => {
    return {
        type: ORDER_RATING_VIDEOGAMES,
        payload: order
    }
}

export const getAllGenres = () => dispatch => {
    return axios.get('http://localhost:3001/api/genres/')
    .then((genres) => {
        dispatch({
            type: GET_ALL_GENRES,
            payload: genres
        })
    })
    .catch((error) => {
        console.log(error);
    })
}

export const filterCreated = (created) => {
    return {        
        type: FILTER_CREATED,
        payload: created
    }
}

export const filterByGenre = (genres) => {
    return {        
        type: FILTER_GENRES,
        payload: genres
    }
} 



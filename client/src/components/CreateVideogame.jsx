import axios from "axios";
import { useHistory } from "react-router-dom";
import {useState} from "react"

function CreateVideogame() {

    const [videogame, setVideogame] = useState({})

    let history = useHistory()

    const onInputChange = (e) => {
        e.preventDefault()
        setVideogame({
            ...videogame,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(videogame)
        axios.post(`http://localhost:3001/api/videogames/`, videogame)
        .then(() => {
            history.push('/videogames')
        })
    }

/*     Videogame
            name,
            description,
            released,
            rating,
            platforms */

    return <form onSubmit={onSubmit}>
        <label htmlFor="name">Nombre: </label>
        <input onChange={onInputChange} name="name" type="text" value={videogame.name}/>
        <label htmlFor="description">Descripcion: </label>
        <input onChange={onInputChange} name="description" type="text" value={videogame.description}/>
        <label htmlFor="released">Released: </label>
        <input onChange={onInputChange} name="released" type="date" value={videogame.released}/>
        <label htmlFor="rating">Rating: </label>
        <input onChange={onInputChange} name="rating" type="text" value={videogame.rating}/>
        <label htmlFor="platforms">Platforms: </label>
        <input onChange={onInputChange} name="platforms" type="text" value={videogame.platforms}/>


        <input type="submit" />
    </form>
}

export default CreateVideogame;
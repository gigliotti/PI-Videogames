import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres } from '../redux/actions';

function CreateVideogame() {

    const [videogame, setVideogame] = useState([])
    const [genresSelected, setGenresSelected] = useState([])
    let genres = useSelector((state) => state.genres)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllGenres()) 
    },[])
    

    let history = useHistory()

    const onInputChange = (e) => {
        e.preventDefault()
        //console.log(e.target.id)
        setVideogame({
            ...videogame,
            [e.target.name]: e.target.value
        })
        
    }

    const onCheckChange = (e) => {
        if(e.target.id) {
            if(genresSelected.length !== 0 && genresSelected.includes(e.target.id)){
                    setGenresSelected(genresSelected.filter( i => i !== e.target.id))               
            } else {
                setGenresSelected(
                    [...genresSelected, e.target.id]
                )
            }
        }
        //console.log(genresSelected)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
       
        axios.post(`http://localhost:3001/api/videogames/`, {videogame, genre: genresSelected})
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
        {/* <input onChange={onInputChange} name="platforms" type="text" value={videogame.platforms}/> */}
        <select onChange={onInputChange} name="platforms">
            <option value="PC">PC</option>
            <option value="PLAYSTATION">PLAYSTATION</option>
            <option value="NINTENDO">NINTENDO</option>
            <option value="XBOX">XBOX</option>
            <option value="ANDROID">ANDROID</option>
            <option value="IOS">IOS</option>
        </select>
        <label>Generos: </label>
        { genres.map(g => {
            return <>
                <label htmlFor={g.id}>{g.name}</label>
                <input key={g.id} type="checkbox" onChange={onCheckChange} name={g.name} id={g.id} />
            
            </>

        })}



        <input type="submit" />
    </form>
}

export default CreateVideogame;
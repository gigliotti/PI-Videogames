import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres } from '../redux/actions';
import '../css/createVideogame.css';

function CreateVideogame() {

    const [videogame, setVideogame] = useState([])
    const [errors, setErrors] = useState({})
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

        setErrors(validate({
            ...videogame,
            [e.target.name]: e.target.value 
        }))
        
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
        console.log(videogame)
        setErrors(validate({
            ...videogame,
            [e.target.name]: e.target.value 
        }))
        axios.post(`http://localhost:3001/api/videogames/`, {videogame, genre: genresSelected})
        .then(() => {
            alert('Personaje creado exitosamente')
            history.push('/videogames')
        })
    }

    const validate = () => {
        let errors = {}
        if(!videogame.name) {
            errors.name = 'Se requiere un nombre!'
        }
        if(!videogame.description) {
            errors.description = 'Se requiere una descripcion!'
        }
        if(!videogame.platforms) {
            errors.platforms = 'Se requiere una plataforma!'
        }
        if(videogame.rating < 0 || videogame.rating > 10) {
            errors.rating = 'El valor de rating permitido oscila entre 0 y 10!'
        }

        return errors
    }

/*     Videogame
            name,
            description,
            released,
            rating,
            platforms */

    return <form className="formCreate" onSubmit={onSubmit}>
        <ul className="flex-outer">

        <li>

        <label htmlFor="name">Nombre: </label>
        <input onChange={onInputChange} name="name" type="text" value={videogame.name}/>
        { errors.name && (<p className="error">{errors.name}</p>)}
        </li>
        <li>

        <label htmlFor="description">Descripcion: </label>
        <input onChange={onInputChange} name="description" type="text" value={videogame.description}/>
        { errors.description && (<p className="error">{errors.description}</p>)}
        </li>
        

        <li>

        <label htmlFor="image">image: </label>
        <input onChange={onInputChange} name="image" type="text" value={videogame.image}/>
        </li>
        <li>

        <label htmlFor="released">Released: </label>
        <input onChange={onInputChange} name="released" type="date" value={videogame.released}/>
        </li>
        <li>

        <label htmlFor="rating">Rating: </label>
        <input onChange={onInputChange} name="rating" type="number" step="any" value={videogame.rating}/>
        { errors.rating && (<p className="error">{errors.rating}</p>)}
        </li>
        <li>

        <label htmlFor="platforms">Plataforma: </label>
        {/* <input onChange={onInputChange} name="platforms" type="text" value={videogame.platforms}/> */}
        <select onChange={onInputChange} name="platforms">
            <option >elegir...</option>
            <option value="PC">PC</option>
            <option value="PLAYSTATION">PLAYSTATION</option>
            <option value="NINTENDO">NINTENDO</option>
            <option value="XBOX">XBOX</option>
            <option value="ANDROID">ANDROID</option>
            <option value="IOS">IOS</option>
        </select>
        { errors.platforms && (<p className="error">{errors.platforms}</p>)}
        </li>


        <label >Generos: </label>
        </ul>
        <li className="generos">

        
        { genres.map(g => {
            return <div className="genero">
                <label htmlFor={g.id}>{g.name}</label>
                <input key={g.id} type="checkbox" onChange={onCheckChange} name={g.name} id={g.id} />
            
            </div>

})}


</li>

        
        <input className="submit" type="submit" />
    </form>
}

export default CreateVideogame;
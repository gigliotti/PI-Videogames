import { useEffect, useState } from 'react';
import { useParams } from "react-router"
import axios from 'axios';

function VideogameDetail() {
    const [videogame, setVideogame] = useState(null)
    let { id } = useParams()
       
    useEffect(() => {
        axios.get(`http://localhost:3001/api/videogames/${id}`)
        .then((resp) => {
            setVideogame(resp.data)
        })
        return () => {
            setVideogame(null)
        }
    },[])
    
    return <div>
        {
            videogame ?
            <>
                <h3>{videogame.name}</h3>
                <img src={videogame.image} alt="" />
                <p>Fecha de lanzamiento: {videogame.released}</p>
                <p>Rating: {videogame.rating}</p>
                <p>Plataforma: {videogame.platforms}</p>
            </> :
            <div>loading...</div>
        }
    </div>

/* __Ruta de detalle de videojuego__: debe contener

- [ ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
- [ ] Descripción
- [ ] Fecha de lanzamiento
- [ ] Rating
- [ ] Plataformas */
    
}

export default VideogameDetail;


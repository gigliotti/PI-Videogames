import { Link } from "react-router-dom";
import '../css/videogames.css'

function Videogame({id, name, image, genres}) {
    return <div className='card'>
        <Link to={`/videogames/${id}`}>
            <h3>{name}</h3>
            <img src={image} alt="" />
        </Link>
        <div>
            <label >Generos: </label>
            { genres &&
            genres.map(g => <p>{g.name}</p>)}

        </div>
    </div>
}

export default Videogame;
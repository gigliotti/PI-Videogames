import { Link } from "react-router-dom";

function Videogame({id, name, image}) {
    return <div>
        <Link to={`/videogames/${id}`}>
            <h3>{name}</h3>
            <img src={image} alt="" />
        </Link>
    </div>
}

export default Videogame;
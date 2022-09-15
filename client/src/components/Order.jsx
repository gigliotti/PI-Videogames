import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { order, getAllGenres, orderRating, filterCreated, filterByGenre } from "../redux/actions";
import { ASCENDENTE, DESCENDENTE } from "../redux/constants";
import '../css/order.css'



function Order() {

    let genres = useSelector((state) => state.genres)
    const [genresSelected, setGenresSelected] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllGenres()) 
    },[])

    const onOrderNameSelectChange = (e) => {
        dispatch(order(e.target.value))
    }
    const onOrderRatingSelectChange = (e) => {
        dispatch(orderRating(e.target.value))
    }
    const handleFilterCreated = (e) => {
        dispatch(filterCreated(e.target.value))
    }

    const handleFilterGenres = (e) => {
        dispatch(filterByGenre(e.target.value));
      };

    

    return (
        <div className="orderNav">
            <h3>Ordenar/Filtrar:</h3>
            <select name="orderNameSelect" onChange={onOrderNameSelectChange}>
                <option selected disabled> Nombre</option>
                <option value={ASCENDENTE}>ascendente</option>
                <option value={DESCENDENTE}>descendente </option>
            </select>
            <select name="orderRatingSelect" onChange={onOrderRatingSelectChange}>
                <option selected disabled> Rating</option>
                <option value={ASCENDENTE}>ascendente</option>
                <option value={DESCENDENTE}>descendente </option>
            </select>
            <select name="filterCreated" onChange={handleFilterCreated}>
                <option selected disabled> Creados/Api</option>
                <option value='All'> Todos</option>
                <option value='Created'>Creados</option>
                <option value='Api'>Api </option>
            </select>

            <select  onChange={handleFilterGenres}>
                <option selected disabled>
                    Generos
                </option>
                <option  value="All">
                    Todos
                </option>
                {genres.map((g) => (
                    <option key={g.id} value={g.name}>
                    {g.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Order;
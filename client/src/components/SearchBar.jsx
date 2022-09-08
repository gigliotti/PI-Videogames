import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchVideogames } from '../redux/actions' 


function SearchBar() {
    const [search, setSearch] = useState('')
    let dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(searchVideogames(search))
    }


    const onInputChange = (e) => { 
        setSearch(e.target.value)
     }


    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={ onInputChange } value={ search } />
            <input type="submit" value="Buscar" />

        </form>
    </div>
}

export default SearchBar;
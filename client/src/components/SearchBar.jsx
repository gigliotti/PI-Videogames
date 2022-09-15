import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchVideogames } from '../redux/actions' 
import '../css/searchBar.css'

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


    return <div className='searchBar'>
        <form onSubmit={onSubmit}>
            <input className='inputSearch' type="text" onChange={ onInputChange } value={ search } />
            <input className='btnSearch' type="submit" value="Buscar" />

        </form>
    </div>
}

export default SearchBar;
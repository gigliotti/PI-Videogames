import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from '../redux/actions';
import Paginate from './Paginate';
import Videogame from './Videogame';
import '../css/videogames.css'


const Videogames = () => {

    let allVideogames = useSelector((state) => state.videogames)
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1)
    const [videogamesPerPage, setVideogamesPerPage] = useState(15)
    const indexOfLastVideogame = currentPage * videogamesPerPage
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame)
    
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
    }


    useEffect(() => {
      dispatch(getAllVideogames()) 
    },[])
 
    
    return <> {
              allVideogames ?
              <div>
              <Paginate videogamesPerPage={videogamesPerPage} allVideogames={allVideogames.length} paginate={paginate}/>
              <div className='videogames-grid'>
              {
                currentVideogames.map((videogame) => {
                  return <Videogame key={videogame.id} id={videogame.id} name={videogame.name} image={videogame.image} genres={videogame.genres}/>
                })
              }
              </div></div> : 
              <div>loading...</div>
            }
          </>
  };
  
  export default Videogames;
  
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from '../redux/actions';
import Videogame from './Videogame';



const Videogames = () => {

    let videogames = useSelector((state) => state.videogames)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllVideogames()) 
    },[])
 
      
      return (
          <>
            {
              videogames.map((videogame) => {
                return <Videogame key={videogame.id} id={videogame.id} name={videogame.name} image={videogame.image}/>
              })
            }
          </>
      );
  };
  
  export default Videogames;
  
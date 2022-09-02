import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from '../redux/actions';



const Videogames = () => {

    let videogames = useSelector((state) => state.videogames)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllVideogames()) 
    },[])
    console.log(videogames)
 
      
      return (
          <div>
            Soy Videogames
          </div>
      );
  };
  
  export default Videogames;
  
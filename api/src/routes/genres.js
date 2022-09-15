const { Router } = require('express');
const { Genre } = require('../db')

require('dotenv').config();
const { YOUR_API_KEY } = process.env;

const axios = require('axios')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/* - [ ] __GET /genres__:
  - Obtener todos los tipos de géneros de videojuegos posibles
  - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí 
  - GET <https://api.rawg.io/api/genres>
  */

  router.get('/', async (req, res, next) => {
    try {
      
      let genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)
      .then((resp) => {
        let genre = resp.data.results
        //console.log(genre)
        genre_name = genre.map(({id, name}) => {

            Genre.findOrCreate({
              where: {
                id: id,
                name: name,
              }
            })  
        }) 
      })
      const genreList = await Genre.findAll();
      res.json(genreList)
    } catch (error) {
      next(error)
    }
    
    
})




module.exports = router;
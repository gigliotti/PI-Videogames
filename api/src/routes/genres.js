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

  router.get('/', (req, res, next) => {
    let genresApi = axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)
    
})




module.exports = router;
const { Router } = require('express');
require('dotenv').config();
const { YOUR_API_KEY } = process.env;
const { Videogame, Genre } = require('../db')
const axios = require('axios');
const { Op } = require('sequelize');
const router = Router();

router.get('/', async (req, res, next) => {
    try {
        let videogamesApi
        let videogamesDB
        let search = req.query.search

        if(search){
            videogamesApi = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&search=${search}&page_size=40`)
            videogamesApi = videogamesApi.data.results
            videogamesDB = Videogame.findAll({
                include: Genre,
                where: {
                    name: {
                        [Op.iLike]: `%${search}%`
                    }
                }
            })
        } else {
            callApi1 = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=1`)
            callApi2 = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=2`)
            callApi3 = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=3`)
            callApi4 = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=4`)
            callApi5 = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&page=5`)
            
            videogamesApi = [...callApi1.data.results, ...callApi2.data.results, ...callApi3.data.results, ...callApi4.data.results, ...callApi5.data.results]

            videogamesDB = Videogame.findAll({
                include: Genre
            })
        }

        Promise.all([
            videogamesApi,
            videogamesDB
        ])
        .then((resp) => {
            const [videogamesApi, videogamesDB] = resp
            let videogamesApiFiltered = videogamesApi.map((videogame) => {
                if(videogame) {
                    
                    return {
                        id: videogame.id,
                        name: videogame.name,
                        description: videogame.description,
                        released: videogame.released,
                        image: videogame.background_image,
                        rating: videogame.rating,
                        platforms: videogame.platforms ? videogame.platforms[0].platform.name : 'PC',
                        genres: videogame.genres
    
                    }
                }
            })

            let allVideogames = [...videogamesApiFiltered, ...videogamesDB]
            
            // Ordernar por nombre
            allVideogames.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
              

            res.send(allVideogames)
        })
        
    } catch (error) {
        next(error)
    }

})

router.post('/', async (req, res, next) => {
    try {
        
        //const { name, description, released, rating, platforms, genre } = req.body
        const { videogame, genre } = req.body
        
        const newVideogame = await Videogame.create({
            name: videogame.name,
            description: videogame.description,
            image: videogame.image,
            released: videogame.released,
            rating: videogame.rating,
            platforms: videogame.platforms
        })

        //console.log(genre)
        genre.map(async g => {
            g = parseInt(g)
            const genreDB = await Genre.findByPk(g)
            newVideogame.addGenre(genreDB)
        })
        

        res.json(newVideogame)
        
    } catch (error) {
        next(error)
    }
    
})

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        let videogame
        if(id.length > 10) {
            videogame = await Videogame.findOne({
                include: Genre,
                where: { id: id }
            })
            console.log(videogame)
    
        } else {
            let resp = await axios.get(`https://api.rawg.io/api/games/${id}?&key=${YOUR_API_KEY}`)
            resp = resp.data
            videogame = {
                id: resp.id,
                name: resp.name,
                description: resp.description,
                released: resp.released,
                image: resp.background_image,
                rating: resp.rating,
                platforms: resp.platforms[0].platform.name,
                genres: resp.genres
            }


        }

        res.send(videogame)

    } catch (error) {
        next(error)
    }

})




module.exports = router;
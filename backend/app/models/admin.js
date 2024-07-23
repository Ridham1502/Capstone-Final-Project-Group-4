const express = require('express');
const router = express.Router()
const controller = require('../controllers/admin');


router.get(
    '/addAdmin',
    controller.addAdmin
)

router.post(
    '/login',
    controller.login
)

router.post(
    '/createMovie',
    controller.createMovie
)


router.get(
    '/Movie',
    controller.Movie
)

router.get(
    '/listMovie',
    controller.listMovie
)


router.get(
    '/listEvents',
    controller.listEvents
)

router.get(
    '/listAllMovieAndEvent',
    controller.listAllMovieAndEvent
)

router.patch(
    '/editMovieDetails',
    controller.editMovieDetails 
)

router.get(
    '/MovieDetails',
    controller.MovieDetails 
)

router.delete(
    '/movieDeleteByid',
    controller.movieDeleteByid 
)

module.exports = router

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


router.get(
    '/listAllUser',
    controller.listAllUser 
)


router.post(
    '/addFood',
    controller.addFood 
)

router.get(
    '/listAllFood',
    controller.listAllFood 
)

router.get(
    '/listAllBooking',
    controller.listAllBooking 
)


router.delete(
    '/foodDeleteByid',
    controller.foodDeleteByid 
)

router.delete(
    '/userDeleteByid',
    controller.userDeleteByid 
)

module.exports = router
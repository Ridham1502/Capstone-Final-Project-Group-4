const express = require('express');
const router = express.Router()
const controller = require('../controllers/admin');



router.post(
    '/createMovie',
    controller.createMovie
)


router.get(
    '/listMovie',
    controller.listMovie
)


router.get(
    '/listEvents',
    controller.listEvents
)


module.exports = router
const express = require("express")
const homeController = require('../controllers/home.js')


const router = express.Router()


router.get('/', homeController.home)
router.get('/randomAgent' , homeController.randomAgent)
router.get('/randomTeam' , homeController.randomTeam)
module.exports.router = router
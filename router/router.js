const express = require ('express')
const { getHome } = require('../controllers/controllers')



const router = express.Router()

router.route('/')

.get(getHome)



module.exports={
    router
}
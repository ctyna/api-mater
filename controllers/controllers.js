
const {Mueble} = require('../models/models')



const getHome = (async ( req, res, next)=>{
try{
    const buscar = await Mueble.find()
    res.json(buscar)
}
catch{
    res.status(500).json(next)
}




})


module.exports={
    getHome,
}
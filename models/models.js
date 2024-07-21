const mongoose = require ('mongoose')
const { mueblesSchema } = require('../schema/schema')




const Mueble = mongoose.model('Mueble' , mueblesSchema)



module.exports= {
    Mueble
}
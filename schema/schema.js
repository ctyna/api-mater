const mongoose = require ('mongoose')


const mueblesSchema = new mongoose.Schema(
    { author : String, 
    title : String, 
    info : String, 
    image : String, 
    alt : String, 
    object : String },
    {collection : 'muebles' , versionKey: false}
)




module.exports = {
    mueblesSchema
}
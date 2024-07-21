console.clear()
console.log('Iniciando JS')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { router } = require('./router/router')
const { PORT, MONGO } = require('./env')

const conectar = async ()=> mongoose.connect(`mongodb://${MONGO}`)
        .then(()=> console.log('Conectando a Mongoose'))
        .catch(err => console.log(err.message))

conectar()

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(router)

router.all('*' , ( req , res , next )=>{
    const err = new Error()
          err.status     = 404 
          err.statusText = `No encuentro el Endpoint`
    next(err)
})


router.use(( err , req , res , next )=>{
    let { status , statusText } = err
          status     = status     || 500
          statusText = statusText || `Error interno de mi API`
    res.status(status).json({ status , statusText })
})











app.listen( PORT , ()=>console.log('Iniciando API'))
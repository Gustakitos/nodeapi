const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Iniciando o App
const app = express()

//Iniciando o Db
mongoose.connect('mongodb://localhost:27012/nodeapi', 
    { useNewUrlParser: true }
)

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(3001)

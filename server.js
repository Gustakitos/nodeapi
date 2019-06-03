const express = require('express')
const mongoose = require('mongoose')

//Iniciando o App
const app = express()

//Iniciando o Db
mongoose.connect('mongodb://localhost:27012/nodeapi', { useNewUrlParser: true })

//Primeira rota
app.get('/', (req, res) => {
    res.send('Hello Rocketseat')
})

app.listen(3001)

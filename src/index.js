const express = require('express')
const mongoose =  require('mongoose')
const port = 3000
const app = express()

mongoose.connect('mongodb://localhost/links').then(db => {
    console.log(db)
}).catch(error => {
    console.log(error)
}) 

app.get('/', (req,res) => res.send('chegou !!'))

app.listen(port, () => {
    console.log(`Api está rodando na porta http:/localhost:${port}`)
})
const express = require('express')
const mongoose =  require('mongoose')
const port = 3000
const app = express()

const linkSchema = new mongoose.Schema({
    title: String,
    description:String,
    url:String,
    click:Number
})

const Link = mongoose.model('Link', linkSchema)

let link = new Link({
    title:"Programdor",
    description:"Link para Linkedin",
    url:"https://www.linkedin.com/in/bruno-aguiar-01b5481aa/",
    click : 0
})

link.save().then(doc => {
    console.log(doc)
}).catch(err =>{console.log(err)})

mongoose.connect('mongodb://localhost/links', {
    useNewUrlParser: true,
    userUnifiedTopology: true,
    userMongoClient: true
})

let db = mongoose.connection

db.on("error", () => { console.log('Houve um erro') })
db.once("open", () => { console.log('Banco Carregado') })



app.listen(port, () => {
    console.log(`Api está rodando na porta http:/localhost:${port}`)
})
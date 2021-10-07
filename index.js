const express = require('express');
const app = express();
require('dotenv').config()
console.log(process.env)
// 
const port = process.env.PORT || 3000


// app.set('views', './views')
// view engine definieren
// app.set('view engine', 'ejs')

app.listen(port,() =>{
    console.log(`listening at https://localhost:${port}`)
})

app.get('/',(req,res) =>{
    console.log(process.env.API_KEY)
    console.log(process.env.USERNAME)
    res.render('index.ejs',
    {
        title: 'home',
        apiKey: process.env.API_KEY,
        username: process.env.USERNAME,
    })
})

app.get('/about',(req,res) =>{
    res.render('about.ejs')
})

app.get('/contact',(req,res) =>{
    res.render('contact.ejs')
})
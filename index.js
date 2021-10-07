const express = require('express');
const app = express();
require('dotenv').config()
// console.log(process.env)
const axios = require('axios');
// 
const port = process.env.PORT || 3000


// app.set('views', './views')
// view engine definieren
// app.set('view engine', 'ejs')

app.listen(port,() =>{
    console.log(`listening at https://localhost:${port}`)
})

// https://api.themoviedb.org/3/movie/550?api_key=dc8d718477779fa1c33a7a948657d07c

app.get('/',(req,res) =>{
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

app.get('/news',(req,res) =>{
    axios.get(`https://api.themoviedb.org/3/movie/550?api_key==${process.env.API_KEY}`)
    .then(function (response) {
    // handle success
    console.log(response.data.articles);
    res.render('news.ejs', {articles: response.data.articles})
})
    .catch(function (error) {
    // handle error
    console.log(error);
    })
})
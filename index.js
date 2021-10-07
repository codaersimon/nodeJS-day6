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

// https://newsapi.org/v2/everything?q=tesla&from=2021-09-07&sortBy=publishedAt&apiKey=e7ab6be519eb456cb3145732c1493ac7

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
    axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-09-07&sortBy=publishedAt&apiKey=${process.env.API_KEY}`)
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
const express = require('express');
const app = express();
const port = 3000

app.set('views', './views')
//view engine definieren
app.set('view engine', 'ejs')

app.listen(port,() =>{
    console.log(`listening at https://localhost:${port}`)
})

app.get('/',(req,res) =>{
    res.render('index.ejs',{title: 'homepage'})
})

app.get('/about',(req,res) =>{
    res.render('about.ejs')
})
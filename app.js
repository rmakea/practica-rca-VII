const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cors = require('cors');
const puerto = process.env.PORT || 3000;

const app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extenden : true}));
app.use(bodyParser.json())

//Definir rutas: login, categorias, index y Not Found
//GETS o POST

app.get('/',(req,res)=>{
    res.render('index');    
})

app.get('/login',(req,res)=>{
    res.render('signin-one');
})

app.get('/categorias',(req,res)=>{
    res.render('advance-table');    
})

app.get('*',(req,res)=>{
    res.render('404');
})

//Definir puerto en que se escuchan solicitudes
app.listen(puerto,()=>{
    console.log('El servidor esta corriendo en el puero: ' ,puerto);    
})
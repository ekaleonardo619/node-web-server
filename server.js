const express = require('express');
const hbs = require('hbs');
var app = express();


//create Partial or resuable part like footer 
hbs.registerPartials(__dirname + '/views/partials');


//create Static function
hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear()
});   

app.set('view_engine','hbs');
//use the static middleware
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=> {
   res.render('home.hbs',{
        titlePage: 'Home Page',
        welcomeMessage: 'Welcome to first project'
   });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        titlePage: 'About Page'
    });
});

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage: 'An Error Occurred Bad Url given'
    });
});

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});
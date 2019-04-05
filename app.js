var express = require('express');
var hbs = require('hbs');
var fs = require('fs');
const port=process.env.PORT || 3000;
var app = express();


hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('books.hbs',{
        heading: "Welcome to my Website",

    });
});
app.get('/books',(req,res)=>{
    res.render('books.hbs',{
        Heading:'maths',
        product1: "5 units",
        desc: "schand"
    });
});
app.get('/electronics',(req,res)=>{
    res.render('electronics.hbs',{
        Heading:'320 laptop',
        product1: "10 units",
        desc: "lenovo"
    });
});
app.get('/clothes',(req,res)=>{
    res.render('clothes.hbs',{
        Heading:'Shirts ',
        product1: "4 units",
        desc: "Reebok"
    });
});




app.listen(port,() => {
console.log(`server started at port ${port}` )});



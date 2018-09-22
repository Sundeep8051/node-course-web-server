const express = require('express');
var app = express();
const hbs = require('hbs');

const port = process.env.port || 3000;
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partialViews');

hbs.registerHelper('getCurrentYear',()=>{ return new Date().getFullYear()});

hbs.registerHelper('toUpper',(text)=>{
    return text.ToUpper();
});
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        heading:'Home Page',
        pageDetails:'Rendering Home page from handlebar package',
        
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        heading:'About Page',
        pageDetails: 'Rendering About page from handlebar package using "HBS.registerPartials" method'
    });
});

app.get('/badRequest',(req,res)=>{
    res.send({
        errorMessage : "Bad Request"
    });
});



app.listen(port,()=>{
    console.log(`node server listening at port: ${port}`);
});
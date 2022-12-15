// const mysql = require('mysql');
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

// Static Files
app.use(express.static('public'));

// Templating Engine
const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.get('', (req,res) => {
    res.render('home')
})

const routes = require('./route');
app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));


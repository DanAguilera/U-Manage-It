// Connection Pool
const app = require('./app');
const mysql = require('mysql');

let connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

exports.view = (req, res) => {
    connnection.getConnection((err) => {
        if(!err){
            console.log("connected");
        }
        else {
            console.log(err);
        }
        // Use the connection
        connection.query('SELECT * FROM user', (err, rows) =>{
            // When done with connection, release
            connection.release();
            if(!err) {
                res.render('home', {rows});
            } else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
   });
}


// module.exports = connection;
// const mysql = require('mysql');
// const app = require('./app')
// const index = require('./route')
// const express = require('express')
// const session = require('express-session');
// const exphbs = require('express-handlebars');
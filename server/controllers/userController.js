
// const app = require('../../app');
const mysql = require('mysql');

let connection = mysql.createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

exports.view = (req, res) => {
    connection.getConnection((err, connection) => {
        if(err) throw err;
        console.log('Connected as ID' + connection.threadId)
    
        connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
            connection.release();
            if(!err) {
            res.render('home', { rows });
            }
            else {
                console.log(err);
            }
            console.log('The data from user table: \n', rows);
        });
    });
}
// Find user by Search
exports.find = (req, res) => {
    connection.getConnection((err, connection) => {
        if(err) throw err;
        console.log('Connected as ID' + connection.threadId)
        
        let searchTerm = req.body.search;
        
        connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%','%' + searchTerm + '%'] , (err, rows) => {
            connection.release();
            if(!err) {
            res.render('home', { rows });
            }
            else {
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
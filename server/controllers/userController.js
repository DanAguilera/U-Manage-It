
// const app = require('../../app');
const { request } = require('express');
const mysql = require('mysql');

let connection = mysql.createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
// View Users
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
exports.form = (req, res) => {
    res.render('add-user');
};

// Add new User
exports.create = (req, res) => {
    const { first_name, last_name, email, phone, comments } = req.body;
    let searchTerm = req.body.search;
  
    // User the connection
    connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments], (err, rows) => {
      if (!err) {
        res.render('add-user', { alert: 'User added successfully.' });
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);
    });
  } 
  // Edit user
exports.edit = (req, res) => {
    // User the connection
    connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
      if (!err) {
        res.render('edit-user', { rows });
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);
    });
  }
  
  
  // Update User
  exports.update = (req, res) => {
    const { first_name, last_name, email, phone, comments } = req.body;
    // User the connection
    connection.query('UPDATE user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? WHERE id = ?', [first_name, last_name, email, phone, comments, req.params.id], (err, rows) => {
  
      if (!err) {
        // User the connection
        connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
          // When done with the connection, release it
          
          if (!err) {
            res.render('edit-user', { rows, alert: `${first_name} has been updated.` });
          } else {
            console.log(err);
          }
          console.log('The data from user table: \n', rows);
        });
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);
    });
  }
  
  // Delete User
  exports.delete = (req, res) => {
  
    // Delete a record
  
    connection.query('UPDATE user SET status = ? WHERE id = ?', ['removed', req.params.id], (err, rows) => {
      if (!err) {
        let removedUser = encodeURIComponent('User successeflly removed.');
        res.redirect('/?removed=' + removedUser);
      } else {
        console.log(err);
      }
      console.log('The data from user table are: \n', rows);
    });
  
  }
  
  // View Users
  exports.viewall = (req, res) => {
  
    // User the connection
    connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
      if (!err) {
        res.render('view-user', { rows });
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);
    });
  
  }


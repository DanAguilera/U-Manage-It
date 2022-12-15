
const connection = require('./connection');
const express = require('express')
const router = express.Router();

// Routes
router.get('/', connection.view);

module.exports = router




// const http = require('http');
// const app = require('./route');
// const server = http.createServer(app);
// require('dotenv').config();
// server.listen(process.env.PORT);
// const app = require('./app');

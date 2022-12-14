const app = require('./app');
const connection = require('./connection');

require('dotenv').config();
const http = require('http');
const app = require('./index');

const server = http.createServer(app);
server.listen(process.env.PORT);
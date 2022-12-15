
const userController = require('../controllers/userController');
const express = require('express')
const router = express.Router();

router.get('/', userController.view);
router.post('/', userController.find);
router.get('/adduser', userController.form);
router.post('/adduser', userController.create);

module.exports = router




// const http = require('http');
// const app = require('./route');
// const server = http.createServer(app);
// require('dotenv').config();
// server.listen(process.env.PORT);
// const app = require('./app');

const express = require('express');
const server = express();
const helmet = require('helmet');

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Welcome to the Spider-Man PS4 Twitter API!');
});

module.exports = server;
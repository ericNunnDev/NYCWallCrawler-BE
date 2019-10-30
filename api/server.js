const express = require('express');
const server = express();
const helmet = require('helmet');
const tweetsRoute = require('./routes/tweets');

server.use(helmet());
server.use(express.json());
server.use('/', tweetsRoute);

server.get('/', (req, res) => {
    res.send('Welcome to the NYCWallCrawler Spider-Man PS4 Twitter API!');
});

module.exports = server;
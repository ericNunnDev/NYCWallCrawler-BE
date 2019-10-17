require('dotenv').config();
const server = require('./api/server.js');

const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`\n=== Listening on port ${port}\n`);
});

server.get('/', (req, res) => {
    res.send('Welcome to the Spider-Man PS4 Twitter API!');
});
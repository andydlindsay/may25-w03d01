const express = require('express');
const port = 6789;

const server = express();

server.get('/users', (req, res) => {
  res.send('here are the users');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

const express = require('express');
const morgan = require('morgan');
const port = 6789;
let count = 0;

const server = express();

server.set('view engine', 'ejs');

server.use(morgan('dev'));

server.use((req, res, next) => {
  count++;
  console.log('number of users = ' + count);
  next();
});

server.get('/user', (req, res) => {
  // res.send('here are the users');
  // res.sendFile(`${__dirname}/index.html`);
  const templateVars = {
    name: 'Carol',
    age: 35,
    birthDate: 'February 29, 1985'
  };
  res.render('user', templateVars);
});

server.get('/users', (req, res) => {
  const templateVars = {
    users: [
      {
        username: 'Alice',
        age: 27
      },
      {
        username: 'Bob',
        age: 38
      },
      {
        username: 'Carol',
        age: 22
      },
    ]
  };
  res.render('users', templateVars);
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

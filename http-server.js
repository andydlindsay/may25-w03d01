const http = require('http');
const port = 3456;

const server = http.createServer((request, response) => {
  const verb = request.method;
  const path = request.url;
  const reqString = `${verb} ${path}`;

  switch (reqString) {
    case 'GET /users':
      response.end('here is all the users');
      break;
    case 'GET /posts':
      response.end('here is all the posts');
      break;
    default:
      response.end('page not found');
      break;
  }
});

server.listen(port, () => {
  console.log(`the server is listening on port ${port}`);
});

const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    // const readStream = fs.createReadStream('./static/index.html');
    // res.writeHead(200, { 'Content-type': 'text/html' });

    const readStream = fs.createReadStream('./static/exp.jpg');
    res.writeHead(200, { 'Content-type': 'image/jpg' });

    // const readStream = fs.createReadStream('./static/exp.json');
    // res.writeHead(200, { 'Content-type': 'application/json' });

    readStream.pipe(res);
  })
  .listen(3000);

const http = require('http');
const endpoint = require('./dist/index.js');

http.createServer(endpoint).listen(8000);

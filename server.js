const http = require('http');
const endpoint = require('./endpoint');

http.createServer(endpoint).listen(8000);

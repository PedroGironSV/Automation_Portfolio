const static = require('node-static');
const http = require('http');

const file_path = new (static.Server)("./");

console.log("starting local server");

http.createServer(function (req, res) {
    console.log("local server running");
    file_path.serve(req, res);

}).listen(8080);
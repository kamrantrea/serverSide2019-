// let express = require ('express');
// let http = require('http');
// let app = express();
// //create a route
// app.get('/', function(req, res){
//     res.writeHead(200);
//     res.write('Hello Express, Kamran is here!!!');
//     res.end();
// });
// //Create a server
// http.createServer(app).listen(3000);


let express = require ('express');
let http = require('http');
let app = express();
//create a route
app.get('/hello', function(req, res){
    res.writeHead(200);
    res.write('<h1>Hello</h1>');
    res.end();

});
//Create a server
http.createServer(app).listen(4567);

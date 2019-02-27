/*HERE WERE GETTING THE DATA FROM THE DATABASE
THAT WE ARE GOING TO DISPLAY*/
var express = require('express');
var app = express();
app.get('/', function(req, res){
    // res.send("hey")
    req.getConnection(function(error,connection){

        if (error) {
            throw error;
        }

        connection.query(`SELECT * FROM users ORDER BY id DESC`, function(err, rows, fields){
            if (err){
                res.send(err);
                console.log(err);
            }else{
                res.send(rows);
            }
            });
        });
    });
//EXTREMELY NECESSARY , SETS A CONNECTION BETWEEN OTHER FILES
module.exports = app;

/*HERE WERE GETTING THE DATA FROM THE DATABASE
THAT WE ARE GOING TO DISPLAY*/
var express = require('express')
var app = express()

app.get('/', function(req, res){
    // res.send("hey")
    req.getConnection(function(error,connection){

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

    
app.get('/add', function(req, res){
  
                res.sendFile("add.html", {"root":__dirname});
                
            })

//ADD NEW USER POST ACTION
app.post('/add', function(req,res,next){
    req.assert('name', 'Name is required').notEmpty() //validate name
    req.assert('age', 'age is required').notEmpty() 
    req.assert('email', 'A valid Email is required').isEmail() //validate email

    var user = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
    }

req.getConnection(function (error, conn){
conn.query('INSERT INTO users SET ?', user, function (err, result){
//    if(err) throw err
    if (err){
        res.send(err);
    }else{
        res.send('Data added sucessfully!')
    }
})

})

})
      
//EXTREMELY NECESSARY , SETS A CONNECTION BETWEEN OTHER FILES
module.exports = app;
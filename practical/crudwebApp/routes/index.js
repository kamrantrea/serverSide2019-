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
//PUT ACTION
app.put('/edit/ (:id)', function(req,res,next){
    req.assert('name', 'Name is required').notEmpty() //validate name
    req.assert('age', 'age is required').notEmpty() 
    req.assert('email', 'A valid Email is required').isEmail() //validate email

    var user = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
    }


    req.getConnection(function (error, conn){
        conn.query('UPDATE users SET ? WHERE id= ' + req.params.id, user, function (err, result){
        //    if(err) throw err
            if (err){
                res.send(err);
            }else{
                res.send('Data added sucessfully!')
            }
        })
        
        })



//SHOW EDIT USER FORM
app.get('/edit/(:id)', function(req, res, next){
    req.getConnection(function(error, conn){
        //Selecting users from database 
        conn.query('SELECT * FROM users where id = ' + req.params.id, function(err, rows, fields){
            if(err) throw err
            //if user not found
            if (rows.length <= 0){
                res.write("Empty result set")
            }else{
                for(var i=0; i<rows.length; i++){
                    //sends the forms info to the ejs template
                    res.render('edit',{
                        title: 'Edit User',
                        id: rows[i].id,
                        name: rows[i].name,
                        age: rows[i].age,
                        email: rows[i].email

                    })
                //res.write(rows[i].name);
                }
                res.end()
            }
        })
    })
})



})
      
//EXTREMELY NECESSARY , SETS A CONNECTION BETWEEN OTHER FILES
module.exports = app;
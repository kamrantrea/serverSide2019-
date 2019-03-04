//routes

//GET
var express = require('express');
var app = express();
app.use(express.static('public'));

/* GET home page. */

app.get('/', function(req, res) {
    req.getConnection(function(error, connection) {
        connection.query('SELECT * FROM pages WHERE id = 1', function (err, rows, fields) {
            // if (err throw err
            if (err) {
                res.send(err);
            }
            else {
                // res.send(rows);
                res.render('index.ejs', {data: rows[0],page:'Home', menuId:'home'} )
            }
        })
    });
});

/* GET about page. */
app.get('/about', function(req, res) {
    req.getConnection(function(error, connection) {
        connection.query('SELECT * FROM pages WHERE id = 2', function (err, rows, fields) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('about.ejs', {data: rows[0],page:'about', menuId:'about'} )
            }
        });
    });

});


/* GET services page. */
app.get('/services', function(req, res) {
    req.getConnection(function(error, connection) {
        connection.query('SELECT * FROM pages WHERE id = 3', function (err, rows, fields) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('services.ejs', {data: rows[0],page:'services', menuId:'services'} )
            }
        });
    });

});


/* GET blog page. */
app.get('/blog', function(req, res) {
    req.getConnection(function(error, connection) {
        connection.query('SELECT * FROM pages WHERE id = 4', function (err, rows, fields) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('blog.ejs', {data: rows[0],page:'blog', menuId:'blog'} )
            }
        });
    });

});




/* GET Contact page. */
app.get('/contact', function(req, res) {
    req.getConnection(function(error, connection) {
        connection.query('SELECT * FROM pages WHERE id = 5', function (err, rows, fields) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('contact.ejs', {data: rows[0],page:'contact', menuId:'contact'} )
            }
        });
    });

});






app.get('/', function(req, res) {
    req.getConnection(function(error, connection) {
        var title = "Kamran";
        connection.query('SELECT * FROM title ', function (err, result) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('menu.ejs', {data: rows[0] ,title: title, menu: result });
                console.log(result);
            }
        });
    });

});


module.exports = app;




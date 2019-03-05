//routes

//GET
var express = require('express');
var app = express();
app.use(express.static('public'));

/* GET home page. */

app.get('/', function (req, res) {

    req.getConnection(function (error, connection) {
        connection.query('SELECT * FROM pages order by id', function (err, rows, fields) {
            // if (err throw err
            if (err) {
                res.send(err);
            }
            else {
                // res.send(rows);
                let curMenu = null;
                rows.filter((item) => {
                    if(item.id == 1)
                curMenu = item;
            })
                res.render('index.ejs', { menus: rows, data: curMenu, page: 'Home', menuId: 'home' })
            }
        })
    });
});


/* GET about page. */
app.get('/about', function (req, res) {

    req.getConnection(function (error, connection) {
        connection.query('SELECT * FROM pages order by id', function (err, rows, fields) {
            if (err) {
                res.send(err);
            }
            else {
                let curMenu = null;
                rows.filter((item) => {
                    if(item.id == 2)
                curMenu = item;
            })
                res.render('about.ejs', { menus: rows, data: curMenu, page: 'about', menuId: 'about' })
            }
        });
    });

});


/* GET services page. */
app.get('/services', function (req, res) {
    req.getConnection(function (error, connection) {
        connection.query('SELECT * FROM pages order by id', function (err, rows, fields) {
            if (err) {
                res.send(err);
            }
            else {
                let curMenu = null;
                rows.filter((item) => {
                    if(item.id == 3)
                curMenu = item;
            })
                res.render('services.ejs', { menus: rows, data: curMenu, page: 'services', menuId: 'services' })
            }
        });
    });

});


/* GET blog page. */
app.get('/blog', function (req, res) {
    req.getConnection(function (error, connection) {
        connection.query('SELECT * FROM pages order by id', function (err, rows, fields) {
            if (err) {
                res.send(err);
            }
            else {
                let curMenu = null;
                rows.filter((item) => {
                    if(item.id == 4)
                curMenu = item;
            })
                res.render('blog.ejs', { menus: rows, data: curMenu, page: 'blog', menuId: 'blog' })
            }
        });
    });

});




/* GET Contact page. */
app.get('/contact', function (req, res) {
    req.getConnection(function (error, connection) {
        connection.query('SELECT * FROM pages order by id', function (err, rows, fields) {
            if (err) {
                res.send(err);
            }
            else {
                let curMenu = null;
                rows.filter((item) => {
                    if(item.id == 5)
                curMenu = item;
            })
                res.render('contact.ejs', { menus: rows, data: curMenu, page: 'contact', menuId: 'contact' })
            }
        });
    });

});



//
// app.get('/', function(req, res) {
//     req.getConnection(function(error, connection) {
//         var title = "Kamran";
//         connection.query('SELECT * FROM title ', function (err, result) {
//             if (err) {
//                 res.send(err);
//             }
//             else {
//                 res.render('menu.ejs', {data: rows[0] ,title: title, menu: result });
//                 console.log(result);
//             }
//         });
//     });
//
// });


module.exports = app;




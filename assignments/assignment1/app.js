//SETTING UP DEPENDENCIES AND ROUTES
var express = require('express');
var app = express();
var mysql = require('mysql');
var path = require('path');

/**
 * This middleware provides a consistent API
 * for MySQL connections during request/response life cycle
 */
var myConnection  = require('express-myconnection');

/**
 * Store database credentials in a separate config.js file
 * Load the file/module and its values
 */
var config = require('./config');
var dbOptions = {
    host:config.database.host,
    user:config.database.user,
    password:config.database.password,
    port:config.database.port,
    database:config.database.db
};

/**
 * 3 strategies can be used
 * single: Creates single database connection which is never closed.
 * pool: Creates pool of connections. Connection is auto release when response ends.
 * request: Creates new connection per new request. Connection is auto close when response ends.
 */
app.use(myConnection(mysql, dbOptions, 'pool'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// // set path for static assets
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

//middleware
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


/**
 * import routes/index.js
 * import routes/users.js
 */
var index = require('./routes/index');
app.use('/', index);
app.listen(3000, function(){
    console.log('Server running at port 3000: http://localhost:3000')});

module.exports = app;
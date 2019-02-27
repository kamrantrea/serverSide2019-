//routes

//GET
var express = require('express');
var app = express();

app.use(express.static('public'));

//HOME
app.get("/home.html", function (req, res) {
    res.sendFile( __dirname + "/" + "home.html" );
});


//ABOUT
app.get("/about.html", function (req, res) {
    res.sendFile( __dirname + "/" + "about.html" );
});

//SERVICES
app.get("/services.html", function (req, res) {
    res.sendFile( __dirname + "/" + "services.html" );
});

//BLOG
app.get("/blog.html", function (req, res) {
    res.sendFile( __dirname + "/" + "blog.html" );
});
//CONTACT
app.get("/contact.html", function (req, res) {
    res.sendFile( __dirname + "/" + "contact.html" );
});


//GET FOR CONTACT FORM
app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})




//POST

app.get('/contact.html', function (req, res) {
    res.sendFile( __dirname + "/" + " contact.html " );
})

//POST FOR CONTACT FORM
app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})


// SERVER


let express = require('express');
let app = express();
app.use(express.static(__dirname + '/public'));
// app.get('/',(req,res)=>{
//
//
//     res.send('Hello Express')
// });

app.listen(process.env.PORT || 3000)

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

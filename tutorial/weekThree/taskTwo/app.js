
    let express = require ('express');
    let app = express();
    //create a route
    app.use(express.static('public'));
    app.get('/form_get.html', function(req, res){
        res.sendFile(__dirname + "/" + "form_get.html");

    })
    app.get('/process_get',function(req,res){
       //Prepare output in JSON format
       response = {
           first_name:req.query.first_name,
           last_name:req.query.last_name
       } ;
       console.log(response);
       res.end(JSON.stringify(response));

    })

        let server = app.listen(8081,function(){
        let host = server.address().address
        let port = server.address().port
        console.log("example app listening at http://%:%s",host,port)
    })


    
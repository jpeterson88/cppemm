var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use( bodyParser.json());

app.listen(process.env.PORT || 4223);

var port = process.env.PORT != null ? process.env.PORT :  4223;
console.log('listening on port:' + port);

app.get('/[^\.]+$', function(req, res){
    res.set('Content-Type', 'text/html')
        .sendFile(__dirname + '/index.html');
});

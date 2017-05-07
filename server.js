var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use( bodyParser.json());

app.listen(process.env.PORT || 4223);

var port = process.env.PORT != null ? process.env.PORT :  4223;
console.log('listening on port:' + port);


app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/pages', express.static(__dirname + '/pages'));

app.all('/*', function(req, res, next) {
    
    res.sendFile('index.html', { root: __dirname });
});
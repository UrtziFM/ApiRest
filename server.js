const express = require('express');  
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function(req, res){
 res.json({"tutorial" : "Building an API REST with NodeJS"});
});

app.listen(3000, function(){ console.log('Server is  running at: http://localhost:3000');});
//Back end file

var express = require('express');
var	app = express();
//var api = require("./api")

app
	.use(express.static('./public'))
	.get('*', function(req,res){
		res.sendfile('public/main.html');
	})
	.listen(3000);

console.log("Front End Server listening on port 3000");
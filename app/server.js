var express = require("express");
var app = express();
var router = express.Router();
var cors = cors();

app.use(cors());
app.use(express.static('app'));
// app.use('/', express.static(__dirname + '/js/src/'));
// app.get('/projects', function(req, res) {
// 	res.sendFile(__dirname + '/js/src/projects/index.html');
// });

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/js/src/index/index.html');
// });

app.get('*.js', function(req, res) {
	console.log(req.url);
  res.sendFile(__dirname + req.url);
});

app.get('*.css', function(req, res) {
	res.sendFile(__dirname + req.url);
});

app.get('*.png', function(req, res) {
	res.sendFile(__dirname + req.url);
});

app.get('projects.json', function(req, res) {
	res.json(__dirname + 'js/src/projects/projects.json');
});

app.get('posts.json', function(req, res) {
	res.json(__dirname + 'js/src/blog/posts.json');
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('*', function(req, res) {
	res.sendFile(__dirname + req.url);
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});

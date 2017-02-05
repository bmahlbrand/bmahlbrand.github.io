const express = require('express');
const app = express();

// const router = express.Router();

const cors = require('cors');
const path = require('path');
const fs = require('fs');

app.use(cors());

// app.use(express.static('app'));

// app.use(express.static(path.join(__dirname, '../dist')));
// app.use(express.static(path.join(__dirname, '..')));

app.use(express.static('./dist'));

app.get('/*.css', (req, res) => {
    const filepath = path.join(__dirname, 'app/', req.url);

    res.sendFile(filepath);
});

app.get('/favicon.ico', (req, res) => {
    const filepath = path.join(__dirname, 'favicon.ico');

    res.sendFile(filepath);
});

app.get('/resume', (req, res) => {
    const filepath = path.join(__dirname, 'cv_ahlbrand.pdf');

    console.log('resume', filepath);
    res.sendFile(filepath);
});

app.get('*index.js', (req, res) => {
    const filepath = path.join(__dirname, 'node_modules/d3-cloud/build/d3.layout.cloud.js');

    res.sendFile(filepath);
});

app.get('*projects.json', (req, res) => {

    const filepath = path.join(__dirname, 'app/js/projects/projects.json');
    const encoding = 'utf8';
    const file = fs.readFileSync(filepath, encoding);

    res.json(JSON.parse(file));
});

app.get('*posts.json', (req, res) => {

    const filepath = path.join(__dirname, 'app/js/blog/posts.json');
    const encoding = 'utf8';
    const file = fs.readFileSync(filepath, encoding);

    res.json(JSON.parse(file));
});

app.get('*pix.json', (req, res) => {

    const filepath = path.join(__dirname, 'app/js/gallery/pix.json');
    const encoding = 'utf8';
    const file = fs.readFileSync(filepath, encoding);

    res.json(JSON.parse(file));
});

app.get('*.png', (req, res) => {
    res.sendFile(path.join(__dirname, req.url));
});

app.get('*.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, req.url));
});

/*
app.get('*.js', (req, res) => {
    console.log(path.join(__dirname, req.url));
    res.sendFile(path.join(__dirname, req.url));
});
*/
app.get('/*', (req, res) => {
    console.log(req.headers['user-agent']);
    console.log(path.join(__dirname, req.url));
    res.sendFile(path.join(__dirname, 'index.html'));
});

// app.use('/', express.static(__dirname + '/js/src/'));
// app.get('/projects', function(req, res) {
//  res.sendFile(__dirname + '/js/src/projects/index.html');
// });

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/js/src/index/index.html');
// });

// app.get('/*', (req, res) => {
//    res.sendFile(path.join(__dirname, 'index.html'));
// });
/*

app.get('*.css', (req, res) => {
    res.sendFile(path.join(__dirname, req.url));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});
*/
/*
app.get('*', (req, res) => {
    console.log(path.join(__dirname, req.url));
    res.sendFile(path.join(__dirname, req.url));
});
*/

app.listen(3001, () => {
    console.log('Live at Port 3000');
});

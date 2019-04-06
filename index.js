//Get dependancies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//Get API routes
const api = require('./server/routes/api.js');

const app = express();

//parsers for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
console.log("app useing body parser");
//point to static path to dist
app.use(express.static(path.join(__dirname, 'dist/sanfordweb')));
console.log("statics set");
//set api routes
app.use('/api', api);
console.log("api set");
//return root file for all other routes
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'dist/sanfordweb/index.html'));
});

const port = process.env.PORT || '8080';
app.set('port', port);

//Create http server
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`API running on localhost:${port}`);
});

const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors =  require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// SERVER SET UP - designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(8080, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

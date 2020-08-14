var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");
const FormRoutes = require("./src/routes/FormRoutes");
const cookieParser = require("cookie-parser");

var app = express();

// server config

var prod = true;
var basePath = "/api";
var port = 6200;
let uri = "";
if (prod) {
  mongoose
    .connect('mongodb://user@localhost:27017/jtmgifts', { useNewUrlParser: false })
    .then(() => console.log("connection with DB"))
    .catch((err) => console.log(err));
} else {
  uri = 'mongodb://mongodb';
}

app.use(cors());

// connection to DB prod or local



// App instance
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(basePath, FormRoutes);



// Execute App

app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
  console.log('Backend running on Port: ', port);
});
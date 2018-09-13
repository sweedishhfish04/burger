const exphbs  = require('express-handlebars')

const express = require("express");
const bodyParser = require("body-parser");
const router = require("./controllers/burgers_controller")

var app = express();

var PORT = process.env.PORT || 3000;
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use("", router)


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
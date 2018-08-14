const exphbs  = require('express-handlebars')

const express = require("express");
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
const bodyParser = require("body-parser");
const router = require("./controllers/burgers_controller")

var app = express();

var PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("", router)


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

/*orm.selectAll().then(function(burgers){
    console.log(burgers)
}).catch(function(err){
    console.error(err.message)
})

orm.updateOne("hamburger").then(function(){
    console.log("updated")
}).catch(function(err){
    console.error(err.message)
})

orm.insertOne("bacon burger").then(function(){
    console.log("inserted")
}).catch(function(err){
    console.error(err.message)
})*/
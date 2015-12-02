var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var complimentsController = require("./controllers/complimentsController");
var methodOverride = require("method-override")

app.use(methodOverride('_method'))
app.use(bodyParser.json());//
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// index
app.get("/compliments", complimentsController.index);

// root
app.get("/", function(req, res){
  res.redirect("/compliments")
});

// create

// new

// show


// edit

// update
 // update route code goes here...

// Run our app on Port 3000
app.listen(3000, function(){
  console.log("Listening on http://localhost:3000/");
})

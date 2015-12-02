var Compliment = require("../models/compliment");
var complimentsController = {
  index: function(req, res){
    res.render('compliments/index.hbs', {
      compliments: Compliment.all()
    });
  },
  show: function(req, res){
    });
  },
  new: function(req, res){
    res.render('compliments/new.hbs');
  },
  create: function(req, res){

  },
  // edit action code goes here...

  edit:function(req,res){

  },
 // update action code goes here...

  update: function(req, res){

    //update fuction here
  }

}

module.exports = complimentsController;

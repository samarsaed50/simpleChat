var express = require('express');
var router = express.Router();
var users=require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/adduser',function(req,res){
  for(var i in users){
    if(req.body.uname==users[i].name && req.body.psw==users[i].password){
      req.session.userid=users[i].id;
      req.session.username=users[i].name;
      res.cookie('name',users[i].name);
    // console.log(req.session.test);
     res.render('chat',{'usrs':users[i]}); 
     console.log(req.session.userid);
     console.log(req.cookies.name);
    }
   /* else{
      res.end('login failed');
    }*/
  }     
   //res.send(req.body);
  
})

router.get('/login',function(req,res){
  res.render('login'); 
})


module.exports = router;

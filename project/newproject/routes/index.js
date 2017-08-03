var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/newslist', function(req, res, next) {
  console.log(req.query);
/*  res.render('index', { title: 'Express' });*/
/*res.json({});*/
    res.send("123")

});
router.post('/newslist', function(req, res, next) {
    console.log(req.body);
  /*  res.render('index', { title: 'Express' });*/
    res.json({})

});
module.exports = router;

var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql2');
var dbConfig = require('../conf/db');
var userSQL = require('../dao/userMapping');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);

var user = require('../models/user');

//监听connection事件
pool.on('connection', function (connection) {
  connection.query('SET SESSION auto_increment_increment=1');
});
// 添加用户
router.get('/', function (req, res, next) {
  pool.query(userSQL.select, function (err, rows, fields) {
    if (err) throw err;

    res.json(rows);
  })
});

router.get('/:id', function (req, res, next) {
  
    // 查询用户
    user.findById(req.params.id).then (function (user) {
      res.json(user);
    });
  
});

router.get('/index/:id', function(req, res, next) {

  user.ifindById(req.params.id).then (function (user) {
    res.json(user);
  });
});

router.get('/index',function (req, res, next) {
  
})


module.exports = router;
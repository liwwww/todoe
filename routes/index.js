var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../conf/db');
var userSQL = require('../dao/userMapping');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);

//监听connection事件
pool.on('connection', function (connection) {
  connection.query('SET SESSION auto_increment_increment=1');
});
// 添加用户
router.get('/', function (req, res, next) {
  /**
 // 从连接池获取连接 
pool.getConnection(function(err, connection) { 
// 获取前台页面传过来的参数  
 var param = req.query || req.params;   
// 建立连接 增加一个用户信息 
connection.query(userSQL.select, function(err, result) {     

     // 以json形式，把操作结果返回给前台页面     
       //responseJSON(res, result);   
      res.json( result);
     // 释放连接  
      connection.release();  

       });
    });
      */

  pool.query(userSQL.select, function (err, rows, fields) {
    if (err) throw err;

    res.json(rows);
  })
});

router.get('/:id', function (req, res, next) {
  var id = req.params.id;
  pool.query(userSQL.selectId, [id], function (err, result) {
    res.json(result);
  })
})


module.exports = router;
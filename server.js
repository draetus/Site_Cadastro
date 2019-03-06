var app = require('./config/express')();
// const mysql = require('mysql');

 // const ConnectionUtil = require("./src/system/ConnectionUtil.js");

 app.listen(app.get('port'), function(req, res){
 	console.log("Servidor rodando com Express");
 });


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "0xff8029"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// var con = (new ConnectionUtil()).getConnection();
// console.log(con);
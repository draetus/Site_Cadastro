// var app = require('./config/express')();


//  app.listen(app.get('port'), function(req, res){
//  	console.log("Servidor rodando com Express");
//  });

var banco = require('./src/system/ConnectionUtil');
var user = require('./core/user/User');
var UserController = require('./core/user/UserController')

//banco.query("INSERT INTO User VALUES (?, ?, ?)", [0, 'Teste2', 'teste2']);

user.set("Jack", "Nicholson");

//UserController.create(banco, user)

console.log(UserController.select(banco, 0));
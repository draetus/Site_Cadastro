var User = require("./User");
var ConnectionUtil = require("../../system/ConnectionUtil");

class UserController {
	
	constructor(){

	}

	create(connection, user){
		sql = "INSERT INTO User VALUES (0, ? ?)"
		connection.query(sql, [user.firstname, user.lastname], function (err, result) {
		  if (err) throw err;
		  console.log("Result: " + result);
		  });
		};
	}
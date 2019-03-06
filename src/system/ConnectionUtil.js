//import * as mysql from "mysql";
var mysql = require("mysql");
var config = require("./Config");

var connection = mysql.createConnection({
		host: config.host,
		user: config.user,
		password: config.password,
		database: config.database
		});

var query = async function(sql, parameters){
	 await connection.query(sql, parameters);	
}

// class ConnectionUtil {

// 	constructor(){
// 		this.connection = mysql.createConnection({
// 		host: "localhost",
// 		user: "root",
// 		password: "0xff8029",
// 		database: "users"
// 		});
// 	}



// 	getConnection(){
// 		return this.connection;
// 	}

// 	query(sql, parameters){
// 		this.connection.query(sql, parameters);	
// 	}
// }

module.exports =  { connection, query };

// const con = new ConnectionUtil;
// con.query("INSERT INTO User VALUES (?, ?, ?)", [0, 'Teste2', 'teste2']);
// console.log("INSERÇÃO FEITA");
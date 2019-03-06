var create = function(connection, user){
	sql = "INSERT INTO User VALUES (?, ?, ?)"
	connection.query(sql, [0, user.firstname, user.lastname], function (err, result) {
	  if (err) throw err;
	  console.log("Result: " + result);
	  });
	};

var del = function(connection, id){
	sql = "DELETE FROM User WHERE id = ?"
	connection.query(sql, [id], function (err, result) {
	  if (err) throw err;
	  console.log("Result: " + result);
	  });
	};

var saida;

var consol = function(result){

	saida = result;
	console.log("DENTRO DA FUNCAO");
	console.log(saida);
}

var select = async function(connection, id){
	sql = "SELECT * FROM User WHERE id = ?"
	if (id == 0)
		sql = "SELECT * FROM User"

	await connection.query(sql, [id], function (err, result) {
	  if (err) throw err;
	  //console.log(saida);

	  consol(result);

	  });
	
	return saida;

	};

module.exports = {create, del, select};
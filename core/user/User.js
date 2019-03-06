var firstname = "";
var lastname = "";

var set = function(firstname, lastname){
	this.firstname = firstname;
	this.lastname = lastname;
}

module.exports = {firstname, lastname, set};
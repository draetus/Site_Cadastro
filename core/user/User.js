var Model = require("../../system/Model");

class User extends Model {
	
	constructor(firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname;
	}
}
var a = function() {

	var controller = {};
	
	controller.index = function(req, res) {
		res.render('teste');
	};	

	return controller;
}

module.exports = a;
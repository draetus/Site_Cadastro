var a = function() {

	var controller = {};
	
	controller.index = function(req, res) {
		res.render('index', {index: '/', real: "real"});
	};	

	return controller;
}

module.exports = a;
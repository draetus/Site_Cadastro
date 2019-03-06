var a = function() {

	var controller = {};
	
	controller.index = function(req, res) {
		res.render('real', {index: '/', real: "real"});
	};	

	return controller;
}

module.exports = a;
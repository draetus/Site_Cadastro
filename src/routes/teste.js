// app/routes/home.js
var controller = require('../controllers/teste')();

var a = function(app) {
	app.get('/teste', controller.index);
}

module.exports = a;
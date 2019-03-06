// app/routes/home.js
var controller = require('../controllers/home')();

var a = function(app) {

	app.get('/index', controller.index);
	app.get('/', controller.index);
}

module.exports = a;
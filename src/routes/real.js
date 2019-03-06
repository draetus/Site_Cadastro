// app/routes/real.js
var controller = require('../controllers/real')();

var a = function(app) {

	app.get('/real', controller.index);
}

module.exports = a;
var express = require('express');
var load = require('consign')
var bodyParser = require('body-parser');


module.exports = function() {
  var app = express();

  app.set('port', 3000);

  //app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views','./site/views');
  // novos middlewares
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static('./site/public'));
  //app.use(require('method-override')());

  load('models', {cwd: 'src'})
    .include('src')
    .then('controllers')
    .then('routes')
    .then('system')
    .into(app);

  return app;
};
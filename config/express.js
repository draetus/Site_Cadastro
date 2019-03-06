var express = require('express');
var load = require('consign')
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts')


module.exports = function() {
  var app = express();

  app.set('port', 3000);

  //app.use(express.static('./public'));
  app.set('view engine', 'ejs');   // Setamos que nossa engine será o ejs
  //app.use(expressLayouts)          // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
  //app.use(bodyParser.urlencoded()) // Com essa configuração, vamos conseguir parsear o corpo das requisições


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
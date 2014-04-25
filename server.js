var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var express=require("express");
var resource=require("express-resource");
var bodyParser =require('body-parser');
var methodOverride= require('method-Override');
var path=require('path');

var app=express();

app.use(bodyParser());
app.use(methodOverride());

app.set('views',path.join( __dirname, 'views'));
app.set('view engine', 'jade');

var ali_app_controller=require("./controllers/ali_app_controller.js");
app.resource(ali_app_controller);

app.listen(port, ipaddr);

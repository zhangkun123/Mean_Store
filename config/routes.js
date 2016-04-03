
var orders = require("../server/controllers/orders.js");
var customers = require("../server/controllers/customers.js");
var products = require("../server/controllers/products.js");
var bodyParser = require("body-parser");


module.exports = function(app)
{
	app.get('/customers', function(req, res)
	{
		customers.show(req,res);
	});

	app.post('/add_customer', bodyParser.json(), function(req,res)
	{
		customers.addCustomer(req,res);
	});

	app.post('/remove_customer', bodyParser.json(), function(req,res)
	{
		customers.removeCustomer(req,res);
	});


	
	app.get('/orders', function(req,res)
	{
		orders.show(req,res);
	});

	app.post('/add_order', bodyParser.json(), function(req, res)
	{
		orders.addOrder(req,res);
	});



	app.get('/products', function(req,res)
	{
		products.show(req,res);
	});

	app.post('/add_product', bodyParser.json(), function(req,res)
	{
		products.addProduct(req,res);
	});

	app.post('/order_product', bodyParser.json(), function(req,res)
	{
		products.orderProduct(req,res);
	});

	app.post('/check_product', bodyParser.json(), function(req,res)
	{
		products.checkProduct(req,res);
	});
};
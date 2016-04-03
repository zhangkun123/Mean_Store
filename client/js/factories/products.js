
miniStore.factory('productsFactory', function($http)
{
	var products = [];
	var factory = {};

	factory.getProducts = function(callback)
	{
		$http.get('/products').success(function(output)
		{
			products = output;
			callback(products);
		});
	}

	factory.addProduct = function(info, callback)
	{
		$http.post('/add_product', info).
			success(function()
			{
				console.log("Successfully added new product");
				callback();
			}).
			error(function()
			{
				console.log("Error while adding product");
			});
	}

	factory.productExists = function(info, callback)
	{
		$http.post('/check_product', info).
			success(function(output)
			{
				console.log("checked product successfully");
				callback(output);
			}).
			error(function()
			{
				console.log("error while checking product");
			});
	}

	factory.orderProduct = function(info)
	{
		$http.post('/order_product', info).
			success(function()
			{
				console.log("Successfully ordered product");
			}).
			error(function()
			{
				console.log("Error while ordering product");
			});
	}

	return factory;

});
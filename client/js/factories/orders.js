
miniStore.factory('ordersFactory', function($http)
{
	var orders = [];
	var factory = {};

	factory.getOrders = function(callback)
	{
		$http.get('/orders').success(function(output)
		{
			orders = output;
			callback(orders);
		});
	}

	factory.addOrder = function(info, callback)
	{
		$http.post('/add_order', info).
			success(function()
			{
				console.log("Successfully added new order");
				callback();
			}).
			error(function()
			{
				console.log("Error while adding order");
			});
	}

	return factory;

});
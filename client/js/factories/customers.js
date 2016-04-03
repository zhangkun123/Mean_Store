miniStore.factory('customersFactory', function($http)
{
	var customers = [];
	var factory = {};

	factory.getCustomers = function(callback)
	{
		$http.get('/customers').success(function(output)
        {
            customers = output;
            callback(customers);
        });
	}

	factory.addCustomer = function(info, callback)
	{
		$http.post('/add_customer', info).
			success(function()
			{
				console.log("Added customer successfully");
				callback();
			}).
			error(function()
			{
				console.log("Error while trying to add customer");
			});
	}

	factory.checkCustomer = function(name)
	{
		for (var i=0; i<customers.length; i++)
		{
			if (customers[i].name == name)
			{
				return true;
			}
		}
		return false;
	}

	factory.removeCustomer = function(info, callback)
	{
		$http.post('/remove_customer', info).
			success(function()
			{
				console.log("Successfully removed customer");
				callback();
			}).
			error(function()
			{
				console.log("Error while trying to remove customer");
			});
	}

	return factory;
})
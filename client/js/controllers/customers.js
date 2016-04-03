
miniStore.controller('customersController', function($scope, customersFactory)
{
	//get the customers data and set the scope customers variable
	customersFactory.getCustomers(function(data)
	{
		$scope.customers = data;
	});

	$scope.addCustomer = function()
	{
		if (!customersFactory.checkCustomer($scope.newCustomer.name))
		{
			if ($scope.newCustomer.name == "")
			{
				$('.error').html("Customer name cannot be blank");
			}
			else
			{
				//adds the customer to the database
				customersFactory.addCustomer($scope.newCustomer, function()
				{
					//updates the list of customers
					customersFactory.getCustomers(function(data)
					{
						$scope.customers = data;
					});
				});
				$('.error').html("");
			}
		}
		else
		{
			$('.error').html("User already exists!");
		}
	}

	$scope.removeCustomer = function($index)
	{
		customersFactory.removeCustomer($scope.customers[$index], function()
		{
			customersFactory.getCustomers(function(data)
			{
				$scope.customers = data;
			});
		});
	}
});
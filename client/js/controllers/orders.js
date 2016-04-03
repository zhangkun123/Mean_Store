
miniStore.controller('ordersController', function($scope, ordersFactory, customersFactory, productsFactory)
{
	ordersFactory.getOrders(function(data)
	{
		$scope.orders = data;
	});

	customersFactory.getCustomers(function(data)
	{
		$scope.customers = data;
	});

	productsFactory.getProducts(function(data)
	{
		$scope.products = data;
	});

	$scope.addOrder = function()
	{
		ordersFactory.addOrder($scope.newOrder, function()
		{
			ordersFactory.getOrders(function(data)
			{
				$scope.orders = data;
			});
		});
		//update the products supply
		productsFactory.orderProduct($scope.newOrder);
		$scope.newOrder = {};
	}
});
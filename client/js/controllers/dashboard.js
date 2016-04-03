miniStore.controller('dashboardController', function($scope, productsFactory, ordersFactory, customersFactory)
{
	productsFactory.getProducts(function(data)
	{
		$scope.products = data;
	});

	ordersFactory.getOrders(function(data)
	{
		$scope.orders = data;
	});

	customersFactory.getCustomers(function(data)
	{
		$scope.customers = data;
	});

	var limitStep = 5;
	$scope.limit = limitStep;
	
	$scope.incrementLimit = function() {
	    $scope.limit += limitStep;
	};

});
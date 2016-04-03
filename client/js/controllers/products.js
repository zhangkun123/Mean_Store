
miniStore.controller('productsController', function($scope, productsFactory)
{
	$scope.newProduct = {};

	productsFactory.getProducts(function(data)
	{
		$scope.products = data;
	});

	$scope.addProduct = function()
	{
		if ($scope.newProduct.name === undefined ||
		 $scope.newProduct.image === undefined || 
		 $scope.newProduct.description === undefined || 
		 $scope.newProduct.supply === undefined)
		{
			$('.error').html("Please fill in all of the product information");
			$('.error').css('color', 'red');
		}
		else
		{
			var exists;
			productsFactory.productExists($scope.newProduct, function(check)
			{
				exists = check;
				if (exists === false)
				{
					productsFactory.addProduct($scope.newProduct, function()
					{
						productsFactory.getProducts(function(data)
						{
							$scope.products = data;
						});
					});
				}
				else if (exists === true)
				{
					$('.error').html("Product already exists");
					$('.error').css('color', 'red');
				}
			});
		}
	}
});
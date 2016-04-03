var mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = (function()
{
	return {

		show: function(req, res)
		{
			Product.find({}, function(err, results)
			{
				if (err)
				{
					console.log("Error retrieving product list");
				}
				else
				{
					//console.log("Successfully retrieved product list");
					res.json(results);
				}
			});
		},

		addProduct: function(req, res)
		{
			var new_product = new Product({
				name: req.body.name,
				image: req.body.image,
				description: req.body.description,
				supply: req.body.supply});

			console.log("New Product: ", new_product);
			new_product.save(function(err)
			{
				if (err)
				{
					console.log("Error while trying to add new product to the database");
				}
				else
				{
					console.log("Successfully added product");
					res.json(true);
				}
			});
		},

		checkProduct: function(req,res)
		{
			Product.findOne({name: req.body.name}, function(err, results)
			{
				console.log("results", results);
				if (err)
				{
					console.log("Error while checking product");
				}
				else if (results == null)
				{
					console.log("Product does not exist");
					res.json(false);
				}
				else
				{
					console.log("Product exists");
					res.json(true);
				}
			});
		},

		orderProduct: function(req, res)
		{
			Product.update({name: req.body.product}, 
						   {$inc: {supply: -req.body.quantity}},
						    function(err, result)
			{
				if (err)
				{
					console.log("Error while updating product");
				}
				else
				{
					console.log("Product updated successfully");
				}
				res.json(true);
			});
		}
	}
})();
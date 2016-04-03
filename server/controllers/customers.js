
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {
		show: function(req, res) {
			Customer.find({}, function(err, results)
			{
				if (err)
				{
					console.log("Error while trying to retrieve customers");
				}
				else
				{
					res.json(results);
				}
			});
		},

		addCustomer: function(req, res)
		{
			var new_customer = new Customer({name: req.body.name});
			new_customer.save(function(err)
			{
				if (err)
				{
					console.log("Error while trying to add a new customer");
				}
				else
				{
					res.json(true);
				}
			});
		},

		removeCustomer: function(req,res)
		{
			Customer.remove({_id: req.body._id}, function(err, results)
			{
				if (err)
				{
					console.log("There was an error while trying to delete the customer");
				}
				else
				{
					console.log("Customer was deleted succesfully");
					res.json(true);
				}
			});
		}
	}
})();

var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function() {
	return {
		show: function(req, res) {
			Order.find({}, function(err, results)
			{
				if (err)
				{
					console.log("Error while trying to retrieve orders");
				}
				else
				{
					res.json(results);
				}
			});
		},

		addOrder: function(req, res)
		{
			var new_order = new Order({
				customer: req.body.customer,
				product: req.body.product,
				quantity: req.body.quantity});
			
			new_order.save(function(err)
			{
				if (err)
				{
					console.log("Error while trying to add a new order");
				}
				else
				{
					res.json(true);
				}
			});
		}
	}
})();
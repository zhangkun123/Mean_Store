var mongoose = require('mongoose');
// create our friendSchema
var OrderSchema = new mongoose.Schema(
{
	customer: String,
	product: String,
	quantity: Number,
	date: { type: Date, default: Date.now }
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Order', OrderSchema);
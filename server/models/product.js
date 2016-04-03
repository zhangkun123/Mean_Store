var mongoose = require('mongoose');
// create our friendSchema
var ProductSchema = new mongoose.Schema(
{
	name: String,
	image: String,
	description: String,
	supply: Number
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Product', ProductSchema);
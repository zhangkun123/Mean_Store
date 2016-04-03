var mongoose = require('mongoose');
// create our friendSchema
var CustomerSchema = new mongoose.Schema(
{
	name: String,
	created: { type: Date, default: Date.now }
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Customer', CustomerSchema);